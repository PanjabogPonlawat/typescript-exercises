const COLORS_BAND: { [key: string]: number } = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9
};

export function decodedValue(colors: string[]) {
  const val = colors.filter((color, index) => index < 2).map((item: string) => String(COLORS_BAND[item.toLowerCase()])).join('');
  return Number(val);
}