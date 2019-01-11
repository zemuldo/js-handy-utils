module.exports = function getQueryVar (variable,url) {
    if (!url) return null;
    variable = variable.replace(/[[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + variable + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}