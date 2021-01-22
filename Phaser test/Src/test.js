// import * as Phaser from '../node_modules/phaser/dist/phaser.js';
export class Game{
    constructor(){
        let bulletTime = 0;
        var config = {
            type: Phaser.AUTO,
            width: 1024,
            height: 768,
            physics: {
                default: 'arcade',
                arcade: {
                    debug: true
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
        this.load.image('bullet', 'assets/bullet.png');
    }
    create ()
    {
        this.bullets = this.add.group();
        this.bullets.enableBody = true;
        this.bullets.physicsBodyType = Phaser.Physics.ARCADE;
        this.bullets.createMultiple(30, 'bullet');
        this.bullets.setAll('anchor.x', 0.5);
        this.bullets.setAll('anchor.y', 1);
        this.bullets.setAll('outOfBoundesKill', true);
        this.bullets.setAll('checkWorldBounds', true);

        this.fire = this.input.keyboard.addKey(this.Phaser.Keyboard.SPACEBAR);
        this.sky = this.add.tileSprite(512,384,1921,1080,'sky');
        this.platforms = this.physics.add.staticGroup();

        this.player = this.physics.add.sprite(1,384, 'dude');

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
            frames: [ { key: 'dude', frame: 14 }],
            frameRate: 20, 
        })
        this.anims.create({
            key: 'up',
            frames: [ { key: 'dude', frame: 6 }],
            frameRate: 20,
        })

        this.anims.create({
            key:'downl',
            frames: this.anims.generateFrameNumbers('dude', { start: 14, end: 17 }),
            frameRate: 7,
            repeat: -1
        })

        this.anims.create({
            key:'downr',
            frames: this.anims.generateFrameNumbers('dude', { start: 11, end: 13 }),
            frameRate: 7,
            repeat: -1
        })        

        this.cursors = this.input.keyboard.createCursorKeys();

        this.physics.add.collider(this.player, this.platforms);
    }

    update ()
    {

        this.sky.tilePositionX += 2;

        if (this.cursors.left.isDown)
        {
            this.player.setVelocityX(-100);

            this.player.anims.play('down', true);
        }
        else if (this.cursors.right.isDown)
        {
            this.player.setVelocityX(100);

            this.player.anims.play('down', true);
        }
        else if (this.cursors.down.isDown){

            this.player.setVelocityY(+100);

            this.player.anims.play('down');
        }
        else
        {
            this.player.setVelocityX(0);

            this.player.anims.play('down', true);
        }

        if (this.cursors.up.isDown)
        {
            this.player.setVelocityY(-100);

        }
        if(this.fire.isDown)
        {
            this.fireBullet();
        }
        // if (this.player.body.onFloor()== false){
        //     this.player.anims.play('up');
        // }


    }
    fireBullet()
    {
        if(this.time.now > this.bulletTime){
            bullet = this.bullets.getFirstExists(false);

            if(this.bullet){
                this.bullet.reset(this.player.x,this.player.y);
                this.bullet.body.setVelocityY = -400;
                this.bulletTime = this.time.now + 200;

            }
        }
    }
}