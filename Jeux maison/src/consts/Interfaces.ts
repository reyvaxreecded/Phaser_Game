interface ObjectBaseData {
    x: number;
    y: number;
}

interface KeyedObjectData extends ObjectBaseData {
    key: string;
}

interface TileData extends KeyedObjectData { }

interface ObstacleData extends KeyedObjectData { }

interface CollectibleData extends ObjectBaseData {
    type: string;
}

interface GemData extends CollectibleData {
    color: string;
}

interface CoinData extends CollectibleData { }

type Collectible = GemData | CoinData;
type WorldData = Array<TileData>;
type ObstaclesData = Array<ObstacleData>;
type CollectiblesData = Array<Collectible>;
type PlayerStartData = ObjectBaseData;

interface LevelData {
    collectibles: CollectiblesData;
    playerStart: PlayerStartData;
    obstacles: ObstaclesData;
    world: WorldData;
}
