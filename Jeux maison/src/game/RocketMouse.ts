import Phaser from 'phaser'
import AnimationKeys from '~/consts/AnimationKeys'
import SceneKeys from '~/consts/SceneKeys'
import TextureKeys from '~/consts/TextureKeys'

enum MouseState {
    Running,
    Killed,
    Dead
}

export default class RocketMouse extends Phaser.GameObjects.Container {
    private MouseState = MouseState.Running
    private flames: Phaser.GameObjects.Sprite
    private cursors: Phaser.Types.Input.Keyboard.CursorKeys
    private mouse: Phaser.GameObjects.Sprite

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y)

        this.mouse = scene.add.sprite(0, 0, TextureKeys.RocketMouse)
            .setOrigin(0.5, 1)             

        this.flames = scene.add.sprite(-63, -15, TextureKeys.RocketMouse) 

        this.createAnimation()

        this.mouse.play(AnimationKeys.RocketMouseRun)
        this.flames.play(AnimationKeys.RocketFlamesOn)

        scene.physics.add.existing(this)

        this.add(this.mouse)
        this.add(this.flames)

        const body = this.body as Phaser.Physics.Arcade.Body
        body.setSize(this.mouse.width * 0.5, this.mouse.height * 0.7)
        body.setOffset(this.mouse.width * -0.3, -this.mouse.height + 15)

        this.cursors = scene.input.keyboard.createCursorKeys()
    }

    preUpdate() {

        const body = this.body as Phaser.Physics.Arcade.Body

        switch (this.MouseState) {

            case MouseState.Running:
                {

                    if (this.cursors.space?.isDown) {

                        body.setAccelerationY(-600)
                        this.enableJetpack(true)

                        this.mouse.play(AnimationKeys.RocketMouseJump, true)
                    }
                    else {

                        body.setAccelerationY(0)
                        this.enableJetpack(false)
                    }

                    if (body.blocked.down) {
                        this.mouse.play(AnimationKeys.RocketMouseRun, true)
                    }
                    else {
                        this.mouse.play(AnimationKeys.RocketMouseFall, true)
                    }

                    break
                }

            case MouseState.Killed:
                {
                    body.velocity.x *= 0.99

                    if (body.velocity.x <= 5) {
                        this.MouseState = MouseState.Dead
                    }

                    break
                }


            case MouseState.Dead:
                {
                    body.setVelocity(0, 0)

                    this.scene.scene.run(SceneKeys.GameOver)
                    break
                }
        }
    }
    private createAnimation() {
        this.mouse.anims.create({
            key: AnimationKeys.RocketMouseRun,
            frames: this.mouse.anims.generateFrameNames(TextureKeys.RocketMouse, {
                start: 1, end: 4, prefix: 'rocketmouse_run', zeroPad: 2, suffix: '.png'}),
                frameRate: 10,
                repeat: -1
        })

        this.mouse.anims.create({
            key: AnimationKeys.RocketMouseFall,
            frames: [{
                key: TextureKeys.RocketMouse,
                frame: 'rocketmouse_fall01.png'
            }]
        })

        this.mouse.anims.create({
            key: AnimationKeys.RocketMouseJump,
            frames: [{
                key: TextureKeys.RocketMouse,
                frame: 'rocketmous_fly_01.png'
            }]
        })

        this.mouse.anims.create({
            key: AnimationKeys.RocketMouseDead,
            frames: this.mouse.anims.generateFrameNames(TextureKeys.RocketMouse,
                {
                    start: 1,
                    end: 2,
                    prefix: 'rocketmouse_dead',
                    zeroPad: 2,
                    suffix: '.png'
                }),
            frameRate: 10
        })

        this.flames.anims.create({
            key: AnimationKeys.RocketFlamesOn,
            frames: this.flames.anims.generateFrameNames(TextureKeys.RocketMouse,
                { start: 1, end: 2, prefix: 'flame', suffix: '.png' }),
            frameRate: 10,
            repeat: -1
        })


    }
    enableJetpack(enabled: boolean) {
        this.flames.setVisible(enabled)
    }
    kill() {
        if (this.MouseState !== MouseState.Running) {
            return
        }

        this.MouseState = MouseState.Killed

        this.mouse.play(AnimationKeys.RocketMouseDead)

        const body = this.body as Phaser.Physics.Arcade.Body
        body.setAccelerationY(0)
        body.setVelocity(1000, 0)
        this.enableJetpack(false)
    }
}