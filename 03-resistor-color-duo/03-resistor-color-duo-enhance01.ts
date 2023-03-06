const COLORS_BAND: Record<string, number> = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9,
};

export const decodedValue = (colors: Array<string>) => {
    const val = colors
        .slice(0, 2)
        .map((item) =>COLORS_BAND[item.toLowerCase()])
        .join('');
    
    return Number(val);
}