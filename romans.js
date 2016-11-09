'use strict';

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
    const hundredsRoman = 'C'.repeat(hundreds).replace('CCCCCCCCC', 'CM').replace('CCCCC', 'D').replace('CCCC', 'CD');
    const tensRoman = 'X'.repeat(tens).replace('XXXXXXXXX', 'XC').replace('XXXXX', 'L').replace('XXXX', 'XL');
    const unitsRoman = 'I'.repeat(units).replace('IIIIIIIII', 'IX').replace('IIIII', 'V').replace('IIII', 'IV');

    return thousandsRoman + hundredsRoman + tensRoman + unitsRoman;
  }
}

module.exports = RomanNumeralGenerator;