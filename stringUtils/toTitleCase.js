/**
 * @ convert every first letter of each word to uppercase
 * @param str sentence.
 * @return string
 */
module.exports = function toTitleCase(str) {
    if(!str || typeof str !== 'string') return str;
    return str.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}
