export const gameWeights = {
    resource: 55, // probability for resource slots
    game: 45, // probability for mini-game slots
};

export const reelSymbols = ["🪙", "⚡️", "🎁", "💎", "⚔️", "🛡", "🔑", "🎫"];

export const gameSymbols = [
    { char: "no", weight: 50 },
    { char: "⚔️", weight: 10 },
    { char: "🛡", weight: 20 },
    { char: "🔑", weight: 15 },
    { char: "🎫", weight: 5 },
];

export const resourceSymbols = [
    { char: "no", weight: 62 },
    { char: "🪙", weight: 28 },
    { char: "⚡️", weight: 5 },
    { char: "🎁", weight: 4 },
    { char: "💎", weight: 1 },
];

export function getGameArray(): string[]
{
    // const totalWeight = gameWeights.resource + gameWeights.game;
    // const gameWin = Math.random() * totalWeight < gameWeights.game;
    const gameWin = Math.random() * 100 < gameWeights.game;

    return gameWin
        ? getWeightedGameArray()
        : getWeightedResourceArray();
}

export function getReelsRandomArray(): string[]
{
    return [
        getReelRandomSymbol() as string,
        getReelRandomSymbol() as string,
        getReelRandomSymbol() as string,
    ];
}

export function getWeightedGameArray(): string[]
{
    const s = getWeightedRandomGameSymbol() as string;
    return s === "no"
        ? getReelsRandomArray()
        : [s, s, s];
}

export function getWeightedResourceArray(): string[]
{
    const s = getWeightedRandomResourceSymbol() as string;
    return s === "no"
        ? getReelsRandomArray()
        : [s, s, s];
}

export function getReelRandomSymbol(): string
{
    let random = Math.floor(Math.random() * reelSymbols.length);
    return reelSymbols[random];
}

export function getWeightedRandomGameSymbol()
{
    // const totalWeight = gameSymbols.reduce((sum, s) => sum + s.weight, 0);
    // let random = Math.random() * totalWeight;
    let random = Math.random() * 100;

    for (const s of gameSymbols)
    {
        if (random < s.weight) return s.char;
        random -= s.weight;
    }
}

export function getWeightedRandomResourceSymbol()
{
    // const totalWeight = resourceSymbols.reduce((sum, s) => sum + s.weight, 0);
    // let random = Math.random() * totalWeight;
    let random = Math.random() * 100;

    for (const s of resourceSymbols)
    {
        if (random < s.weight) return s.char;
        random -= s.weight;
    }
}

export function getRouteByResults(results: string[]): string
{
    let route = '/';
    
    // NOTE: Reward coin-jackpot
    if (results[0] === '🪙' && results[1] === '🪙' && results[2] === '🪙')
        route = '/reward';
    // NOTE: Reward energy
    else if (results[0] === '⚡️' && results[1] === '⚡️' && results[2] === '⚡️')
        route = '/reward';
    // NOTE: Reward box
    else if (results[0] === '🎁' && results[1] === '🎁' && results[2] === '🎁')
        route = '/reward';
    // NOTE: Reward diamond
    else if (results[0] === '💎' && results[1] === '💎' && results[2] === '💎')
        route = '/reward';

    // NOTE: Reward ticket
    else if (results[0] === '🎫' && results[1] === '🎫' && results[2] === '🎫')
        route = '/reward';
    // NOTE: Reward defense
    else if (results[0] === '🛡' && results[1] === '🛡' && results[2] === '🛡')
        route = '/reward';

    // NOTE: Fight
    else if (results[0] === '⚔️' && results[1] === '⚔️' && results[2] === '⚔️')
        route = '/foe/attack';
    // NOTE: Heist
    else if (results[0] === '🔑' && results[1] === '🔑' && results[2] === '🔑')
        route = '/foe/heist';

    // NOTE: Reward smallest, coins
    else if ( !(results[0] === results[1] && results[1] === results[2] && results[2] === results[0]) )
        route = '/reward/coin';
    
    return route;
}