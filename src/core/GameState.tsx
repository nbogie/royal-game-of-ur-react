import { PieceId, PlayerPiece, makePlayerPieces } from "./playerPiece";
import { populateWithPieces } from "./populateWithPieces";
import { Slot, createUrSlots } from "./slot";

export interface GameState {
    slots: Slot[];
    pieces: PlayerPiece[];
    selectedPieceId: PieceId | null;
    counter: number;
    isPlayerOneTurn: boolean;
}

export function createInitialGameState(): GameState {
    const pieces = makePlayerPieces();
    const emptySlots = createUrSlots();
    const slots = populateWithPieces(emptySlots, pieces.flat());
    return {
        slots,
        pieces: pieces.flat(),
        selectedPieceId: null,
        counter: 1,
        isPlayerOneTurn: true,
    };
}
