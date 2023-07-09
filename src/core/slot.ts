import { PlayerPiece } from "./playerPiece";

export type SquareType = "void" | "plain" | "special";
export type SlotId = number;
export interface Slot {
    id: SlotId;
    sType: SquareType;
    occupier: PlayerPiece | null;
}

export function createUrSlots(): Slot[] {
    return createUrSquares()
        .flat()
        .map((x, ix) => ({ id: ix, sType: x, occupier: null }));
}

export function createUrSquares(): SquareType[][] {
    function lookupSquareTypeForNum(value: 0 | 1 | 2): SquareType {
        return { 0: "void", 1: "plain", 2: "special" }[value] as SquareType;
    }

    return [
        [2, 1, 1, 1, 0, 0, 2, 1],
        [1, 1, 1, 2, 1, 1, 1, 1],
        [2, 1, 1, 1, 0, 0, 2, 1],
    ].map((row) => row.map((v) => lookupSquareTypeForNum(v as 0 | 1 | 2)));
}
type PlayerPath = SlotId[]
export const p1Path: PlayerPath = [4, 3, 2, 1, 0, 8, 9, 10, 11, 12, 13, 14, 15, 7, 6, 5]
export const p2Path: PlayerPath = [20, 19, 18, 17, 16, 8, 9, 10, 11, 12, 13, 14, 15, 23, 22, 21]