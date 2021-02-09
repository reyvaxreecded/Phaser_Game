import Phaser from 'phaser'
import Preloader from './scenes/Preloader'
import PinguinRun from './game/PinguinRun'
import Editor from './game/LevelEditor'

const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 1024,
    height: 768,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: [Preloader, PinguinRun, Editor]
}

export default new Phaser.Game(config)