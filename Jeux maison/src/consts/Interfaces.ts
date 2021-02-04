import Pinguin from "~/game/Pingouin";
import PinguinRun from "~/game/PinguinRun";

export interface Base {
    getLvlNumber(): number
    getCoinCount(): number
    getGemCount(): number
    gettotalCoin(): number
    gettotalGem(): number
    getStars(): Phaser.Physics.Arcade.StaticGroup
    getScene(): Phaser.Scene
    setLvlNumber(number)
    setCoinCount(number)
    setGemCount(number)
    settotalCoin(number)
    settotalGem(number)
    setGameStatePause()      
}
export interface ObjectBaseData {
    x: number;
    y: number;
}

export interface KeyedObjectData extends ObjectBaseData {
    key: string;
}

export interface TileData extends KeyedObjectData { }

export interface ObstacleData extends KeyedObjectData { }

export interface CollectibleData extends ObjectBaseData {
    type: string;
}

export interface GemData extends CollectibleData {
    color: string;
}

export interface CoinData extends CollectibleData { }

export type Collectible = GemData | CoinData;
export type WorldData = Array<TileData>;
export type ObstaclesData = Array<ObstacleData>;
export type CollectiblesData = Array<Collectible>;
export type PlayerStartData = ObjectBaseData;

export interface LevelData {
    collectibles: CollectiblesData;
    playerStart: PlayerStartData;
    obstacles: ObstaclesData;
    world: WorldData;
}
