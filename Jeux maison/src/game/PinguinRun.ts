import Phaser from 'phaser'
import TextureKeys from '~/consts/TextureKeys'
import Pinguin from '~/game/Pingouin'
import EndGame from './Endgame';
import PinguinRunBase from './PinguinRunBase';
import TweenHelper from './TweenHelper';
import Ui from './Ui';

export default class PinguinRun extends PinguinRunBase {
    private icebackground!: Phaser.GameObjects.TileSprite
    private cursors!: Phaser.Types.Input.Keyboard.CursorKeys
    private tiles!: Phaser.Physics.Arcade.StaticGroup
    private infiniteTiles!: Phaser.GameObjects.TileSprite
    private Title!: Phaser.GameObjects.Image
    public pinguin!: Pinguin
    private coins!: Phaser.Physics.Arcade.StaticGroup
    private gems!: Phaser.Physics.Arcade.StaticGroup
    private icebergs!: Phaser.Physics.Arcade.StaticGroup
    public stars!: Phaser.Physics.Arcade.StaticGroup
    private emitter!: Phaser.GameObjects.Particles.ParticleEmitterManager
    private lvlData !: LevelData
    private avaibleLevel = []
    public lvlNumber = 0
    public coinCount = 0
    public gemCount = 0
    public totalcoin = 0
    public totalgem = 0
    constructor() {
        super('pinguinrun')
        fetch('assets/ice/Level/manifest.json')
            .then(res => res.json())
            .then(data => this.avaibleLevel = data)

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
                        Ui.prototype.reset()
                    }
                    this.snowFall()
                })
        }
        else {
            EndGame.prototype.endGame()
        }



        this.cursors = this.input.keyboard.createCursorKeys()
    }
    update() {

        if (this.cursors.space.isDown && this.pinguin.active == false) {
            if (this.lvlNumber < this.avaibleLevel.length) {
                EndGame.prototype.continue()
            }
            else {
                EndGame.prototype.returnToMenu()
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
                    console.log('erreur')
                }
                break
        }
    }
    protected startMenu(lvlData: LevelData) {
        this.lvlData = lvlData;

        const width = this.scale.width
        const height = this.scale.height

        this.icebackground = this.add.tileSprite(0, 0, width, height, TextureKeys.Icebackground)
            .setOrigin(0)
            .setScrollFactor(0)


        this.infiniteTiles = this.add.tileSprite(0, 704, width, 64, TextureKeys.StartMenuTile)
            .setOrigin(0)
            .setScrollFactor(0)

        this.Title = this.add.image(10, 32, TextureKeys.Title)
            .setOrigin(0)
            .setScrollFactor(0)

        this.add.existing(this.Title)
        const screenText = this.add.text(72, 512, 'Appuyez sur espace pour commencer', { fontSize: '42px', fontFamily: 'Arial Black', color: '0x000000' }).setOrigin(0).setScrollFactor(0);
        TweenHelper.flashElement(this, screenText)

        this.createPlayer(this.lvlData.playerStart)

        this.physics.world.setBounds(
            0, 0,
            Number.MAX_SAFE_INTEGER, this.scale.height,
            false, false, true, true
        )

        this.physics.world.gravity.setTo(0)

        this.pinguin.setActive(false)

        this.cameras.main.setBounds(0, 0, Number.MAX_SAFE_INTEGER, this.scale.height)

        this.cameras.main.startFollow(this.pinguin)

        this.pinguin.startAutorun()

    }
    public loadLevel(lvlData: LevelData) {
        this.lvlData = lvlData;

        this.createObstacles(this.lvlData.obstacles);

        this.createCollectibles(this.lvlData.collectibles);

        this.createWorld(this.lvlData.world);

        this.createPlayer(this.lvlData.playerStart);

        this.createStatics();

        Ui.prototype.createUI()


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

            this.totalgem += 1

            switch (obj.getData('color')) {
                case 'blue':
                    obj.setTexture(TextureKeys.UI, 'blueGemBlockE.png')
                    break
                case 'green':
                    obj.setTexture(TextureKeys.UI, 'greenGemBlockE.png')
                    break
                case 'red':
                    obj.setTexture(TextureKeys.UI, 'redGemBlockE.png')
                    break
            }

            Ui.prototype.update()

        }
        else if (this.coins.contains(obj2)) {
            const obj = obj2 as Phaser.Physics.Arcade.Sprite

            this.coins.killAndHide(obj)

            obj.body.enable = false

            this.coinCount += 1

            this.totalcoin += 1


        }

        Ui.prototype.update()

    }

    protected createPlayer(playerStart: PlayerStartData) {
        this.pinguin = new Pinguin(this, playerStart.x, playerStart.y)
        this.add.existing(this.pinguin)
    }

    protected createStatics() {

        const width = this.scale.width
        const height = this.scale.height

        this.icebackground = this.add.tileSprite(0, 0, width, height, TextureKeys.Icebackground)
            .setOrigin(0)
            .setScrollFactor(0);

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
            EndGame.prototype.win,
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
            this.icebergs.create(iceberg.x, iceberg.y, TextureKeys.Icerberg)
                .setOrigin(0.5)
        }
    }

    protected createCoin(coinData: CoinData) {
        this.coins.create(coinData.x, coinData.y, TextureKeys.Colectible, 'object_06_coin.png')
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
        this.stars.create(data.x, data.y, TextureKeys.Colectible, 'object_04_star.png')
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
