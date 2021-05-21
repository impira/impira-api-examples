var request = require('request');
var fs = require('fs');

const org = '<ORG_NAME>';
const collection = '<COLLECTION_NAME>';
const filename = '<PATH/TO/FILE>';
const token = '<YOUR_TOKEN_HERE>';
const desiredFilename = '<FILENAME IN IMPIRA>';

var formData = {
    data: JSON.stringify({"File": {"name": desiredFilename}}),
    file: fs.createReadStream(filename),
};

const headers = {'X-Access-Token': token};

request.post({
    url: 'https://app.impira.com:443/o/' + encodeURIComponent(org) + '/api/v2/collection/' + encodeURIComponent(collection),
    formData: formData,
    headers: headers,
}, function optionalCallback(err, httpResponse, body) {
    if (err) {
        return console.error('upload failed:', err);
    }
    console.log('Server responded with:', body);
});
