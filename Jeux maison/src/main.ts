import Phaser from 'phaser'

import Preloader from './scenes/Preloader'
import GameOver from './scenes/GameOver'
import lvl1 from './scenes/lvl1'
import { LevelTest } from './scenes/LvlTest'
import PinguinRun from './game/PinguinRun'

const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 1024,
    height: 768,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 },
            debug: true
        }
    },
    scene: [Preloader, PinguinRun]
}

export default new Phaser.Game(config)