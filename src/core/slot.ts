import { PlayerPiece } from "./playerPiece";

export type SquareType = "void" | "plain" | "special";
export interface Slot {
    id: number;
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