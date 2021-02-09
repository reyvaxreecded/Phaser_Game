import Phaser from 'phaser'
import TextureKeys from '~/consts/TextureKeys'

export default class Editor extends Phaser.Scene {
    private selectedElement
    private bloc1!: Phaser.GameObjects.Sprite
    private bloc2!: Phaser.GameObjects.Sprite
    private bloc3!: Phaser.GameObjects.Sprite
    private bloc4!: Phaser.GameObjects.Sprite
    private bloc5!: Phaser.GameObjects.Sprite
    private bloc6!: Phaser.GameObjects.Sprite
    private Obj1!: Phaser.GameObjects.Sprite
    private Obj2!: Phaser.GameObjects.Sprite
    private Obj3!: Phaser.GameObjects.Sprite
    private Obj4!: Phaser.GameObjects.Sprite
    private Obj5!: Phaser.GameObjects.Sprite
    private Player!: Phaser.GameObjects.Sprite
    private icebackground!: Phaser.GameObjects.TileSprite
    private container!: Phaser.GameObjects.Container    
    private grid!: Phaser.GameObjects.Grid
    private marker!: Phaser.GameObjects.Graphics
    private pointer!:Phaser.Input.Pointer
    private matrix = 
    [
        ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0']

    ]
    static GRID_SIZE = 64

