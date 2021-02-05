import Phaser from 'phaser'
import { Base } from '~/consts/Interfaces'
import TextureKeys from '~/consts/TextureKeys'


export default class Ui {
    private progressBar!: Phaser.GameObjects.TileSprite
    private scoreLabel!: Phaser.GameObjects.Text
    private game!: Base
    constructor(game: Base) {
        this.game = game
    }
    public createUI() {
        const coinCount = this.game.getCoinCount()
        const scene = this.game.getScene()
        this.scoreLabel = scene.add.text(10, 10, `${coinCount}/10`, {
            fontSize: '24px',
            fontFamily: 'Cooper Black',
            color: '#000000',
            padding: { right: 15, top: 10, bottom: 10 },
        })
            .setScrollFactor(0)

        let coinBlock = scene.add.sprite(0, 0, TextureKeys.UI, 'coinBlock.png')
            .setOrigin(0)
            .setScrollFactor(0)
        this.game.setBlueGem(scene.add.sprite(288, 0, TextureKeys.UI, 'gemBlockDisbaled.png')
            .setOrigin(0)
            .setScrollFactor(0))
        this.game.setGreenGem(scene.add.sprite(352, 0, TextureKeys.UI, 'gemBlockDisbaled.png')
            .setOrigin(0)
            .setScrollFactor(0))
        this.game.setRedGem(scene.add.sprite(416, 0, TextureKeys.UI, 'gemBlockDisbaled.png')
            .setOrigin(0)
            .setScrollFactor(0))
        scene.add.sprite(480, 0, TextureKeys.UI, 'block_UI_six.png')
            .setOrigin(0)
            .setScrollFactor(0)
        scene.add.sprite(522, 16, TextureKeys.UI, 'lifebar_back.png')
            .setOrigin(0)
            .setScrollFactor(0)
        this.progressBar = scene.add.tileSprite(526, 19, 0, 22, TextureKeys.UI, 'lifebar_front.png')
            .setOrigin(0)
            .setScrollFactor(0)
        scene.add.container(160, 0, [coinBlock, this.scoreLabel]).setScrollFactor(0)
    }
    public update() {
        const coinCount = this.game.getCoinCount()
        this.progressBar.width = this.progressBar.width + 22.31
        this.scoreLabel.text = `${coinCount}/10`
    }
    public reset() {
        this.progressBar.width = 0
    }
}