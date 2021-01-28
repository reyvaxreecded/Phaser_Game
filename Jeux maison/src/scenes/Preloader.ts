import Phaser from 'phaser'
import SceneKeys from '~/consts/SceneKeys'
import TextureKeys from '~/consts/TextureKeys'

export default class Preloader extends Phaser.Scene {
    constructor()
    {
        super(SceneKeys.Preloader)
    }

    preload()
    {
        this.load.image(TextureKeys.Icebackground, 'assets/ice/bg-icebergs-1.png')
        this.load.image(TextureKeys.Icerberg, 'assets/ice/object_iceberg.png')
        this.load.atlas(TextureKeys.Pingouin, 'characters/pinguin.png', 'characters/pinguin.json')
        this.load.atlas(TextureKeys.Colectible, 'assets/ice/collectible.png', 'assets/ice/collectible.json')
        this.load.atlas(TextureKeys.Tile, 'assets/ice/tiles.png', 'assets/ice/tiles.json')
        this.load.atlas(TextureKeys.Decorations, 'assets/ice/decorations.png', 'assets/ice/decorations.json')  
    }

    create()
    {
        this.scene.start(SceneKeys.Lvl)
    }
}