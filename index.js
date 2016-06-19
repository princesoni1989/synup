var helper = require('./helper');

/**
 * Initialize object
 * @param config
 * @constructor
 */
function Synup(config) {
    if (!(this instanceof Synup))
        return new Synup(config);

    this.auth = {
        user_email: config && config.email,
        auth_token: config && config.token
    };

}



/**
 * make call to server with respective parameters
 * @param token - access token
 * @param options - options
 * @param params - cronjob params
 * @param callback - callback function
 */
var makeCall = function (options, token, params, callback) {
    checkAuth(this.auth);
    if (arguments.length === 3) {
        callback = params;
        params = {};
    }
    var requestObj = {
        url: config.baseUrl + options.method,
        rejectUnauthorized: false,
        method: options.type,
        qs: extend(token, params)
    }
    request(requestObj, function (err, response, body) {
        if (!err && response.statusCode === 200) {
            try {
                var result = JSON.parse(body);
                return callback(null, result);
            } catch (e) {
                return callback(e, null);
            }
        } else {
            return callback(err || body, null);
        }
    });
};


/**
 * check if token is present or not
 * @param token
 */
function checkAuth(config) {
    if (!config || !config.token || !config.email) {
        throw new Error('No access token or email found');
    }
}


module.exports = this;
