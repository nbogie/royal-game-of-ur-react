export interface RollOutcome {
    value: 0 | 1 | 2 | 3 | 4;
    pips: [0 | 1, 0 | 1, 0 | 1, 0 | 1];
}

export function generateRoll(): RollOutcome {
    const pips = [pick([1, 0]), pick([1, 0]), pick([1, 0]), pick([1, 0])];
    return { value: pips.reduce((a, b) => a + b), pips } as RollOutcome;
}
export function pick<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
}