'use strict';

const HUNDREDS = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
const TENS = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
const UNITS = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];

class RomanNumeralGenerator {
  /**
   * Generates the roman numeral representation of an integer
   * @param  {Number}  number
   * @return {String}
   * @throws
   */
  generate(number) {
    if (number < 1 || number > 3999) throw new Error('Number must be in the range 1 ≤ n ≤ 3999');

    // Determine count for each base10 column
    const thousands = Math.floor(number / 1000);
    const hundreds = Math.floor(number % 1000 / 100);
    const tens = Math.floor(number % 100 / 10);
    const units = number % 10;

    // Convert columns to roman numerals
    const thousandsRoman = 'M'.repeat(thousands);
    const hundredsRoman = HUNDREDS[hundreds];
    const tensRoman = TENS[tens];
    const unitsRoman = UNITS[units];

    return thousandsRoman + hundredsRoman + tensRoman + unitsRoman;
  }
}

module.exports = RomanNumeralGenerator;