import Phaser from 'phaser'
import PinguinRunBase from './PinguinRunBase'

export default class Score extends PinguinRunBase {
    public showScore() {
        const rectangle = this.add.rectangle(0, 0, 350, 300, 0x000000, 0.5)
            .setOrigin(0.5)
        const style = { font: "20px Coursier Bold", fill: "#fff" }
        const style2 = { font: "32px Arial Black", fill: "#fff" }
        const style3 = { font: "20px Arial Black", fill: "#fff" }
        const end = this.add.text(0, -120, `Niveau ${this.lvlNumber} Terminé`, style2)
            .setOrigin(0.5)
        const coinCount = this.add.text(0, -10, `Pieces: ${this.coinCount}/10`, style)
            .setOrigin(0.5)
        const gemCount = this.add.text(0, 20, `Gemmes: ${this.gemCount}/3`, style)
            .setOrigin(0.5)
        const next = this.add.text(0, 120, `Appuyez sur espace \r\n     pour continuer`, style3)
            .setOrigin(0.5)
        this.add.container(512, 384, [rectangle, end, coinCount, gemCount, next]).setScrollFactor(0)
    }
}