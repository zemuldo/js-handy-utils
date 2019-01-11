/**
 * @ convert fist letter to uppercase
 * @param str sentence.
 * @return string
 */
module.exports = function toSentenceCase(str) {
    if(!str) return str
    return str.charAt(0).toUpperCase() + str.slice(1);
}
