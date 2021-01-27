import Phaser from 'phaser'
import AnimationKeys from '~/consts/AnimationKeys'
import TextureKeys from '~/consts/TextureKeys'

enum PinguinState 
{
    Running,
    Killed,
    Dead
}

export default class Pinguin extends Phaser.GameObjects.Container
{
    private PinguinState = PinguinState.Running
    private pinguin!: Phaser.GameObjects.Sprite
    private cursors!: Phaser.Types.Input.Keyboard.CursorKeys
    constructor(scene: Phaser.Scene, x: number, y: number)
    {
        super(scene, x, y)

        this.pinguin = scene.add.sprite(1, 1, TextureKeys.Pingouin).setOrigin(0)

        this.createAnimation()
        this.pinguin.play(AnimationKeys.PinguinRun)
        this.add(this.pinguin)
    
        scene.physics.add.existing(this)

        const body = this.body as Phaser.Physics.Arcade.Body
        body.setSize(28,this.pinguin.height)
        body.setCollideWorldBounds(true)
        body.setOffset(0,0)
        
        this.cursors = scene.input.keyboard.createCursorKeys()

    }

    preUpdate() {

        const body = this.body as Phaser.Physics.Arcade.Body

        switch (this.PinguinState) {

            case PinguinState.Running:
                {

                    if (this.cursors.up?.isDown && body.blocked.down) {

                        body.setVelocityY(-180)                        

                        this.pinguin.play(AnimationKeys.PinguinJump, true)
                    }


                   else if(this.cursors.down.isDown)
                    {                       
                        body.setSize(this.pinguin.width , this.pinguin.height * 0.7)
                        body.setOffset(0, 19)                       

                        this.pinguin.play(AnimationKeys.PinguinSlide, true)
                    }
                    
                    else if(this.cursors.left.isDown)
                    {
                        body.setVelocityX(-100)
                    }
                    else if(this.cursors.right.isDown)
                    {
                        body.setVelocityX(100)
                    }
                    
                    else
                    {
                        body.setSize(this.pinguin.width * 0.85, this.pinguin.height)
                        body.setOffset(0, 0)
                        body.setAccelerationY(0)
                        body.setVelocityX(0)

                        if (body.blocked.down)
                        {               
                            this.pinguin.play(AnimationKeys.PinguinRun, true)
                        }
                        else 
                        {
                            this.pinguin.play(AnimationKeys.PinguinFall, true)
                        }               

                                                   
                        
                    }

                    

                    break
                }

            case PinguinState.Killed:
                {
                    body.velocity.x *= 0.99

                    if (body.velocity.x <= 5) {
                        this.PinguinState = PinguinState.Dead
                    }

                    break
                }
        }
    }

    private createAnimation() {
        this.pinguin.anims.create({
            key: AnimationKeys.PinguinRun,
            frames: this.pinguin.anims.generateFrameNames(TextureKeys.Pingouin, {
                start: 1, end: 4, prefix: 'penguin_walk', zeroPad: 2, suffix: '.png'}),
                frameRate: 10,
                repeat: -1
        })

        this.pinguin.anims.create({
            key: AnimationKeys.PinguinJump,
            frames: [{
                key: TextureKeys.Pingouin,
                frame: 'penguin_jump02.png'
            }]
        })
        this.pinguin.anims.create({
            key: AnimationKeys.PinguinFall,
            frames: [{
                key: TextureKeys.Pingouin,
                frame: 'penguin_jump03.png'
            }]
        })

        this.pinguin.anims.create({
            key: AnimationKeys.PinguinSlide,
            frames: [{
                key: TextureKeys.Pingouin,
                frame: 'penguin_slide02.png'
            }]
        })

        this.pinguin.anims.create({
            key: AnimationKeys.PinguinDead,
            frames: this.pinguin.anims.generateFrameNames(TextureKeys.Pingouin,
                {
                    start: 1,
                    end: 4,
                    prefix: 'penguin_die',
                    zeroPad: 2,
                    suffix: '.png'
                }),
            frameRate: 10
        })
    }
}