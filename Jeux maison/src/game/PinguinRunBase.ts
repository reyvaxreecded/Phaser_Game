import Phaser from 'phaser'
import Pinguin from '~/game/Pingouin'

export default class PinguinRunBase extends Phaser.Scene {
    public pinguin!: Pinguin
    public stars!: Phaser.Physics.Arcade.StaticGroup
    public lvlNumber = 0
    public coinCount = 0
    public gemCount = 0
    public totalcoin = 0
    public totalgem = 0
    constructor(sceneName: string = "pinguinrunbase") {
        super(sceneName)
    }
}