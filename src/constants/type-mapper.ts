import { ItemTypeEnum } from "../types/types";

export const typeMapper: {[key: string]: ItemTypeEnum} = {
    'WATER_FEATURES': ItemTypeEnum.WATER_FEATURES,
    'STRUCTURES': ItemTypeEnum.STRUCTURES,
    'LIGHTING': ItemTypeEnum.LIGHTING,
    'GROUND_COVER':ItemTypeEnum.GROUND_COVER,
    'DECK_MATERIAL': ItemTypeEnum.DECK_MATERIAL,
    'FENCING_AND_PRIVACY': ItemTypeEnum.FENCING_AND_PRIVACY
}