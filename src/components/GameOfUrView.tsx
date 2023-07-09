import { useState } from "react";
import { GameState, createInitialGameState } from "../core/gameState";
import { PlayerPiece, PlayerSide } from "../core/playerPiece";
import { RollOutcome, generateRoll } from "../core/roll";
import { RollView } from "./RollView";
import { UrBoardView } from "./UrBoardView";
export function GameOfUrView() {
    const [currentRoll, setCurrentRoll] = useState<RollOutcome | null>(null);

    const [gameState, setGameState] = useState<GameState>(
        createInitialGameState()
    );

    function handleRollClick() {
        setCurrentRoll(generateRoll());
    }
    function handleResetClick() {
        setGameState((gs) => gs);
    }
    function whoseTurnIsIt(): PlayerSide {
        return gameState.isPlayerOneTurn ? "p1" : "p2";
    }
    function handleClickPiece(piece: PlayerPiece): void {
        setGameState((gs) => ({
            ...gs,
            selectedPieceId: piece.id,
            counter: gs.counter + 1,
        }));
    }
    function getSelectedPiece(gameState: GameState): PlayerPiece | null {
        if (gameState.selectedPieceId) {
            const found = gameState.pieces.find(
                (p) => p.id === gameState.selectedPieceId
            );
            console.log({ found });
            return found ?? null;
        } else {
            return null;
        }
    }
    const selectedPiece = getSelectedPiece(gameState);
    return (
        <div className="game-of-ur">
            <h2>Royal Game of Ur</h2>
            <UrBoardView {...{ gameState, handleClickPiece }} />
            <button className="control" onClick={handleRollClick}>
                Roll!
            </button>
            <button className="control" onClick={handleResetClick}>
                Reset
            </button>
            {currentRoll !== null && <RollView {...{ currentRoll }} />}
            <textarea
                readOnly
                style={{ width: "100%", height: "10rem" }}
                value={JSON.stringify(gameState, null, 4)}
            />
            <div>
                {selectedPiece ? (
                    <p>Selected: {selectedPiece.emoji}</p>
                ) : (
                    "Nothing selected"
                )}
            </div>
            <div>Whose turn? {whoseTurnIsIt()}</div>
        </div>
    );
}
