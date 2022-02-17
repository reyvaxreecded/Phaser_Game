import Phaser from 'phaser'
import SceneKeys from '../consts/SceneKeys'
import TextureKeys from '../consts/TextureKeys'

export default class Preloader extends Phaser.Scene {
    constructor()
    {
        super(SceneKeys.Preloader)
    }

    preload()
    {
        this.load.image(TextureKeys.Icebackground, 'assets/ice/bg-icebergs-1.png')
        this.load.image(TextureKeys.StartMenuTile, 'assets/ice/startMenuTile.png')        
        this.load.image(TextureKeys.Title, 'assets/ice/title.png')
        this.load.atlas(TextureKeys.Icerberg, 'assets/ice/Iceberg.png', 'assets/ice/Iceberg.json')
        this.load.image('menuBg', 'assets/ice/menuBg.png')
        this.load.image('reduceBtn', 'assets/ice/reduce.png')
        this.load.image('increaseBtn', 'assets/ice/increase.png')
        this.load.image('helpBtn', 'assets/ice/UI/help.png')
        this.load.image('saveBtn', 'assets/ice/UI/saveBtn.png')
        this.load.spritesheet(TextureKeys.Snowfalkes, 'assets/ice/snowflakes.png', {frameWidth: 17, frameHeight: 17})
        this.load.atlas(TextureKeys.Pingouin, 'characters/pinguin.png', 'characters/pinguin.json')
        this.load.atlas('helpers', 'assets/ice/UI/Helpers.png', 'assets/ice/UI/Helpers.json')
        this.load.atlas(TextureKeys.Colectible, 'assets/ice/collectible.png', 'assets/ice/collectible.json')
        this.load.atlas(TextureKeys.Tile, 'assets/ice/tiles.png', 'assets/ice/tiles.json')
        this.load.atlas(TextureKeys.Decorations, 'assets/ice/decorations.png', 'assets/ice/decorations.json')  
        this.load.atlas(TextureKeys.UI, 'assets/ice/UI/UI.png', 'assets/ice/UI/UI.json') 
        this.load.atlas(TextureKeys.Button, 'assets/ice/UI/Button.png', 'assets/ice/UI/Button.json')        
    }

    create()
    {
        this.scene.start(SceneKeys.Lvl)
        
    }
}