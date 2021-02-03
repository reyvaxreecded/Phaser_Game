import Phaser from 'phaser'
import TextureKeys from '~/consts/TextureKeys'
import PinguinRunBase from './PinguinRunBase'

export default class Ui extends PinguinRunBase {
    private progressBar!: Phaser.GameObjects.TileSprite
    private scoreLabel!: Phaser.GameObjects.Text
    private blueGem!: Phaser.GameObjects.Sprite
    private greenGem!: Phaser.GameObjects.Sprite
    private redGem!: Phaser.GameObjects.Sprite
    public createUI() {
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
        this.progressBar = this.add.tileSprite(526, 19, 0, 22, TextureKeys.UI, 'lifebar_front.png')
            .setOrigin(0)
            .setScrollFactor(0)
        this.add.container(160, 0, [coinBlock, this.scoreLabel]).setScrollFactor(0)
    }
    public update() {
        this.progressBar.width = this.progressBar.width + 22.31
        this.scoreLabel.text = `${this.coinCount}/10`
    }
    public reset() {
        this.progressBar.width = 0
    }
}