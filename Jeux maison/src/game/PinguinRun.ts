import Phaser from 'phaser'
import TextureKeys from '~/consts/TextureKeys'
import Pinguin from '~/game/Pingouin'
import EndGame from './Endgame';
import Ui from './Ui';
import { LevelData, ObjectBaseData, CoinData, GemData, CollectibleData, KeyedObjectData, TileData, ObstacleData, Collectible, WorldData, PlayerStartData, CollectiblesData, ObstaclesData, Base } from '~/consts/Interfaces'
import { Events } from 'matter';
enum gameState {
    Start,
    Pause
}
export default class PinguinRun extends Phaser.Scene implements Base {
    public gameState = gameState.Pause
    private icebackground!: Phaser.GameObjects.TileSprite
    private cursors!: Phaser.Types.Input.Keyboard.CursorKeys
    private pointer!: Phaser.Input.Pointer
    private tiles!: Phaser.Physics.Arcade.StaticGroup
    private infiniteTiles!: Phaser.GameObjects.TileSprite
    private Title!: Phaser.GameObjects.Image
    public pinguin!: Pinguin
    private Ui!: Ui
    private EndGame!: EndGame
    private coins!: Phaser.Physics.Arcade.StaticGroup
    private gems!: Phaser.Physics.Arcade.StaticGroup
    private icebergs!: Phaser.Physics.Arcade.StaticGroup
    public stars!: Phaser.Physics.Arcade.StaticGroup
    private emitter!: Phaser.GameObjects.Particles.ParticleEmitterManager
    private avaibleLevel = []
    public lvlNumber!: number
    public coinCount!: number
    public gemCount!: number
    public totalCoin!: number
    public totalGem!: number
    public blueGem!: Phaser.GameObjects.Sprite
    public greenGem!: Phaser.GameObjects.Sprite
    public redGem!: Phaser.GameObjects.Sprite
    private startBtn!: Phaser.GameObjects.Sprite
    private editorBtn!: Phaser.GameObjects.Sprite
    constructor() {
        super('pinguinrun')

        this.EndGame = new EndGame(this)
        this.Ui = new Ui(this)
        this.lvlNumber = 0
        this.coinCount = 0
        this.gemCount = 0
        this.totalCoin = 0
        this.totalGem = 0

        fetch('assets/ice/Level/manifest.json')
            .then(res => res.json())
            .then(data => this.avaibleLevel = data)            
    }
    public setBlueGem(value) {
        this.blueGem = value
    }
    public setGreenGem(value) {
        this.greenGem = value
    }
    public setRedGem(value) {
        this.redGem = value
    }
    public setLvlNumber(number: number) {
        this.lvlNumber = number
    }
    public setCoinCount(number: number) {
        this.coinCount += number
    }
    public setGemCount(number: number) {
        this.gemCount += number
    }
    public getLvlNumber() {
        return this.lvlNumber
    }
    public getCoinCount() {
        return this.coinCount
    }
    public getGemCount() {
        return this.gemCount
    }
    public gettotalCoin() {
        return this.totalCoin
    }
    public gettotalGem() {
        return this.totalGem
    }
    public getScene() {
        return this
    }
    create() {
        const lvlFind = this.avaibleLevel[this.lvlNumber]

        if (lvlFind != undefined) {
            fetch(`assets/ice/Level/${lvlFind}`)
                .then(res => res.json())
                .then((lvlData) => {

                    if (this.lvlNumber === 0) {
                        this.startMenu(lvlData)
                    }
                    else {
                        this.loadLevel(lvlData)
                        this.coinCount = 0
                        this.Ui.reset()
                    }
                    this.snowFall()
                })
        }
        else {
            this.EndGame.endGame()
        }



        this.cursors = this.input.keyboard.createCursorKeys()
        this.pointer = this.input.activePointer

    }
    update(d, dt) {

        if (this.cursors.space.isDown && this.gameState === gameState.Pause) {
            if (this.lvlNumber < this.avaibleLevel.length) {
                this.EndGame.continue()
            }
            else {
                this.EndGame.returnToMenu()
            }
        }
        switch (this.lvlNumber) {
            default:
                return
            case 0:
                if (this.infiniteTiles != undefined) {
                    this.icebackground.tilePositionX += 1
                    this.infiniteTiles.tilePositionX += 1

                }
                else {
                    console.log(this.lvlNumber)
                }
                break
        }
    }
    protected startMenu(lvlData: LevelData) {

        const width = this.scale.width
        const height = this.scale.height

        this.icebackground = this.add.tileSprite(0, 0, width, height, TextureKeys.Icebackground)
            .setOrigin(0)
            .setScrollFactor(0)


        this.infiniteTiles = this.add.tileSprite(0, 704, width, 64, TextureKeys.StartMenuTile)
            .setOrigin(0)
            .setScrollFactor(0)

        this.Title = this.add.image(10, -20, TextureKeys.Title)
            .setOrigin(0)
            .setScrollFactor(0)

        this.startBtn = this.add.sprite(512, 500, TextureKeys.Button, 'playBtn.png').setScale(0.6).setInteractive()
        this.startBtn.on('pointerdown', () => {
            this.startBtn.setScale(0.5)
        }).on('pointerup', (e) => {
            this.startBtn.setScale(0.6)
            console.log('btn click')
            this.EndGame.continue()
            e.event.stopPropagation()
        })

        this.editorBtn = this.add.sprite(512, 582, TextureKeys.Button, 'editorBtn.png').setScale(0.6).setInteractive()
        this.editorBtn.on('pointerdown', () => {
            this.editorBtn.setScale(0.5)
        }).on('pointerup', (e) => {
            this.editorBtn.setScale(0.6)
            this.scene.start('editor')
            e.event.stopPropagation()
        })

        this.createPlayer(lvlData.playerStart)

        this.physics.world.setBounds(
            0, 0,
            Number.MAX_SAFE_INTEGER, this.scale.height,
            false, false, true, true
        )

        this.physics.world.gravity.setTo(0)

        this.cameras.main.setBounds(0, 0, Number.MAX_SAFE_INTEGER, this.scale.height)

        this.cameras.main.startFollow(this.pinguin)

        this.pinguin.startAutorun()

    }
    public loadLevel(lvlData: LevelData) {

        this.gameState = gameState.Start

        this.createBackground()

        this.createObstacles(lvlData.obstacles);

        this.createCollectibles(lvlData.collectibles);

        this.createWorld(lvlData.world);

        this.createPlayer(lvlData.playerStart);

        this.Ui.createUI()
        this.createStatics();
        console.log(this.avaibleLevel)


    }
    private createBackground() {
        const width = this.scale.width
        const height = this.scale.height

        this.icebackground = this.add.tileSprite(0, 0, width, height, TextureKeys.Icebackground)
            .setOrigin(0)
            .setScrollFactor(0);
    }
    private handleCollectItem(
        obj1: Phaser.GameObjects.GameObject,
        obj2: Phaser.GameObjects.GameObject
    ) {
        if (this.gems.contains(obj2)) {
            const obj = obj2 as Phaser.Physics.Arcade.Sprite

            this.gems.killAndHide(obj)

            obj.body.enable = false

            this.gemCount += 1

            this.totalGem += 1

            switch (obj2.getData('color')) {
                case 'blue':
                    this.blueGem.setTexture(TextureKeys.UI, 'blueGemBlockE.png')
                    break
                case 'green':
                    this.greenGem.setTexture(TextureKeys.UI, 'greenGemBlockE.png')
                    break
                case 'red':
                    this.redGem.setTexture(TextureKeys.UI, 'redGemBlockE.png')
                    break
            }
            this.Ui.update()
        }
        else if (this.coins.contains(obj2)) {
            const obj = obj2 as Phaser.Physics.Arcade.Sprite

            this.coins.killAndHide(obj)

            obj.body.enable = false

            this.coinCount += 1

            this.totalCoin += 1

            this.Ui.update()
        }
        else if (this.stars.contains(obj2)) {
            const obj = obj2 as Phaser.Physics.Arcade.Sprite

            this.stars.killAndHide(obj)

            obj.body.enable = false

            this.gameState = gameState.Pause

            this.pinguin.setActive(false)

            this.EndGame.showScore()
        }

    }

