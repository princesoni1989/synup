/**
 * Created by root on 5/1/16.
 */

var request = require('request');
var async = require('async');
var baseUrl = 'http://ftv2-api.stg.synup.com/api/v2/';
var auth = config.synup;
var constants = require('../../constants/constants')


/**
 * @API
 *list business
 *@param {Function} callback - callback function
 */
exports.listBusiness = function (callback) {
  var listBusiness = {
    url: baseUrl + 'businesses.json',
    rejectUnauthorized: false,
    method: 'get',
    qs: auth
  }
  request(listBusiness, function (err, response, body) {
    if (!err && response.statusCode == 200) {
      try {
        var parsedBody = JSON.parse(body);
        return callback(null, parsedBody);
      } catch (e) {
        return callback(e, null);
      }
    } else {
      return callback(err || response, null);
    }
  });
}

/**
 * @API
 * get business information
 *@param {object} params - params
 *@param {Function} callback - callback function
 */
exports.infoBusiness = function (ids, type, callback) {
  var listings = [];
  async.each(ids, function (id, cb) {
    var infoBusiness = {
      url: baseUrl + 'businesses/' + id + ' .json',
      rejectUnauthorized: false,
      method: 'get',
      qs: auth
    }
    if(type === constants.MORE){
      infoBusiness.url += '?type=all';
    }
    request(infoBusiness, function (err, response, body) {
      if (!err && response.statusCode == 200) {
        try {
          var parsedBody = JSON.parse(body);
          if (parsedBody && parsedBody.success) {
            listings.push(parsedBody.result)
          }
          return cb();
        } catch (e) {
          log.error("Error in fetching listing with id " + id);
        }
      } else {
        return cb(err || response, null);
      }
    });
  }, function (err) {
    callback(err, listings)
  });

}

/**
 * @API
 * get listing for particular business
 * @param {object} params - params
 *@param {Function} callback - callback function
 */
exports.businessListing = function (id, callback) {
  var businessListing = {
    url: baseUrl + 'businesses/' + id + '/listings.json',
    rejectUnauthorized: false,
    method: 'get',
    qs: auth
  }
  request(businessListing, function (err, response, body) {
    if (!err && response.statusCode == 200) {
      try {
        var parsedBody = JSON.parse(body);
        return callback(null, parsedBody);
      } catch (e) {
        return callback(e, null);
      }
    } else {
      return callback(err || response, null);
    }
  });
}

/**
 * @API
 * get review for particular business
 * @param {object} params - params
 *@param {Function} callback - callback function
 */
exports.businessReview = function (id, callback) {
  var businessReview = {
    url: baseUrl + 'businesses/' + id + '/reviews.json',
    rejectUnauthorized: false,
    method: 'get',
    qs: auth
  }
  request(businessReview, function (err, response, body) {
    if (!err && response.statusCode == 200) {
      try {
        var parsedBody = JSON.parse(body);
        return callback(null, parsedBody);
      } catch (e) {
        return callback(e, null);
      }
    } else {
      return callback(err || response, null);
    }
  });
}

/**
 * @API
 * get ranking for particular business
 * @param {object} params - params
 *@param {Function} callback - callback function
 */
exports.businessRanking = function (id, callback) {
  var listBusiness = {
    url: baseUrl + 'businesses/ ' + id + '/rankings.json',
    rejectUnauthorized: false,
    method: 'get',
    qs: auth
  }
  request(listBusiness, function (err, response, body) {
    if (!err && response.statusCode == 200) {
      try {
        var parsedBody = JSON.parse(body);
        return callback(null, parsedBody);
      } catch (e) {
        return callback(e, null);
      }
    } else {
      return callback(err || response, null);
    }
  });
}

/**
 * @API
 * Archive business info
 *@param {object} params - params
 *@param {Function} callback - callback function
 */
exports.businessArchive = function (id, callback) {
  var listBusiness = {
    url: baseUrl + 'businesses/' + id + '/archive.json',
    rejectUnauthorized: false,
    method: 'get',
    qs: auth
  }
  request(listBusiness, function (err, response, body) {
    if (!err && response.statusCode == 200) {
      try {
        var parsedBody = JSON.parse(body);
        return callback(null, parsedBody);
      } catch (e) {
        return callback(e, null);
      }
    } else {
      return callback(err || response, null);
    }
  });
}

/**
 * @API
 * create business
 * @param {object} params - params
 *@param {Function} callback - callback function
 */
exports.createBusiness = function (params, callback) {
  var createBusiness = {
    url: baseUrl + 'businesses.json',
    rejectUnauthorized: false,
    method: 'post',
    qs: auth,
    json: {business: params}
  };
  console.log("final url------", JSON.stringify(createBusiness));
  request(createBusiness, function (err, response, body) {
    if (!err && response.statusCode == 200) {
      try {
        var parsedBody = (body);
        return callback(null, parsedBody);
      } catch (e) {
        return callback(e, null);
      }
    } else {
      return callback(err || response, null);
    }
  });
}

/**
 * @API
 * update business
 *@param {object} params - params
 *@param {Function} callback - callback function
 */
exports.updateBusiness = function (id, params, callback) {
  var updateBusiness = {
    url: baseUrl + 'businesses/' + id + '.json',
    rejectUnauthorized: false,
    method: 'get',
    qs: auth,
    body: params
  }
  request(updateBusiness, function (err, response, body) {
    if (!err && response.statusCode == 200) {
      try {
        var parsedBody = JSON.parse(body);
        return callback(null, parsedBody);
      } catch (e) {
        return callback(e, null);
      }
    } else {
      return callback(err || response, null);
    }
  });
}

/**
 * @API
 * Archive business info
 *@param {object} params - params
 *@param {Function} callback - callback function
 */
exports.getCountries = function (callback) {
  var countries = {
    url: baseUrl + '/countries.json',
    rejectUnauthorized: false,
    method: 'get',
    qs: auth
  }
  request(countries, function (err, response, body) {
    if (!err && response.statusCode == 200) {
      try {
        var parsedBody = JSON.parse(body);
        return callback(null, parsedBody);
      } catch (e) {
        return callback(e, null);
      }
    } else {
      return callback(err || response, null);
    }
  });
}

/**
 * @API
 * Archive business info
 *@param {object} params - params
 *@param {Function} callback - callback function
 */
exports.getState = function (id, callback) {
  var state = {
    url: baseUrl + 'countries/' + id + '/states.json',
    rejectUnauthorized: false,
    method: 'get',
    qs: auth
  }
  request(state, function (err, response, body) {
    if (!err && response.statusCode == 200) {
      try {
        var parsedBody = JSON.parse(body);
        return callback(null, parsedBody);
      } catch (e) {
        return callback(e, null);
      }
    } else {
      return callback(err || response, null);
    }
  });
}

/**

 * @API
 * Archive business info
 *@param {object} params - params
 *@param {Function} callback - callback function
 */
exports.getSubCategory = function (callback) {
  var subCategory = {
    url: baseUrl + 'sub_categories.json',
    rejectUnauthorized: false,
    method: 'get',
    qs: auth
  }
  request(subCategory, function (err, response, body) {
    if (!err && response.statusCode == 200) {
      try {
        var parsedBody = JSON.parse(body);
        return callback(null, parsedBody);
      } catch (e) {
        return callback(e, null);
      }
    } else {
      return callback(err || response, null);
    }
  });
}
