
export interface Item {
    type: string;
    name: string;
    lowPrice: number;
    highPrice: number;
    }

export type ItemMap = {[key: string] : Item[]}

export enum ItemTypeEnum {
    WATER_FEATURES = "Water Features",
    STRUCTURES = 'Structures',
    LIGHTING = 'Lighting',
    GROUND_COVER = 'Ground Cover',
    DECK_MATERIAL = 'Deck Material',
    FENCING_AND_PRIVACY = 'Fencing and Privacy'
}