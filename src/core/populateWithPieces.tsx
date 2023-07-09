import { PlayerPiece } from "./playerPiece";
import { Slot } from "./slot";

export function populateWithPieces(
    emptySlots: Slot[],
    pPieces: PlayerPiece[]
): Slot[] {
    const newSlots: Slot[] = [];
    pPieces.flat().sort((_a, _b) => (Math.random() < 0.5 ? -1 : 1));

    for (const s of emptySlots) {
        const newSlot = { ...s };
        if (Math.random() < 0.4 && pPieces.length > 0) {
            newSlot.occupier = pPieces.pop()!;
        }
        newSlots.push(newSlot);
    }
    return newSlots;
}
