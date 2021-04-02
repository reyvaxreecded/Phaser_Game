import Phaser, { Game } from 'phaser'
import AnimationKeys from '~/consts/AnimationKeys'
import { Base } from '~/consts/Interfaces'
import TextureKeys from '~/consts/TextureKeys'
import PinguinRun from './PinguinRun'
import Ui from './Ui'

enum PinguinState {
    Running,
    AutoRun,
    Killed,
    Dead,
    GameOver
}

export default class Pinguin extends Phaser.GameObjects.Container {
    private PinguinState = PinguinState.Running;
    private pinguin!: Phaser.GameObjects.Sprite;
    private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
    private game!: Base;
    constructor(scene: Phaser.Scene & Base, x: number, y: number) {
        super(scene, x, y)
        this.pinguin = scene.add.sprite(1, 1, TextureKeys.Pingouin).setOrigin(0)

        this.createAnimation()
        this.add(this.pinguin)

        scene.physics.add.existing(this)

        const body = this.body as Phaser.Physics.Arcade.Body
        body.setSize(28, this.pinguin.height)
        body.setCollideWorldBounds(true)
        body.setOffset(0, 0)

        this.cursors = scene.input.keyboard.createCursorKeys()
        this.game = scene;//new PinguinRun;
        // Ui.get().setGame(this.game);

    }

    preUpdate() {

        const body = this.body as Phaser.Physics.Arcade.Body

        switch (this.PinguinState) {

            case PinguinState.AutoRun:
                break
            case PinguinState.Running:
                {

                    if (this.cursors.up?.isDown && body.blocked.down) {

                        body.setVelocityY(-180)

                        this.pinguin.play(AnimationKeys.PinguinJump, true)
                    }


                    else if (this.cursors.down.isDown) {
                        body.setSize(this.pinguin.width, this.pinguin.height * 0.7)
                        body.setOffset(0, 19)

                        this.pinguin.play(AnimationKeys.PinguinSlide, true)
                        if (this.cursors.right.isDown) {
                            this.pinguin.setFlipX(false)
                            body.setVelocityX(100)
                        }
                        else if (this.cursors.left.isDown) {
                            this.pinguin.setFlipX(true)
                            body.setVelocityX(-100)
                        }
                        else {
                            body.setVelocityX(0)
                        }
                    }

                    else if (this.cursors.left.isDown) {
                        this.pinguin.setFlipX(true)
                        if (this.cursors.shift.isDown) {
                            body.setVelocityX(-200)
                        }
                        else {
                            body.setVelocityX(-100)
                        }
                        if (body.blocked.down) {
                            this.pinguin.play(AnimationKeys.PinguinRun, true)
                        }
                        else {
                            this.pinguin.play(AnimationKeys.PinguinFall, true)
                        }
                    }
                    else if (this.cursors.right.isDown) {
                        this.pinguin.setFlipX(false)
                        if (this.cursors.shift.isDown) {
                            body.setVelocityX(200)
                        }
                        else {
                            body.setVelocityX(100)
                        }
                        if (body.blocked.down) {
                            this.pinguin.play(AnimationKeys.PinguinRun, true)
                        }
                        else {
                            this.pinguin.play(AnimationKeys.PinguinFall, true)
                        }
                    }

                    else {
                        body.setSize(this.pinguin.width * 0.85, this.pinguin.height)
                        body.setOffset(0, 0)
                        body.setAccelerationY(0)
                        body.setVelocityX(0)

                        if (body.blocked.down) {
                            this.pinguin.play(AnimationKeys.PinguinStand, true)
                        }
                        else {
                            this.pinguin.play(AnimationKeys.PinguinFall, true)
                        }
                    }



                    break
                }

            case PinguinState.Killed:
                {

                    this.pinguin.play(AnimationKeys.PinguinDead)

                    break;

                }
            case PinguinState.Dead:
                {
                    if (this.body.velocity.y == 0) {
                        this.PinguinState = PinguinState.GameOver
                    }
                    break
                }
            case PinguinState.GameOver:
                {
                    this.scene.scene.start('pinguinrun');
                }
                break
        }
    }

    private createAnimation() {
        this.pinguin.anims.create({
            key: AnimationKeys.PinguinRun,
            frames: this.pinguin.anims.generateFrameNames(TextureKeys.Pingouin, {
                start: 1, end: 4, prefix: 'penguin_walk', zeroPad: 2, suffix: '.png'
            }),
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
        this.pinguin.anims.create({
            key: AnimationKeys.PinguinStand,
            frames: [{
                key: TextureKeys.Pingouin,
                frame: 'penguin_walk01.png'
            }]
        })
    }
    kill() {
        if (this.PinguinState !== PinguinState.Running) {
            return
        }

        let nbHearth = Ui.get().getHearthNb();
        if (nbHearth > 1) {
            Ui.get().setHearthNb(nbHearth - 1)
            this.PinguinState = PinguinState.Killed
            setTimeout(() => this.scene.scene.restart(), 500)

        }
        else {
            let nbLife = Ui.get().getLifeNb()
            switch (nbLife) {
                case 0:
                    this.game.setLvlNumber(0);
                    this.PinguinState = PinguinState.Dead
                    this.pinguin.play(AnimationKeys.PinguinDead)
                    break;
                default:
                    Ui.get().setLifeNb(nbLife - 1)
                    Ui.get().setHearthNb(3)
                    this.PinguinState = PinguinState.Killed
                    setTimeout(() => this.scene.scene.restart(), 500)
                    break;
            }

        }

    }
    startAutorun() {
        this.PinguinState = PinguinState.AutoRun
        this.pinguin.play(AnimationKeys.PinguinRun, true)
    }

}