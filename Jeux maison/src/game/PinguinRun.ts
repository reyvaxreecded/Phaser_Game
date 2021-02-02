import { Body } from 'matter';
import Phaser from 'phaser'
import AnimationKeys from '~/consts/AnimationKeys';
import TextureKeys from '~/consts/TextureKeys'
import Pinguin from '~/game/Pingouin'
import TweenHelper from './TweenHelper';

interface ObjectBaseData {
    x: number;
    y: number;
}

interface KeyedObjectData extends ObjectBaseData {
    key: string;
}

interface TileData extends KeyedObjectData { }

interface ObstacleData extends KeyedObjectData { }

interface CollectibleData extends ObjectBaseData {
    type: string;
}

interface GemData extends CollectibleData {
    color: string;
}

interface CoinData extends CollectibleData { }

type Collectible = GemData | CoinData;
type WorldData = Array<TileData>;
type ObstaclesData = Array<ObstacleData>;
type CollectiblesData = Array<Collectible>;
type PlayerStartData = ObjectBaseData;

interface LevelData {
    collectibles: CollectiblesData;
    playerStart: PlayerStartData;
    obstacles: ObstaclesData;
    world: WorldData;
}

export default class PinguinRun extends Phaser.Scene {
    private icebackground!: Phaser.GameObjects.TileSprite
    private cursors!: Phaser.Types.Input.Keyboard.CursorKeys
    private tiles!: Phaser.Physics.Arcade.StaticGroup
    private infiniteTiles!: Phaser.GameObjects.TileSprite
    private Title!:Phaser.GameObjects.Image
    private pinguin!: Pinguin
    private coins!: Phaser.Physics.Arcade.StaticGroup
    private gems!: Phaser.Physics.Arcade.StaticGroup
    private icebergs!: Phaser.Physics.Arcade.StaticGroup
    private stars!: Phaser.Physics.Arcade.StaticGroup
    private scoreLabel!: Phaser.GameObjects.Text
    public lvlNumber = 0
    private progressBar!: Phaser.GameObjects.Sprite
    private blueGem!: Phaser.GameObjects.Sprite
    private greenGem!: Phaser.GameObjects.Sprite
    private redGem!: Phaser.GameObjects.Sprite
    private lvlData !: LevelData
    private coinCount = 0
    private count = 0
    private gemCount = 0
    private totalcoin = 0
    private totalgem = 0

