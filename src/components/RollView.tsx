import { RollOutcome } from "../core/roll";

export function RollView({ currentRoll }: { currentRoll: RollOutcome }) {
    return (
        <p>
            Current Roll:
            <span className="roll-value">{currentRoll.value}</span>
            <span className="roll-pips">
                {currentRoll.pips.map((pip) => (pip ? "💚" : "🛑"))}
            </span>
        </p>
    );
}
