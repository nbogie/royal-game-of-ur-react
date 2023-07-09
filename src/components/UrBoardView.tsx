import classNames from "classnames";
import { GameState } from "../core/gameState";
import { PieceView } from "./PieceView";
import { PlayerPiece } from "../core/playerPiece";

interface UrBoardProps {
    gameState: GameState;
    handleClickPiece: (piece: PlayerPiece) => void;
}
export function UrBoardView({ gameState, handleClickPiece }: UrBoardProps) {
    return (
        <div className="board">
            {gameState.slots.map((slot) => (
                <div
                    key={slot.id}
                    className={classNames("game-square", slot.sType)}
                >
                    {slot.sType === "special" ? "⭐" : ""}
                    {slot.occupier && (
                        <PieceView
                            piece={slot.occupier}
                            handleClickPiece={handleClickPiece}
                            isSelected={
                                gameState.selectedPieceId === slot.occupier.id
                            }
                        />
                    )}
                </div>
            ))}
        </div>
    );
}
