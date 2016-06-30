var request = require('request');
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
Synup.prototype.listBusiness = function (callback) {
    var options = {
        method: 'get',
        url: 'businesses.json'
    }
    makeCall(options, this.auth, callback);
}

/**
 * @API
 * get business information
 *@param {string} params - id
 *@param {boolean} params - details
 *@param {Function} callback - callback function
 */
Synup.prototype.infoBusiness = function (id, details, callback) {
    var url = 'businesses/' + id + '.json';
    if (details) {
        url += '?type=all';
    }
    var options = {
        method: 'get',
        url: url
    }
    makeCall(options, this.auth, callback);

}

/**
 * @API
 * get listing for particular business
 * @param {string} params - id
 *@param {Function} callback - callback function
 */
Synup.prototype.businessListing = function (id, callback) {
    var options = {
        method: 'get',
        url: 'businesses/' + id + '/listings.json'
    }
    makeCall(options, this.auth, callback);
}

/**
 * @API
 * get review for particular business
 * @param {string} params - id
 *@param {Function} callback - callback function
 */
Synup.prototype.businessReview = function (id, callback) {
    var options = {
        method: 'get',
        url: 'businesses/' + id + '/listings.json'
    }
    makeCall(options, this.auth, callback);
}

/**
 * @API
 * get ranking for particular business
 * @param {string} params - id
 *@param {Function} callback - callback function
 */
Synup.prototype.businessRanking = function (id, callback) {
    var options = {
        method: 'get',
        url: 'businesses/' + id + '/ranking.json'
    }
    makeCall(options, this.auth, callback);
}

/**
 * @API
 * Archive business info
 *@param {string} params - id
 *@param {Function} callback - callback function
 */
Synup.prototype.businessArchive = function (id, callback) {
    var options = {
        method: 'post',
        url: 'businesses/' + id + '/archive.json'
    }
    makeCall(options, this.auth, callback);
}

/**
 * @API
 * create business
 * @param {object} params - params
 *@param {Function} callback - callback function
 */
Synup.prototype.createBusiness = function (params, callback) {
    var options = {
        method: 'post',
        url: 'businesses.json'
    }
    makeCall(options, this.auth, {business: params}, callback);
}

/**
 * @API
 * update business
 *@param {string} params - id
 *@param {object} params - params
 *@param {Function} callback - callback function
 */
Synup.prototype.updateBusiness = function (id, params, callback) {
    var options = {
        method: 'put',
        url: 'businesses/' + id + '.json'
    }
    makeCall(options, this.auth, {business: params}, callback);
}

/**
 * @API
 * Archive business info
 *@param {Function} callback - callback function
 */
Synup.prototype.getCountries = function (callback) {
    var options = {
        method: 'get',
        url: 'countries.json'
    }
    makeCall(options, this.auth, callback);
}

/**
 * @API
 * Archive business info
 *@param {string} params - id
 *@param {Function} callback - callback function
 */
Synup.prototype.getState = function (id, callback) {
    var options = {
        method: 'get',
        url: 'countries/' + id + '/states.json'
    }
    makeCall(options, this.auth, callback);
}

/**

 * @API
 * Archive business info
 *@param {Function} callback - callback function
 */
Synup.prototype.getSubCategory = function (callback) {
    var options = {
        method: 'get',
        url: 'sub_categories.json'
    }
    makeCall(options, this.auth, callback);
}


/**
 * make call to server with respective parameters
 * @param options - options
 * @param params -  params
 * @param callback - callback function
 */
var makeCall = function (options, auth, params, callback) {
    checkAuth(auth);
    if (arguments.length === 3) {
        callback = params;
        params = null;
    }
    var requestObj = {
        url: baseUrl + options.url,
        rejectUnauthorized: false,
        method: options.method,
        qs: auth
    }
    if(params){
        requestObj.json = params;
    }
    request(requestObj, function (err, response, body) {
        if (!err && response.statusCode === 200) {
            try {
                var result = JSON.parse(body);
                return callback(null, result);
            } catch (e) {
                return callback(null, result);
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
    if (!config || !config.auth_token || !config.user_email) {
        throw new Error('No access token or email found');
    }
}


module.exports = Synup;