    constructor() {
        super('editor')
    }
    create() {
        const width = this.scale.width
        const height = this.scale.height

        this.icebackground = this.add.tileSprite(0, 0, width, height, TextureKeys.Icebackground)
            .setOrigin(0)
            .setScrollFactor(1)

        this.marker = this.add.graphics()
        this.marker.lineStyle(2, 0x000000, 1)
        this.marker.strokeRect(0, 0, 64, 64)

        const menu = this.add.sprite(0, 0, 'menuBg')
            .setOrigin(0.5)
            .setScrollFactor(0)

        const title1 = this.add.text(0, -346, 'Blocs', {
            fontFamily: 'Arial Black',
            fontSize: '38px',
            color: '0x000000'
        })
            .setOrigin(0.5)
            .setScrollFactor(1)

        this.bloc1 = this.add.sprite(-50, -270, TextureKeys.Tile, 'Bleft.png')
            .setOrigin(0.5)
            .setScrollFactor(1)
            .setInteractive()


        this.bloc2 = this.add.sprite(50, -270, TextureKeys.Tile, 'Bright.png')
            .setOrigin(0.5)
            .setScrollFactor(1)
            .setInteractive()


        this.bloc3 = this.add.sprite(-50, -176, TextureKeys.Tile, 'Bmid.png')
            .setOrigin(0.5)
            .setScrollFactor(1)
            .setInteractive()



        this.bloc4 = this.add.sprite(50, -176, TextureKeys.Tile, 'BMup.png')
            .setOrigin(0.5)
            .setScrollFactor(1)
            .setInteractive()


        this.bloc5 = this.add.sprite(-50, -82, TextureKeys.Tile, 'Iceblock.png')
            .setOrigin(0.5)
            .setScrollFactor(1)
            .setInteractive()



        this.bloc6 = this.add.sprite(50, -82, TextureKeys.Tile, 'Snowplatform.png')
            .setOrigin(0.5)
            .setScrollFactor(1)
            .setInteractive()



        const title2 = this.add.text(0, -14, 'Objets', {
            fontFamily: 'Arial Black',
            fontSize: '38px',
            color: '0x000000'
        })
            .setOrigin(0.5)
            .setScrollFactor(1)

        this.Obj1 = this.add.sprite(-50, 50, TextureKeys.Colectible, 'object_06_coin.png')
            .setOrigin(0.5)
            .setScrollFactor(1)
            .setInteractive()



        this.Obj2 = this.add.sprite(50, 50, TextureKeys.Colectible, 'gem_blue.png')
            .setOrigin(0.5)
            .setScrollFactor(1)
            .setInteractive()



        this.Obj3 = this.add.sprite(-50, 114, TextureKeys.Colectible, 'gem_green.png')
            .setOrigin(0.5)
            .setScrollFactor(1)
            .setInteractive()


        this.Obj4 = this.add.sprite(50, 114, TextureKeys.Colectible, 'gem_red.png')
            .setOrigin(0.5)
            .setScrollFactor(1)
            .setInteractive()


        this.Obj5 = this.add.sprite(0, 174, TextureKeys.Colectible, 'object_04_star.png')
            .setOrigin(0.5)
            .setScrollFactor(1)
            .setInteractive()


        const title3 = this.add.text(0, 234, 'Joueur', {
            fontFamily: 'Arial Black',
            fontSize: '38px',
            color: '0x000000'
        })
            .setOrigin(0.5)
            .setScrollFactor(1)


        this.Player = this.add.sprite(0, 324, TextureKeys.Pingouin, 'penguin_walk01.png')
            .setInteractive()


        this.container = this.add.container(884, 384, [menu, title1, this.bloc1, this.bloc2, this.bloc3, this.bloc4, this.bloc5, this.bloc6, title2, this.Obj1, this.Obj2, this.Obj3, this.Obj4, this.Obj5, title3, this.Player])

        const reduce = this.add.sprite(758, 15, 'reduceBtn')
            .setOrigin(0.5)
            .setScrollFactor(1)
            .setInteractive()
        reduce.on('pointerdown', (e) => {
            switch (this.container.visible) {
                case true:
                    this.container.visible = false
                    reduce.setX(1014)
                    reduce.setTexture('increaseBtn')
                    break;
                case false:
                    this.container.visible = true
                    reduce.setX(758)
                    reduce.setTexture('reduceBtn')
                    break;
            }
            e.event.stopPropagation()
        })
        this.pointer = this.input.activePointer

        this.bloc1.on('pointerdown', () => this.trySelectElement(this.bloc1))
        this.bloc2.on('pointerdown', () => this.trySelectElement(this.bloc2))
        this.bloc3.on('pointerdown', () => this.trySelectElement(this.bloc3))
        this.bloc4.on('pointerdown', () => this.trySelectElement(this.bloc4))
        this.bloc5.on('pointerdown', () => this.trySelectElement(this.bloc5))
        this.bloc6.on('pointerdown', () => this.trySelectElement(this.bloc6))
        this.Obj1.on('pointerdown', () => this.trySelectElement(this.Obj1))
        this.Obj2.on('pointerdown', () => this.trySelectElement(this.Obj2))
        this.Obj3.on('pointerdown', () => this.trySelectElement(this.Obj3))
        this.Obj4.on('pointerdown', () => this.trySelectElement(this.Obj4))
        this.Obj5.on('pointerdown', () => this.trySelectElement(this.Obj5))
        this.Player.on('pointerdown', () => this.trySelectElement(this.Player))      
        
    }
    update() {
        this.addBlock()
        this.container.depth +=1        
        const tileCoord = this.worldToTile(this.pointer.position.x, this.pointer.position.y)
        const worldCoord = this.tileToWorld(tileCoord[0], tileCoord[1])
        this.marker.x = worldCoord[0]
        this.marker.y = worldCoord[1]
        
    }
    private addBlock(){      
       
        if (this.selectedElement!= undefined)
        {
            if(this.pointer.rightButtonDown()){
                
                const selectedElement = this.selectedElement as Phaser.GameObjects.Sprite
                const key = selectedElement.texture.key
                const posX = this.marker.x+32
                const posY = this.marker.y+32
                const coords = this.worldToTile(posX, posY)
                const frame = String(selectedElement.frame.name)
                if(this.matrix[coords[1]][coords[0]] === "0")
                {                
                    this.add.sprite(posX, posY, key, frame)
                    this.matrix[coords[1]][coords[0]] = frame
                    console.log(this.matrix)      
                }        
                this.pointer.isDown = false
                
            }
        }
    }
    private worldToTile(x, y){
        return[Math.floor(x/Editor.GRID_SIZE), Math.floor(y/Editor.GRID_SIZE)]
    }
    private tileToWorld(i, j){
        return [i*Editor.GRID_SIZE, j*Editor.GRID_SIZE]
    }

    private toggleSelectElement(element){
        switch(this.selectedElement){
            case undefined:
                this.selectElement(element)
                break
            case element:
                this.unselectElement(element)
                break
            default:
                this.unselectElement(this.selectedElement)
                this.selectElement(element)
                break
        }
    }

    private selectElement(element){
        this.selectedElement = element;
        element.scale = 0.8
    }

    private unselectElement(element){
        this.selectedElement = undefined;
        element.scale = 1
    }

    private trySelectElement(obj: Phaser.GameObjects.Sprite) {
        if (this.pointer.leftButtonDown() == true) {
            if (this.container.exists(obj) == true) {
                const selectableElements = new Set([
                    this.Obj1, this.Obj2, this.Obj3, this.Obj4, this.Obj5, this.bloc1, this.bloc2, this.bloc3, this.bloc4, this.bloc5, this.bloc6, this.Player
                ])

                if(selectableElements.has(obj)){
                    this.toggleSelectElement(obj);
                } 
            }              
        }
        else
        {
            return
        }
    }
}