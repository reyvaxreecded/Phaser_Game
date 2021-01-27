import Phaser from 'phaser'
import AnimationKeys from '~/consts/AnimationKeys'
import SceneKeys from '~/consts/SceneKeys'
import TextureKeys from '~/consts/TextureKeys'

export default class Preloader extends Phaser.Scene {
    constructor()
    {
        super(SceneKeys.Preloader)
    }

    preload()
    {
        this.load.image('background-ice', 'ice/assets/bg-icebergs-1.png')
		this.load.image('Bleft', 'ice/assets/Bleft.png')
		this.load.image('Bmid', 'ice/assets/Bmid.png')
		this.load.image('Bright', 'ice/assets/Bright.png')
        this.load.image(TextureKeys.Background, 'house/bg_repeat_340x640.png')
        this.load.image(
            TextureKeys.MouseHole,
            'house/object_mousehole.png'
        )
        this.load.atlas(TextureKeys.Pingouin, 'ice/assets/pinguin.png', 'ice/assets/pinguin.json')

        this.load.image(TextureKeys.Window1, 'house/object_window1.png')
        this.load.image(TextureKeys.Window2, 'house/object_window2.png')

        this.load.image(TextureKeys.Bookcase1, 'house/object_bookcase1.png')
        this.load.image(TextureKeys.Bookcase2, 'house/object_bookcase2.png')
        
        this.load.atlas(
            TextureKeys.RocketMouse,
            'characters/rocket-mouse.png',
            'characters/rocket-mouse.json'
        )

        this.load.image(TextureKeys.LaserEnd, 'house/object_laser_end.png')
        this.load.image(TextureKeys.LaserMiddle, 'house/object_laser.png')

        this.load.image(TextureKeys.Coin, 'house/object_coin.png')       
    }

    create()
    {
        this.scene.start(SceneKeys.Lvl1)
    }
}