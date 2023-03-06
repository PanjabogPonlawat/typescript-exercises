enum ColorCode {
    BLACK,
    BROWN,
    RED,
    ORANGE,
    YELLOW,
    GREEN,
    BLUE,
    VIOLET,
    GREY,
    WHITE,
  };
  
  type colorCode = keyof typeof ColorCode;
  
  export function decodedResistorValue([firstColor, secondColor, thirdColor]: Array<string>): string {
    const firstTwoDigits = +`${ColorCode[firstColor.toUpperCase() as colorCode]}${ColorCode[secondColor.toUpperCase() as colorCode]}`;
    const powerDigit = +`${ColorCode[thirdColor.toUpperCase() as colorCode]}`;
    const entireDigits = firstTwoDigits * Math.pow(10, powerDigit);
  
    return numberFormatter(entireDigits);
  };
  
  function numberFormatter(number: number): string {
    const lookup = [
      { value: 1, symbol: 'ohms'},
      { value: 1e3, symbol: 'kiloohms'},
      { value: 1e6, symbol: 'megaohms'},
      { value: 1e9, symbol: 'gigaohms'},
      { value: 1e12, symbol: 'teraohms'},
      { value: 1e15, symbol: 'petaohms'},
    ];
    const regEx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    const item = lookup.slice().reverse().find(({ value }) => number >= value);
  
    return item ? `${(number / item.value).toString().replace(regEx, '$1')} ${item.symbol}` : '0 ohms';
  }

// Typescript Playground: http://bitly.ws/BbP6  
// Explanation
  