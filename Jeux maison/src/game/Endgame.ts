import TextureKeys from '~/consts/TextureKeys'
import PinguinRunBase from './PinguinRunBase'
import Score from './Score'

export default class EndGame extends PinguinRunBase {

    public returnToMenu() {
        this.lvlNumber = 0
        this.scene.start('pinguinrun')
    }
    public continue() {
        this.lvlNumber += 1
        this.scene.start('pinguinrun')
    }
    public win(obj1: Phaser.GameObjects.GameObject,
        obj2: Phaser.GameObjects.GameObject) {

        const obj = obj2 as Phaser.Physics.Arcade.Sprite

        this.stars.killAndHide(obj)

        obj.body.enable = false

        this.pinguin.setActive(false)

        //Score.prototype.showScore()
    }
    public endGame() {
        const nbCoin = (this.lvlNumber - 1) * 10
        const nbGem = (this.lvlNumber - 1) * 3
        this.add.tileSprite(0, 0, this.scale.width, this.scale.height, TextureKeys.Icebackground).setOrigin(0)
        const rectangle = this.add.rectangle(0, 0, 350, 300, 0x000000, 0.5)
            .setOrigin(0.5)
        const style = { font: "20px Coursier Bold", fill: "#fff" }
        const style2 = { font: "22px Arial Black", fill: "#fff" }
        const style3 = { font: "20px Arial Black", fill: "#fff" }
        const end = this.add.text(0, -120, `Vous avez terminé le jeu`, style2)
            .setOrigin(0.5)
        const coinCount = this.add.text(0, -10, `Pieces: ${this.totalcoin}/${nbCoin}`, style)
            .setOrigin(0.5)
        const gemCount = this.add.text(0, 20, `Gemmes: ${this.totalgem}/${nbGem}`, style)
            .setOrigin(0.5)
        const next = this.add.text(0, 120, `Merci d'avoir joué!`, style3)
            .setOrigin(0.5)
        this.add.container(512, 384, [rectangle, end, coinCount, gemCount, next]).setScrollFactor(0)
    }
}