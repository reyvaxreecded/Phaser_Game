// import * as Phaser from '../node_modules/phaser/dist/phaser.js';
export class Game{
    constructor(){
        var config = {
            type: Phaser.AUTO,
            width: 1280,
            height: 920,
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: { y: 300 },
                    debug: false
                }
            },
            scene: {
                preload: this.preload,
                create: this.create,
                update: this.update
            }
        };
        this.game = new Phaser.Game(config);

    }
    preload ()
    {
        this.load.image('sky', 'assets/sky.png');
        this.load.image('ground', 'assets/platform.png');
        this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 85, frameHeight: 95 });
    }
    create ()
    {
        this.add.image(400, 500, 'sky');
        this.platforms = this.physics.add.staticGroup();

        this.platforms.create(400, 820, 'ground').setScale(5).refreshBody();

        this.player = this.physics.add.sprite(1,1, 'dude');

        this.player.setCollideWorldBounds(true);

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
            frameRate: 7,
            repeat: -1
        });

        this.anims.create({
            key: 'turn',
            frames: this.anims.generateFrameNumbers('dude', { start: 4, end: 5 }),
            frameRate: 4,
            repeat: -1 
        });

        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('dude', { start: 7, end: 10 }),
            frameRate: 7,
            repeat: -1
        });

        this.anims.create({
            key: 'down',
            frames: [ { key: 'dude', frame: 5 }],
            frameRate: 20, 
        })
        this.anims.create({
            key: 'up',
            frames: [ { key: 'dude', frame: 6 }],
            frameRate: 20,
        })

        this.cursors = this.input.keyboard.createCursorKeys();

        this.physics.add.collider(this.player, this.platforms);
    }

    update ()
    {

        if (this.cursors.left.isDown)
        {
            this.player.setVelocityX(-100);

            this.player.anims.play('left', true);
        }
        else if (this.cursors.right.isDown)
        {
            this.player.setVelocityX(100);

            this.player.anims.play('right', true);
        }
        else if (this.cursors.down.isDown){
            this.player.anims.play('down');
        }
        else
        {
            this.player.setVelocityX(0);

            this.player.anims.play('turn', true);
        }

        if (this.cursors.up.isDown && this.player.body.touching.down)
        {
            this.player.setVelocityY(-200);

        }
        if (this.player.body.onFloor()== false){
            this.player.anims.play('up');
        }


    }

}