    protected createPlayer(playerStart: PlayerStartData) {
        this.pinguin = new Pinguin(this, playerStart.x, playerStart.y)
        this.add.existing(this.pinguin)
    }

    protected createStatics() {


        this.physics.world.setBounds(
            0, 0,
            1216.1, this.scale.height,
            true, false, true, true
        )

        this.physics.add.overlap(
            this.coins,
            this.pinguin,
            this.handleCollectItem,
            undefined,
            this
        )
        this.physics.add.overlap(
            this.gems,
            this.pinguin,
            this.handleCollectItem,
            undefined,
            this
        )
        this.physics.add.overlap(
            this.icebergs,
            this.pinguin,
            this.pinguin.kill.bind(this.pinguin),
            undefined,
            this
        )
        this.physics.add.overlap(
            this.stars,
            this.pinguin,
            this.handleCollectItem,
            undefined,
            this
        )

        this.physics.add.collider(this.pinguin, this.tiles)
        this.cameras.main.setBounds(0, 0, 1216.1, this.scale.height)

        this.cameras.main.startFollow(this.pinguin)
    }

    protected createWorld(worldData: WorldData) {
        this.tiles = this.physics.add.staticGroup();
        for (let tile of worldData) {
            this.createTile(tile)
        }

    }
    protected createCollectibles(collectiblesData: CollectiblesData) {
        this.gems = this.physics.add.staticGroup()
        this.coins = this.physics.add.staticGroup()
        this.stars = this.physics.add.staticGroup()
        for (let collectible of collectiblesData) {
            switch (collectible.type) {
                case 'gem':
                    this.createGem(collectible as GemData);
                    break;
                case 'coin':
                    this.createCoin(collectible as CoinData);
                    break;
                case 'star':
                    this.createStar(collectible);
                    break

                default:
                    throw new Error("Unknown collectible type.")
            }
        }
    }
    protected createObstacles(obstaclesData: ObstaclesData) {
        this.icebergs = this.physics.add.staticGroup();
        for (let iceberg of obstaclesData) {
            this.icebergs.create(iceberg.x, iceberg.y, TextureKeys.Icerberg, "iceberg.png")
                .setOrigin(0.5)
        }
    }