    constructor() {
        super('pinguinrun')        
    }
    create() 
    { 
        this.coinCount = 0
        this.count = 0
        this.gemCount = 0   
        
        switch(this.lvlNumber)
        {
            default:
                fetch(`assets/ice/Level/Lvl${this.lvlNumber}.json`)
                    .then(res => res.json())            
                    .then(lvlData => this.loadLevel(lvlData))
                break                
            case 0:                                           
                fetch(`assets/ice/Level/Lvl${this.lvlNumber}.json`)
                    .then(res => res.json())            
                    .then(lvlData => this.startMenu(lvlData))                            
                break 
        }            
            
        this.cursors = this.input.keyboard.createCursorKeys()
    }
    update( )
    {
        if(this.cursors.space.isDown && this.pinguin.active==false) 
        {                     
            this.continue()
        }    
        switch(this.lvlNumber)
        {
            default:
                return
            case 0:
                if(this.infiniteTiles != undefined){
                    this.icebackground.tilePositionX+=1
                    this.infiniteTiles.tilePositionX+=1    
                }
                else
                {
                    console.log('erreur')
                } 
                break           
        }    
    }
    protected startMenu(lvlData: LevelData)
    {
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
        const screenText = this.add.text(72, 512, 'Appuyez sur espace pour commencer',{fontSize: '42px',fontFamily: 'Arial Black', color: '0x000000'}).setOrigin(0).setScrollFactor(0);
        TweenHelper.flashElement(this, screenText)

        this.createPlayer(this.lvlData.playerStart)        

        this.physics.world.setBounds(
            0, 0,
            Number.MAX_SAFE_INTEGER, this.scale.height,
            false, false, true, true
        )        

        this.physics.world.gravity.setTo(0)    
        
        this.pinguin.setActive(false )
        
        this.cameras.main.setBounds(0, 0, Number.MAX_SAFE_INTEGER, this.scale.height)  
        
        this.cameras.main.startFollow(this.pinguin)
        
        this.pinguin.startAutorun()

    }
    public loadLevel(lvlData: LevelData) {
        this.lvlData = lvlData;


        const width = this.scale.width
        const height = this.scale.height

        this.icebackground = this.add.tileSprite(0, 0, width, height, TextureKeys.Icebackground)
            .setOrigin(0)
            .setScrollFactor(0);

        this.createObstacles(this.lvlData.obstacles);

        this.createCollectibles(this.lvlData.collectibles);

        this.createWorld(this.lvlData.world);

        this.createPlayer(this.lvlData.playerStart);

        this.createStatics();

        this.creeateUI()

    }
    protected continue()
    {
        this.lvlNumber += 1
        this.scene.start('pinguinrun')
          
    }
    private creeateUI() {
        this.scoreLabel = this.add.text(10, 10, `${this.coinCount}/10`, {
            fontSize: '24px',
            fontFamily: 'Cooper Black',
            color: '#000000',
            padding: { right: 15, top: 10, bottom: 10 },
        })
            .setScrollFactor(0)

        let coinBlock = this.add.sprite(0, 0, TextureKeys.UI, 'coinBlock.png')
            .setOrigin(0)
            .setScrollFactor(0)
        this.blueGem = this.add.sprite(288, 0, TextureKeys.UI, 'gemBlockDisbaled.png')
            .setOrigin(0)
            .setScrollFactor(0)
        this.greenGem = this.add.sprite(352, 0, TextureKeys.UI, 'gemBlockDisbaled.png')
            .setOrigin(0)
            .setScrollFactor(0)
        this.redGem = this.add.sprite(416, 0, TextureKeys.UI, 'gemBlockDisbaled.png')
            .setOrigin(0)
            .setScrollFactor(0)
        this.add.sprite(480, 0, TextureKeys.UI, 'block_UI_six.png')
            .setOrigin(0)
            .setScrollFactor(0)
        this.add.sprite(522, 16, TextureKeys.UI, 'lifebar_back.png')
            .setOrigin(0)
            .setScrollFactor(0)
        this.progressBar = this.add.sprite(526, 19, TextureKeys.UI, 'lifebar_front.png')
            .setOrigin(0)
            .setScrollFactor(0)
            .setScale(0)

        let container = this.add.container(160, 0, [coinBlock, this.scoreLabel]).setScrollFactor(0)
    }
    private startGame()
    {
        this.lvlNumber +=1
        this.scene.start('pinguinrun')
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

            this.totalgem +=1

            this.count += 1

            switch(obj.getData('color'))
            {
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


        }
        else if (this.coins.contains(obj2)) {
            const obj = obj2 as Phaser.Physics.Arcade.Sprite

            this.coins.killAndHide(obj)

            obj.body.enable = false

            this.coinCount += 1

            this.totalcoin += 1

            this.count += 1

        }
        else {
            console.log('Erreur')
        }

        this.progressBar.setScale(this.count * 0.0769, 1)
        this.scoreLabel.text = `${this.coinCount}/10`

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
            this.win,
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
    protected win(obj1: Phaser.GameObjects.GameObject,
        obj2: Phaser.GameObjects.GameObject) {

        const obj = obj2 as Phaser.Physics.Arcade.Sprite

        this.stars.killAndHide(obj)
        
        obj.body.enable = false
                
        this.pinguin.setActive(false)

        this.showScore()
    }
    protected showScore()
    {
        const rectangle = this.add.rectangle(0, 0, 350, 300, 0x000000, 0.5)
            .setOrigin(0)        
        const style = {font: "20px Coursier Bold", fill: "#fff"}
        const style2 = {font: "32px Arial Black", fill: "#fff"}
        const style3 = {font: "20px Arial Black", fill: "#fff"}
        const end = this.add.text(22.5, 10, `Niveau ${this.lvlNumber} Terminé`, style2)
        .setOrigin(0)
        const coinCount = this.add.text(126.5,120,`Pieces: ${this.coinCount}/10`,style)
        .setOrigin(0)
        const gemCount = this.add.text(126.5, 145, `Gemmes: ${this.gemCount}/3`, style)
        .setOrigin(0)
        const next = this.add.text(68.5, 238, `Appuyez sur espace \r\n     pour continuer`, style3)
        .setOrigin(0)
        const container = this.add.container(352, 220, [rectangle,end, coinCount, gemCount, next]).setScrollFactor(0)        
    }
    protected endGame()
    {
    const rectangle = this.add.rectangle(0, 0, 350, 300, 0x000000, 0.5)
    .setOrigin(0)        
    const style = {font: "20px Coursier Bold", fill: "#fff"}
    const style2 = {font: "32px Arial Black", fill: "#fff"}
    const style3 = {font: "20px Arial Black", fill: "#fff"}
    const end = this.add.text(22.5, 10, `Vous avez terminé le jeu`, style2)
    .setOrigin(0)
    const coinCount = this.add.text(126.5,120,`Pieces: ${this.totalcoin}/40`,style)
    .setOrigin(0)
    const gemCount = this.add.text(126.5, 145, `Gemmes: ${this.totalgem}/12`, style)
    .setOrigin(0)
    const next = this.add.text(68.5, 238, `Merci d'avoir jouer!`, style3)
    .setOrigin(0)
    const container = this.add.container(352, 220, [rectangle,end, coinCount, gemCount, next]).setScrollFactor(0)  
    }
}