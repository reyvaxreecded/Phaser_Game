import { Body } from 'matter'
import phaser from 'phaser'
import TextureKeys from '~/consts/TextureKeys'
import Pinguin from '~/game/Pingouin'

export default class lvl1 extends Phaser.Scene
{
	constructor()
	{
		super('lvl1')
	}
	private icebackground!: Phaser.GameObjects.TileSprite
	private tiles!: Phaser.Physics.Arcade.StaticGroup
	private pinguin!: Pinguin
	private coins!: Phaser.Physics.Arcade.StaticGroup
	private gems!: Phaser.Physics.Arcade.StaticGroup
	private scoreLabel!: Phaser.GameObjects.Text
	private coinCount = 0
	private gemCount = 0

	create()
	{
		const width = this.scale.width
        const height = this.scale.height

		this.icebackground = this.add.tileSprite(0, 0, width, height, TextureKeys.Icebackground)
		.setOrigin(0)
		.setScrollFactor(0, 0)
		
		this.gems = this.physics.add.staticGroup()
		this.gems.create(480,672, TextureKeys.Colectible, 'object_01_gem_blue.png')
		.setOrigin(0.5)
		this.gems.create(736,480, TextureKeys.Colectible, 'object_02_gem_green.png')
		.setOrigin(0.5)
		this.gems.create(928,672, TextureKeys.Colectible, 'object_03_gem_red.png')
		.setOrigin(0.5)
		this.coins = this.physics.add.staticGroup()
		this.coins.create (96, 672, TextureKeys.Colectible, 'object_06_coin.png')
		.setOrigin(0.5)
				
		this.coins.create (160, 672, TextureKeys.Colectible, 'object_06_coin.png')
		.setOrigin(0.5)
		
		this.coins.create (224, 672, TextureKeys.Colectible, 'object_06_coin.png')
		.setOrigin(0.5)
		
		this.coins.create (288, 672, TextureKeys.Colectible, 'object_06_coin.png')
		.setOrigin(0.5)
		
		this.coins.create (352, 672, TextureKeys.Colectible, 'object_06_coin.png')
		.setOrigin(0.5)
		
		this.coins.create (672, 544, TextureKeys.Colectible, 'object_06_coin.png')
		.setOrigin(0.5)
		
		this.coins.create (864, 608, TextureKeys.Colectible, 'object_06_coin.png')
		.setOrigin(0.5)
		
		this.coins.create (992, 672, TextureKeys.Colectible, 'object_06_coin.png')
		.setOrigin(0.5)
		
		this.coins.create (1056, 672, TextureKeys.Colectible, 'object_06_coin.png')
		.setOrigin(0.5)
		
		this.coins.create (1120, 672, TextureKeys.Colectible, 'object_06_coin.png')
		.setOrigin(0.5)
		
		this.tiles = this.physics.add.staticGroup()
		this.tiles.create (32, 736, 'Bleft')
		.setOrigin(0.5)	
		this.tiles.create (96, 736, 'Bmid')
		.setOrigin(0.5)
		this.tiles.create (160, 736, 'Bmid')
		.setOrigin(0.5)
		this.tiles.create (224, 736, 'Bmid')
		.setOrigin(0.5)
		this.tiles.create (288, 736, 'Bmid')
		.setOrigin(0.5)
		this.tiles.create (352, 736, 'Bmid')
		.setOrigin(0.5)
		this.tiles.create (416, 736, 'Bmid')
		.setOrigin(0.5)
		this.tiles.create (480, 736, 'Bmid')
		.setOrigin(0.5)		
		this.tiles.create (544, 736, 'Preup')
		.setOrigin(0.5)
		this.tiles.create (672, 608, 'BMup')
		.setOrigin(0.5)
		this.tiles.create (608, 736, 'BMup')
		.setOrigin(0.5)
		this.tiles.create (608, 672, 'BMup')
		.setOrigin(0.5)
		this.tiles.create (672, 736, 'BMup')
		.setOrigin(0.5)
		this.tiles.create (672, 672, 'BMup')
		.setOrigin(0.5)
		this.tiles.create (864, 736, 'BMup')
		.setOrigin(0.5)
		this.tiles.create (864, 672, 'BMup')
		.setOrigin(0.5)
		this.tiles.create (928, 736, 'Predown')
		.setOrigin(0.5)	
		this.tiles.create (992, 736, 'Bmid')
		.setOrigin(0.5)
		this.tiles.create (1056, 736, 'Bmid')
		.setOrigin(0.5)
		this.tiles.create (1120, 736, 'Bmid')
		.setOrigin(0.5)
		this.tiles.create (1184, 736, 'Bright')
		.setOrigin(0.5)


		
		this.pinguin = new Pinguin(this, 1, 640)
		this.add.existing(this.pinguin)		
		
		this.tiles.add 
		

		this.physics.world.setBounds(
            0, 0,
            1216.1, height
		)
		
		this.physics.add.overlap(
            this.coins,
            this.pinguin,
            this.handleCollectCoin,
            undefined,
            this
		)
		this.physics.add.overlap(
            this.gems,
            this.pinguin,
            this.handleCollectGem,
            undefined,
            this
		)

		this.scoreLabel = this.add.text(10, 10, `Piece: ${this.coinCount}/10 Gemmes: ${this.gemCount}/3`, {
            fontSize: '24px',
            color: '#000000',            
            shadow: { fill: true, blur: 0, offsetY: 0 },
            padding: { left: 15, right: 15, top: 10, bottom: 10 }
        })
            .setScrollFactor(0)

		this.physics.add.collider(this.pinguin, this.tiles)		
		this.cameras.main.setBounds(0, 0, 1216.1, height)

		this.cameras.main.startFollow(this.pinguin)
	}

	private handleCollectCoin(
        obj1: Phaser.GameObjects.GameObject,
        obj2: Phaser.GameObjects.GameObject
    ) {
		const coin = obj2 as Phaser.Physics.Arcade.Sprite	

        this.coins.killAndHide(coin)

        coin.body.enable = false

		this.coinCount += 1   

		this.scoreLabel.text = `Piece: ${this.coinCount}/10 Gemmes: ${this.gemCount}/3`
		     
	}
	private handleCollectGem(
        obj1: Phaser.GameObjects.GameObject,
        obj2: Phaser.GameObjects.GameObject
    ) {

		const gem = obj2 as Phaser.Physics.Arcade.Sprite		

        this.gems.killAndHide(gem)

        gem.body.enable = false

		this.gemCount += 1   

		this.scoreLabel.text = `Piece: ${this.coinCount}/10 Gemmes: ${this.gemCount}/3`
		     
    }
}