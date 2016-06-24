var helper = require('./helper');
var baseUrl = 'http://ftv2-api.stg.synup.com/api/v2/';


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
 * @API
 *list business
 *@param {Function} callback - callback function
 */
exports.listBusiness = function (callback) {
    var options = {
        method: 'get',
        url: 'businesses.json'
    }
    makeCall(options, callback);
}

/**
 * @API
 * get business information
 *@param {string} params - id
 *@param {boolean} params - details
 *@param {Function} callback - callback function
 */
exports.infoBusiness = function (id, details, callback) {
    var url = 'businesses/' + id + ' .json';
    if (details) {
        url += '?type=all';
    }
    var options = {
        method: url,
        url: 'businesses.json'
    }
    makeCall(options, callback);

}

/**
 * @API
 * get listing for particular business
 * @param {string} params - id
 *@param {Function} callback - callback function
 */
exports.businessListing = function (id, callback) {
    var options = {
        method: get,
        url: 'businesses/' + id + ' /listings.json'
    }
    makeCall(options, callback);
}

/**
 * @API
 * get review for particular business
 * @param {string} params - id
 *@param {Function} callback - callback function
 */
exports.businessReview = function (id, callback) {
    var options = {
        method: get,
        url: 'businesses/' + id + ' /listings.json'
    }
    makeCall(options, callback);
}

/**
 * @API
 * get ranking for particular business
 * @param {string} params - id
 *@param {Function} callback - callback function
 */
exports.businessRanking = function (id, callback) {
    var options = {
        method: get,
        url: 'businesses/' + id + ' /ranking.json'
    }
    makeCall(options, callback);
}

/**
 * @API
 * Archive business info
 *@param {string} params - id
 *@param {Function} callback - callback function
 */
exports.businessArchive = function (id, callback) {
    var options = {
        method: get,
        url: 'businesses/' + id + ' /archive.json'
    }
    makeCall(options, callback);
}

/**
 * @API
 * create business
 * @param {object} params - params
 *@param {Function} callback - callback function
 */
exports.createBusiness = function (params, callback) {
    var options = {
        method: 'post',
        url: 'businesses.json'
    }
    makeCall(options, {business: params}, callback);
}

/**
 * @API
 * update business
 *@param {string} params - id
 *@param {object} params - params
 *@param {Function} callback - callback function
 */
exports.updateBusiness = function (id, params, callback) {
    var options = {
        method: 'put',
        url: 'businesses/' + id + '.json'
    }
    makeCall(options, {business: params}, callback);
}

/**
 * @API
 * Archive business info
 *@param {Function} callback - callback function
 */
exports.getCountries = function (callback) {
    var options = {
        method: 'put',
        url: 'countries.json'
    }
    makeCall(options, callback);
}

/**
 * @API
 * Archive business info
 *@param {string} params - id
 *@param {Function} callback - callback function
 */
exports.getState = function (id, callback) {
    var options = {
        method: 'get',
        url: 'countries/' + id + '/states.json'
    }
    makeCall(options, callback);
}

/**

 * @API
 * Archive business info
 *@param {Function} callback - callback function
 */
exports.getSubCategory = function (callback) {
    var options = {
        method: 'get',
        url: 'sub_categories.json'
    }
    makeCall(options, callback);
}


/**
 * make call to server with respective parameters
 * @param options - options
 * @param params -  params
 * @param callback - callback function
 */
var makeCall = function (options, params, callback) {
    checkAuth(this.auth);
    if (arguments.length === 2) {
        callback = params;
        params = {};
    }
    var requestObj = {
        url: baseUrl + options.method,
        rejectUnauthorized: false,
        method: options.type,
        qs: this.auth,
        json: params
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
 * check if token and is present or not
 * @param token
 */
function checkAuth(config) {
    if (!config || !config.token || !config.email) {
        throw new Error('No access token or email found');
    }
}


module.exports = this;
