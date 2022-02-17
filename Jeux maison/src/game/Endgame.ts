import TextureKeys from '../consts/TextureKeys'
import { Base } from '../consts/Interfaces'


export default class EndGame {
    private game!: Base
    constructor(game: Base) {
        this.game = game
    }
    public returnToMenu() {
        this.game.setLvlNumber(0)
        const scene = this.game.getScene()
        scene.scene.start('pinguinrun')
    }
    public continue() {
        const lvlNumber = this.game.getLvlNumber()
        this.game.setLvlNumber(lvlNumber + 1)
        const scene = this.game.getScene()
        scene.scene.start('pinguinrun')
    }
    public endGame() {
        let lvlNumber = this.game.getLvlNumber()
        const scene = this.game.getScene()
        const totalcoin = this.game.gettotalCoin()
        const totalgem = this.game.gettotalGem()
        const nbCoin = (lvlNumber - 1) * 10
        const nbGem = (lvlNumber - 1) * 3
        scene.add.tileSprite(0, 0, scene.scale.width, scene.scale.height, TextureKeys.Icebackground).setOrigin(0)
        const rectangle = scene.add.rectangle(0, 0, 350, 300, 0x000000, 0.5)
            .setOrigin(0.5)
        const style = { font: "20px Coursier Bold", fill: "#fff" }
        const style2 = { font: "22px Arial Black", fill: "#fff" }
        const style3 = { font: "20px Arial Black", fill: "#fff" }
        const end = scene.add.text(0, -120, `Vous avez terminé le jeu`, style2)
            .setOrigin(0.5)
        const coinCount = scene.add.text(0, -10, `Pieces: ${totalcoin}/${nbCoin}`, style)
            .setOrigin(0.5)
        const gemCount = scene.add.text(0, 20, `Gemmes: ${totalgem}/${nbGem}`, style)
            .setOrigin(0.5)
        const next = scene.add.text(0, 120, `Merci d'avoir joué!`, style3)
            .setOrigin(0.5)
        scene.add.container(512, 384, [rectangle, end, coinCount, gemCount, next]).setScrollFactor(0)
    }
    public showScore() {
        const scene = this.game.getScene()
        const lvlNumber = this.game.getLvlNumber()
        const coinCounter = this.game.getCoinCount()
        const gemCounter = this.game.getGemCount()
        const rectangle = scene.add.rectangle(0, 0, 350, 300, 0x000000, 0.5)
            .setOrigin(0.5)
        const style = { font: "20px Coursier Bold", fill: "#fff" }
        const style2 = { font: "32px Arial Black", fill: "#fff" }
        const style3 = { font: "20px Arial Black", fill: "#fff" }
        const end = scene.add.text(0, -120, `Niveau ${lvlNumber} Terminé`, style2)
            .setOrigin(0.5)
        const coinCount = scene.add.text(0, -10, `Pieces: ${coinCounter}/10`, style)
            .setOrigin(0.5)
        const gemCount = scene.add.text(0, 20, `Gemmes: ${gemCounter}/3`, style)
            .setOrigin(0.5)
        const next = scene.add.text(0, 120, `Appuyez sur espace \r\n     pour continuer`, style3)
            .setOrigin(0.5)
        scene.add.container(512, 384, [rectangle, end, coinCount, gemCount, next]).setScrollFactor(0)
    }
}