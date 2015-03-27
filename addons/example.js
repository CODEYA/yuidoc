/**
 * Addon Example
 * usage: yuidoc --addondir /path-to-yuidocjs/addons ...other options and arguments
 */
module.exports = function(Y) {
    console.log("define additional comment annotations");

    [     'id'
        , 'note'
    ].forEach(function (key) {
            Y.DocParser.DIGESTERS[key] = function (tagname, value, target, block) {
                if (typeof value === 'string' && value.length) {
                    if (!target.customDocs) {
                        target.customDocs = []
                    }
                    target.customDocs.push({
                        'tagname': tagname,
                        'value': value
                    })
                }
            }
        });
};

