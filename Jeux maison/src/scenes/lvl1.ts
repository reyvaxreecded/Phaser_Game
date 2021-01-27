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

	create()
	{
		const width = this.scale.width
        const height = this.scale.height

		this.icebackground = this.add.tileSprite(0, 0, width, height, TextureKeys.Icebackground)
		.setOrigin(0)
		.setScrollFactor(0, 0)
			
		this.tiles = this.physics.add.staticGroup()
		this.tiles.create (0, 704, 'Bleft')
		.setOrigin(0,0)
		.setOffset(32,32)
		this.tiles.create (64, 704, 'Bmid')
		.setOrigin(0, 0)
		.setOffset(32,32)
		this.tiles.create (128, 704, 'Bmid')
		.setOrigin(0, 0)
		.setOffset(32,32)
		this.tiles.create (192, 704, 'Bmid')
		.setOrigin(0, 0)
		.setOffset(32,32)
		this.tiles.create (256, 704, 'Bmid')
		.setOrigin(0, 0)
		.setOffset(32,32)
		this.tiles.create (320, 704, 'Bmid')
		.setOrigin(0, 0)
		.setOffset(32,32)
		this.tiles.create (384, 704, 'Bmid')
		.setOrigin(0, 0)
		.setOffset(32,32)
		this.tiles.create (448, 704, 'Bmid')
		.setOrigin(0, 0)
		.setOffset(32,32)
		this.tiles.create (512, 704, 'Bmid')
		.setOrigin(0, 0)
		.setOffset(32,32)
		this.tiles.create (576, 704, 'Bmid')
		.setOrigin(0, 0)
		.setOffset(32,32)
		this.tiles.create (640, 704, 'Bmid')
		.setOrigin(0, 0)
		.setOffset(32,32)
		this.tiles.create (704, 704, 'Bmid')
		.setOrigin(0, 0)
		.setOffset(32,32)
		this.tiles.create (768, 704, 'Bmid')
		.setOrigin(0, 0)
		.setOffset(32,32)
		this.tiles.create (832, 704, 'Bmid')
		.setOrigin(0, 0)
		.setOffset(32,32)
		this.tiles.create (896, 704, 'Bmid')
		.setOrigin(0, 0)
		.setOffset(32,32)
		this.tiles.create (960, 704, 'Bright')
		.setOrigin(0, 0)
		.setOffset(32,32)

		this.pinguin = new Pinguin(this, 1,1)
		this.add.existing(this.pinguin)		
		
		this.tiles.add 

		this.physics.world.setBounds(
            0, 0,
            Number.MAX_SAFE_INTEGER, height
		)
		
		this.physics.add.collider(this.pinguin, this.tiles)
		this.cameras.main.setBounds(0, 0, Number.MAX_SAFE_INTEGER, height)

		this.cameras.main.startFollow(this.pinguin)
	}
}