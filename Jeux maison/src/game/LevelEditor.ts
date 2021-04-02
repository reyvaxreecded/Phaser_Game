import Phaser from 'phaser'
import TextureKeys from '~/consts/TextureKeys'
// import { LevelData, ObjectBaseData, CoinData, GemData, CollectibleData, KeyedObjectData, TileData, ObstacleData, Collectible, WorldData, PlayerStartData, CollectiblesData, ObstaclesData, Base } from '~/consts/Interfaces'
import * as GameInterfaces from '~/consts/Interfaces';

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
    private Obstacle!: Phaser.GameObjects.Sprite
    private Player!: Phaser.GameObjects.Sprite
    private icebackground!: Phaser.GameObjects.TileSprite
    private container!: Phaser.GameObjects.Container
    private grid!: Phaser.GameObjects.Grid
    private marker!: Phaser.GameObjects.Graphics
    private pointer!: Phaser.Input.Pointer
    private cursors!: Phaser.Types.Input.Keyboard.CursorKeys
    private helper!: Phaser.GameObjects.Container
    private reduce!: Phaser.GameObjects.Sprite
    private matrix =
        [
            ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
            ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
            ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
            ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
            ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
            ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
            ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
            ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
            ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
            ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
            ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
            ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0']

        ]
    static GRID_SIZE = 64
    private tiles!: Array<Array<string>>
    private collectibles!: Array<Array<string>>
    private obstacles!: Array<Array<string>>
    private playerStart!: Array<Array<string>>
    private nbStar = 0
    private nbCoin = 0
    private nbBlueGem = 0
    private nbGreenGem = 0
    private nbRedGem = 0
    private nbPlayer = 0

    constructor() {
        super('editor')
        this.tiles = new Array
        this.collectibles = new Array
        this.playerStart = new Array
        this.obstacles = new Array
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

        const title1 = this.add.text(0, -356, 'Blocs', {
            fontFamily: 'Arial Black',
            fontSize: '32px',
            color: '0x000000'
        })
            .setOrigin(0.5)
            .setScrollFactor(1)

        this.bloc1 = this.add.sprite(-50, -290, TextureKeys.Tile, 'Bleft.png')
            .setOrigin(0.5)
            .setScrollFactor(1)
            .setInteractive()

        this.bloc2 = this.add.sprite(50, -290, TextureKeys.Tile, 'Bright.png')
            .setOrigin(0.5)
            .setScrollFactor(1)
            .setInteractive()

        this.bloc3 = this.add.sprite(-50, -196, TextureKeys.Tile, 'Bmid.png')
            .setOrigin(0.5)
            .setScrollFactor(1)
            .setInteractive()

        this.bloc4 = this.add.sprite(50, -196, TextureKeys.Tile, 'BMup.png')
            .setOrigin(0.5)
            .setScrollFactor(1)
            .setInteractive()

        this.bloc5 = this.add.sprite(-50, -102, TextureKeys.Tile, 'Iceblock.png')
            .setOrigin(0.5)
            .setScrollFactor(1)
            .setInteractive()

        this.bloc6 = this.add.sprite(50, -102, TextureKeys.Tile, 'Snowplatform.png')
            .setOrigin(0.5)
            .setScrollFactor(1)
            .setInteractive()

        const title2 = this.add.text(0, -34, 'Objets', {
            fontFamily: 'Arial Black',
            fontSize: '32px',
            color: '0x000000'
        })
            .setOrigin(0.5)
            .setScrollFactor(1)

        this.Obj1 = this.add.sprite(-100, 30, TextureKeys.Colectible, 'coin.png')
            .setOrigin(0.5)
            .setScrollFactor(1)
            .setInteractive()

        this.Obj2 = this.add.sprite(0, 30, TextureKeys.Colectible, 'gem_blue.png')
            .setOrigin(0.5)
            .setScrollFactor(1)
            .setInteractive()

        this.Obj3 = this.add.sprite(100, 30, TextureKeys.Colectible, 'gem_green.png')
            .setOrigin(0.5)
            .setScrollFactor(1)
            .setInteractive()

        this.Obj4 = this.add.sprite(-50, 84, TextureKeys.Colectible, 'gem_red.png')
            .setOrigin(0.5)
            .setScrollFactor(1)
            .setInteractive()

        this.Obj5 = this.add.sprite(50, 84, TextureKeys.Colectible, 'star.png')
            .setOrigin(0.5)
            .setScrollFactor(1)
            .setInteractive()

        const title3 = this.add.text(0, 134, 'Obstacles', {
            fontFamily: 'Arial Black',
            fontSize: '32px',
            color: '0x000000'
        })
            .setOrigin(0.5)
            .setScrollFactor(1)

        this.Obstacle = this.add.sprite(0, 204, TextureKeys.Icerberg, "iceberg.png")
            .setOrigin(0.5)
            .setScrollFactor(1)
            .setInteractive()

        const title4 = this.add.text(0, 274, 'Joueur', {
            fontFamily: 'Arial Black',
            fontSize: '32px',
            color: '0x000000'
        })
            .setOrigin(0.5)
            .setScrollFactor(1)

        this.Player = this.add.sprite(0, 344, TextureKeys.Pingouin, 'penguin_walk01.png')
            .setInteractive()

        this.container = this.add.container(884, 384, [menu, title1, this.bloc1, this.bloc2, this.bloc3, this.bloc4, this.bloc5, this.bloc6, title2, this.Obj1, this.Obj2, this.Obj3, this.Obj4, this.Obj5, title3, this.Obstacle, title4, this.Player])

        this.reduce = this.add.sprite(730, 15, 'reduceBtn')
            .setOrigin(0.5)
            .setScrollFactor(1)
            .setInteractive()
        this.reduce.on('pointerdown', (e) => {
            switch (this.container.visible) {
                case true:
                    this.container.visible = false
                    this.reduce.setX(1014)
                    this.reduce.setTexture('increaseBtn')
                    break;
                case false:
                    this.container.visible = true
                    this.reduce.setX(730)
                    this.reduce.setTexture('reduceBtn')
                    break;
            }
            e.event.stopPropagation()
        })
        const rectangle = this.add.rectangle(0, 0, 600, 350, 0x000000, 0.5)
            .setOrigin(0.5)
        const Txt1 = this.add.text(-220, -130, 'Utiliser', { fontStyle: 'bold' })
            .setOrigin(0.5)
        const left_arrow = this.add.image(-126, -130, 'helpers', 'left_arrow.png')
            .setOrigin(0.5)
        const right_arrow = this.add.image(-42, -130, 'helpers', 'right_arrow.png')
            .setOrigin(0.5)
        const txt1_2 = this.add.text(128, -130, 'pour déplacer la caméra', { fontStyle: 'bold' })
            .setOrigin(0.5)
        const txt2 = this.add.text(-220, -40, 'Utiliser', { fontStyle: 'bold' })
            .setOrigin(0.5)
        const left_button = this.add.image(-136, -40, 'helpers', 'left_button.png')
            .setOrigin(0.5)
        const txt2_2 = this.add.text(28, -40, 'pour séléctionner un bloc', { fontStyle: 'bold' })
            .setOrigin(0.5)
        const txt3 = this.add.text(-220, 50, 'Utiliser', { fontStyle: 'bold' })
            .setOrigin(0.5)
        const right_button = this.add.image(-136, 50, 'helpers', 'right_button.png')
            .setOrigin(0.5)
        const txt3_2 = this.add.text(-4, 50, 'pour poser un bloc', { fontStyle: 'bold' })
            .setOrigin(0.5)
        const txt4 = this.add.text(0, 140, 'Appuyez sur espace pour fermer', { fontStyle: 'bold', fontSize: '28px' })
            .setOrigin(0.5)
        this.helper = this.add.container(512, 384, [rectangle, Txt1, txt1_2, txt2, txt2_2, txt3, txt3_2, txt4, left_arrow, right_arrow, left_button, right_button])
        this.helper.visible = false
        this.cursors = this.input.keyboard.createCursorKeys()
        const save = this.add.sprite(512, 30, 'saveBtn')
            .setOrigin(0.5)
            .setScrollFactor(1)
            .setScale(0.6)
            .setInteractive()

        save.on('pointerdown', (e) => {
            this.save()

            e.event.stopPropagation()
        })
        const help = this.add.sprite(30, 30, 'helpBtn')
            .setOrigin(0.5)
            .setScale(0.5)
            .setInteractive()
        help.on('pointerdown', (e) => {

            switch (this.helper.visible) {
                case true:
                    this.helper.visible = false
                    this.container.visible = true
                    this.reduce.setX(730)
                    this.reduce.setTexture('reduceBtn')
                    break;
                case false:
                    this.helper.visible = true
                    this.container.visible = false
                    this.reduce.setX(1014)
                    this.reduce.setTexture('increaseBtn')
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
        this.Obstacle.on('pointerdown', () => this.trySelectElement(this.Obstacle))
        this.Player.on('pointerdown', () => this.trySelectElement(this.Player))

    }
    update() {
        this.addBlock()
        this.container.depth += 1
        const tileCoord = this.worldToTile(this.pointer.position.x, this.pointer.position.y)
        const worldCoord = this.tileToWorld(tileCoord[0], tileCoord[1])
        this.marker.x = worldCoord[0]
        this.marker.y = worldCoord[1]
        if (this.helper != undefined) {
            if (this.cursors.space.isDown && this.helper.visible == true) {
                this.helper.visible = false
                this.container.visible = true
                this.reduce.setX(730)
                this.reduce.setTexture('reduceBtn')

            }
        }
    }
    private addBlock() {

        if (this.selectedElement != undefined) {
            if (this.pointer.rightButtonDown()) {

                const selectedElement = this.selectedElement as Phaser.GameObjects.Sprite
                const key = selectedElement.texture.key
                const posX = this.marker.x + 32
                const posY = this.marker.y + 32
                const coords = this.worldToTile(posX, posY)
                const frame = String(selectedElement.frame.name)
                if (this.matrix[coords[1]][coords[0]] === "0") {
                    switch (frame) {
                        case 'gem_red.png':
                            if (this.nbRedGem < 1) {
                                this.collectibles.push([String(posX), String(posY), frame])                                
                                this.add.sprite(posX, posY, key, frame)
                                this.matrix[coords[1]][coords[0]] = '1'
                                this.nbRedGem += 1
                            }
                            break;
                        case 'gem_blue.png':
                            if (this.nbBlueGem < 1) {
                                this.collectibles.push([String(posX), String(posY), frame])
                                this.add.sprite(posX, posY, key, frame)
                                this.matrix[coords[1]][coords[0]] = '1'
                                this.nbBlueGem += 1
                            }
                            break;
                        case 'gem_green.png':
                            if (this.nbGreenGem < 1) {
                                this.collectibles.push([String(posX), String(posY), frame])
                                this.add.sprite(posX, posY, key, frame)
                                this.matrix[coords[1]][coords[0]] = '1'
                                this.nbGreenGem += 1
                            }
                            break;
                        case 'star.png':
                            if (this.nbStar < 1) {
                                this.collectibles.push([String(posX), String(posY), frame])
                                this.add.sprite(posX, posY, key, frame)
                                this.matrix[coords[1]][coords[0]] = '1'
                                this.nbStar += 1
                            }
                            break;
                        case 'coin.png':
                            if (this.nbCoin < 10) {
                                this.collectibles.push([String(posX), String(posY), frame])
                                this.add.sprite(posX, posY, key, frame)
                                this.matrix[coords[1]][coords[0]] = '1'
                                this.nbCoin += 1
                            }
                            break;
                        case 'Bleft.png':
                        case 'Bright.png':
                        case 'Bmid.png':
                        case 'BMup.png':
                        case 'Snowplatform.png':
                        case 'Iceblock.png':
                            this.tiles.push([String(posX), String(posY), frame])
                            this.add.sprite(posX, posY, key, frame)
                            this.matrix[coords[1]][coords[0]] = '1'
                            break;
                        case 'iceberg.png':
                            this.obstacles.push([String(posX), String(posY), "Iceberg"])
                            this.add.sprite(posX, posY, key, frame)
                            this.matrix[coords[1]][coords[0]] = '1'
                        case 'penguin_walk01.png':
                            if (this.nbPlayer < 1) {
                                this.playerStart[0] = [String(posX), String(posY)]
                                this.add.sprite(posX, posY, key, frame)
                                this.matrix[coords[1]][coords[0]] = '1'
                                this.nbPlayer += 1
                            }
                            break;
                    }
                }
                this.pointer.isDown = false

            }
        }
    }
    private worldToTile(x, y) {
        return [Math.floor(x / Editor.GRID_SIZE), Math.floor(y / Editor.GRID_SIZE)]
    }
    private tileToWorld(i, j) {
        return [i * Editor.GRID_SIZE, j * Editor.GRID_SIZE]
    }

    private toggleSelectElement(element) {
        switch (this.selectedElement) {
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

    private selectElement(element) {
        this.selectedElement = element;
        element.scale = 0.8
    }

    private unselectElement(element) {
        this.selectedElement = undefined;
        element.scale = 1
    }

    private trySelectElement(obj: Phaser.GameObjects.Sprite) {
        if (this.pointer.leftButtonDown() == true) {
            if (this.container.exists(obj) == true) {
                const selectableElements = new Set([
                    this.Obj1, this.Obj2, this.Obj3, this.Obj4, this.Obj5, this.bloc1, this.bloc2, this.bloc3, this.bloc4, this.bloc5, this.bloc6, this.Obstacle, this.Player
                ])

                if (selectableElements.has(obj)) {
                    this.toggleSelectElement(obj);
                }
            }
        }
        else {
            return
        }
    }

    private save() {
        const lvlData: GameInterfaces.LevelData | any = {}
        lvlData.playerStart = {
            x: Number(this.playerStart[0][0]),
            y: Number(this.playerStart[0][1])
        }
        lvlData.world = [];

        for (let tileData of this.tiles) {
            lvlData.world.push({
                x: Number(tileData[0]),
                y: Number(tileData[1]),
                key: tileData[2].replace('.png', '')
            })
        }

        lvlData.collectibles = []

        for (let collectiblesData of this.collectibles) {
            let key
            let color
            switch (String(collectiblesData[2])) {
                case "gem_blue.png":
                case "gem_green.png":
                case "gem_red.png":
                    key = collectiblesData[2].replace(/_(\w)+.png/, '')
                    break;
                default:
                    key = collectiblesData[2].replace('.png', '')
                    break;
            }
            switch (String(collectiblesData[2])) {
                case "gem_blue.png":
                case "gem_green.png":
                case "gem_red.png":
                    const reg = /\w+_(\w+)\.png/g
                    color = collectiblesData[2].replace(reg, (cor, p1) => p1)
                    break;
                default:
                    break;
            }
            lvlData.collectibles.push({
                x: Number(collectiblesData[0]),
                y: Number(collectiblesData[1]),
                type: key,
                color: color
            })
        }
        lvlData.obstacles = []

        for (let obstaclesData of this.obstacles) {
            lvlData.obstacles.push({
                x: Number(obstaclesData[0]),
                y: Number(obstaclesData[1]),
                key: obstaclesData[2]
            })
        }
        const json = JSON.stringify(lvlData);
        this.download(json, "customLevel")
    }
    private download(exportObj, exportName) {
        var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(exportObj);
        var downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href", dataStr);
        downloadAnchorNode.setAttribute("download", exportName + ".json");
        document.body.appendChild(downloadAnchorNode); // required for firefox
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    }
}