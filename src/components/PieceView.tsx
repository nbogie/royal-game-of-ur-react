import classNames from "classnames";
import { PlayerPiece } from "../core/playerPiece";

interface PieceViewProps {
    piece: PlayerPiece;
    handleClickPiece: (piece: PlayerPiece) => void;
    isSelected: boolean;
}
export function PieceView({
    piece,
    handleClickPiece,
    isSelected,
}: PieceViewProps): JSX.Element {
    return (
        <button
            className={classNames("piece", piece.side, {
                selected: isSelected,
            })}
            onClick={(_ev) => handleClickPiece(piece)}
        >
            {piece.emoji}
        </button>
    );
}
