import Phaser from 'phaser'
import Level from './Level'


export default class Score extends Phaser.Scene
{
    private coinCount = 0
    private gemCount = 0
    constructor()
    {
        super('score')
    }
    restart(currentScene: Level)
    {
        this.coinCount = 0
        this.gemCount = 0

        currentScene.scene.restart()
    }
    private handleCollectObj(
        obj1: Phaser.GameObjects.GameObject,
        obj2: Phaser.GameObjects.GameObject,
        objGroup:Phaser.Physics.Arcade.StaticGroup,
        scoreLabel: Phaser.GameObjects.Text,
        currentScene: Level
    ) {

		const obj = obj2 as Phaser.Physics.Arcade.Sprite		

        objGroup.killAndHide(obj)

        obj.body.enable = false

        switch(obj2)
        {
            case currentScene.gems:
                this.gemCount += 1
                break
            case currentScene.coins:
                this.coinCount +=1
                break
            default:
                return
        }   

		scoreLabel.text = `Piece: ${this.coinCount}/10 Gemmes: ${this.gemCount}/3`
		     
    }
    scoreLabel = this.add.text(10, 10, `Piece: ${this.coinCount}/10 Gemmes: ${this.gemCount}/3`, {
        fontSize: '24px',
        color: '#000000',            
        shadow: { fill: true, blur: 0, offsetY: 0 },
        padding: { left: 15, right: 15, top: 10, bottom: 10 }
    })
}