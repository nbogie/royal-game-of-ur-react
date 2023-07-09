export type PlayerSide = "p1" | "p2";
export type PieceId = string;

export interface PlayerPiece {
    id: PieceId;
    side: PlayerSide;
    emoji: string;
}
export function makePlayerPieces(): [PlayerPiece[], PlayerPiece[]] {
    const emojis = ["🐈 🦁 🐆 🐯 🐅", "🦅 🦜 🕊 🦉 🦢"].map((row) =>
        row.split(" ")
    );
    function asPlayerSide(number: number): PlayerSide {
        return number ? "p2" : "p1";
    }

    return emojis.map((row, rowIx) =>
        row.map((e, ix) => ({
            side: asPlayerSide(rowIx),
            emoji: e,
            id: asPlayerSide(rowIx) + "_" + ix,
        }))
    ) as [PlayerPiece[], PlayerPiece[]];
}
