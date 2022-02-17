import Phaser from 'phaser'
import { Base } from '../consts/Interfaces'
import TextureKeys from '../consts/TextureKeys'
import PinguinRun from './PinguinRun'


export default class Ui {
    private progressBar!: Phaser.GameObjects.TileSprite
    private scoreLabel!: Phaser.GameObjects.Text
    private countLife!: Phaser.GameObjects.Text
    private hearthCount!: Phaser.GameObjects.Sprite
    public lifeNb: number = 3
    public hearthNb: number = 3
    private game!: Base;
    public setGame(game: Base){
        this.game = game
    }
    public getLifeNb()
    {
        return this.lifeNb
    }
    public setLifeNb(value)
    {
        this.lifeNb = value
    }
    public getHearthNb()
    {
        return this.hearthNb
    }
    public setHearthNb(value)
    {
       this.hearthNb = value
    }
    public createUI() {
        const coinCount = this.game!.getCoinCount()
        const scene = this.game.getScene()
        this.scoreLabel = scene.add.text(20, 10, `${coinCount}/10`, {
            fontSize: '24px',
            fontFamily: 'Cooper Black',
            color: '#000000',
            padding: { right: 15, top: 10, bottom: 10 },
        })
            .setScrollFactor(0)
        
        let coinBlock = scene.add.sprite(0, 0, TextureKeys.UI, 'coinBlock.png')
            .setOrigin(0)
            .setScrollFactor(0)
        this.game!.setBlueGem(scene.add.sprite(256, 0, TextureKeys.UI, 'gemBlockDisbaled.png')
            .setOrigin(0)
            .setScrollFactor(0))
        this.game!.setGreenGem(scene.add.sprite(320, 0, TextureKeys.UI, 'gemBlockDisbaled.png')
            .setOrigin(0)
            .setScrollFactor(0))
        this.game!.setRedGem(scene.add.sprite(384, 0, TextureKeys.UI, 'gemBlockDisbaled.png')
            .setOrigin(0)
            .setScrollFactor(0))
        this.hearthCount = scene.add.sprite(448, 0, TextureKeys.UI, 'heartCount3.png')
            .setOrigin(0)
            .setScrollFactor(0)
        scene.add.sprite(640, 0, TextureKeys.UI, 'block_UI_six.png')
            .setOrigin(0)
            .setScrollFactor(0)
        scene.add.sprite(686, 16, TextureKeys.UI, 'lifebar_back.png')
            .setOrigin(0)
            .setScrollFactor(0)
        scene.add.sprite(0, 0, TextureKeys.UI, 'countLife.png')
            .setOrigin(0)
            .setScrollFactor(0)
        this.countLife = scene.add.text(30, 0, `${this.lifeNb}`, {
            fontSize: '32px',
            fontFamily: 'Cooper Black',
            color: '#000000',
            padding: { right: 15, top: 10, bottom: 10 },
        })
            .setScrollFactor(0)
        this.progressBar = scene.add.tileSprite(690, 19, 0, 22, TextureKeys.UI, 'lifebar_front.png')
            .setOrigin(0)
            .setScrollFactor(0)
        scene.add.container(128, 0, [coinBlock, this.scoreLabel]).setScrollFactor(0)
        
    }
    public update() {
        const coinCount = this.game!.getCoinCount()
        this.progressBar.width = this.progressBar.width + 22.31
        this.scoreLabel.text = `${coinCount}/10`
        this.countLife.text = `${this.lifeNb}`
        switch(this.hearthNb)
        {
            case 2:
                this.hearthCount.setTexture(TextureKeys.UI, 'heartCount2.png')
                break;
            case 1:
                this.hearthCount.setTexture(TextureKeys.UI, 'heartCount1.png')
                break;
            case 0:
                this.hearthCount.setTexture(TextureKeys.UI, 'heartCount0.png')
        }
    }
    public reset() {
        this.progressBar.width = 0
        this.game?.setCoinCount(0);
        this.game?.setGemCount(0);
        switch(this.hearthNb)
        {
            case 2:
                this.hearthCount.setTexture(TextureKeys.UI, 'heartCount2.png')
                break;
            case 1:
                this.hearthCount.setTexture(TextureKeys.UI, 'heartCount1.png')
                break;
            case 0:
                this.hearthCount.setTexture(TextureKeys.UI, 'heartCount0.png')
        }
    }


    static _inst;
    static get(){
        if(!this._inst){
            this._inst = new Ui()
        };
        return this._inst;
    }
}