    protected createCoin(coinData: CoinData) {
        this.coins.create(coinData.x, coinData.y, TextureKeys.Colectible, 'coin.png')
            .setOrigin(0.5)
    }

    protected createTile(tileData: TileData) {
        const textureName = `${tileData.key}.png`;

        this.tiles.create(tileData.x, tileData.y, TextureKeys.Tile, textureName)
            .setOrigin(0.5)
    }
    protected createGem(gemData: GemData) {
        const textureName = `gem_${gemData.color}.png`;

        this.gems.create(gemData.x, gemData.y, TextureKeys.Colectible, textureName)
            .setOrigin(0.5).setData('color', gemData.color)
    }

    protected createStar(data) {
        this.stars.create(data.x, data.y, TextureKeys.Colectible, 'star.png')
    }

    protected getCollectibleOfType(collectiblesData, typeName) {
        return this.getCollectiblesOfType(collectiblesData, typeName)[0];
    }

    protected getCollectiblesOfType(collectiblesData, typeName) {
        return collectiblesData.filter(d => d.type === typeName);
    }

    protected snowFall() {
        this.emitter = this.add.particles(TextureKeys.Snowfalkes, [0, 1, 2, 3, 4, 5])
        this.emitter.createEmitter({
            x: { min: 0, max: 1024 },
            y: 0,
            lifespan: this.scale.height * 10,
            speedY: { min: 50, max: 150 },
            speedX: 0,
            scale: { min: 0.8, max: 1.2 },
            rotate: { min: 0, max: 40 },
            blendMode: 'ADD'
        }).setScrollFactor(0)
    }

}
