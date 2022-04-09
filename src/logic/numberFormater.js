/**
 * Formating number for correct view, example:
 * ("20150.00"  -> "20 150.00")
 * ("150000000" -> "150 000 000.00")
 * ("-74000.51" -> "-74 000.51")
 * @param number - any numeric value or string number value
 * @returns string formatted number or 0 (if NaN)
 */

export default function numberFormater(number) {
    const subNum = isFinite(number) ? number : +number;
    const result = subNum.toFixed(2).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    return isFinite(subNum) ? result : 0;
}