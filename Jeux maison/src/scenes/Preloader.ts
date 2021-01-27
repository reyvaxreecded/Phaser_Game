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
        this.load.image('Preup' , 'ice/assets/Preup.png' )
        this.load.image('Startup' , 'ice/assets/Startup.png' )
        this.load.image('Midup' , 'ice/assets/Midup.png' )
        this.load.image('Endup' , 'ice/assets/Endup.png' )
        this.load.image('Predown' , 'ice/assets/Predown.png' )
        this.load.image('Startdown' , 'ice/assets/Startdown.png' )
        this.load.image('Middown' , 'ice/assets/Middown.png' )
        this.load.image('Enddown' , 'ice/assets/Enddown.png' )
        this.load.image('BMup' , 'ice/assets/BMup.png' )
        this.load.image(TextureKeys.Background, 'house/bg_repeat_340x640.png')
        this.load.image(
            TextureKeys.MouseHole,
            'house/object_mousehole.png'
        )
        this.load.atlas(TextureKeys.Pingouin, 'ice/assets/pinguin.png', 'ice/assets/pinguin.json')
        this.load.atlas(TextureKeys.Colectible, 'ice/assets/collectible.png', 'ice/assets/collectible.json')

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