import { Body } from 'matter'
import phaser from 'phaser'
import TextureKeys from '~/consts/TextureKeys'
import Pinguin from '~/game/Pingouin'
import Score from '~/game/Score'

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
	private icebergs!: Phaser.Physics.Arcade.StaticGroup
	private star!: Phaser.GameObjects.Sprite
	private scoreLabel!: Phaser.GameObjects.Text


	create()
	{	


		this.scoreLabel = this.add.text(10, 10, `Piece: ${Score.coinCount}/10 Gemmes: ${Score.gemCount}/3`, {
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

		Score.coinCount += 1   

		this.scoreLabel.text = `Piece: ${Score.coinCount}/10 Gemmes: ${Score.gemCount}/3`
		     
	}
	private handleCollectGem(
        obj1: Phaser.GameObjects.GameObject,
        obj2: Phaser.GameObjects.GameObject
    ) {

		const gem = obj2 as Phaser.Physics.Arcade.Sprite		

        this.gems.killAndHide(gem)

        gem.body.enable = false

		Score.gemCount += 1   

		this.scoreLabel.text = `Piece: ${Score.coinCount}/10 Gemmes: ${Score.gemCount}/3`
		     
    }
}