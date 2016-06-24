var synupModule = require('../index');
var synup = new synupModule({
    email: 'xyz.com',
    token: 'xxxxxxxx'
});

/**
 * list business
 */
synup.listBusiness(function (err, result) {
    printResult(err, result);

})

/**
 * get information for a business
 */
synup.infoBusiness('xxx', true, function (err, result) {
    printResult(err, result);

})

/**
 * get listing of particular business
 */
synup.businessListing('xxx', function (err, result) {
    printResult(err, result);

})

/**
 * get reviews of particular business
 */
synup.businessReview('xxx', function (err, result) {
    printResult(err, result);

})

/**
 * get ranking of particular business
 */
synup.businessRanking('xxx', function (err, result) {
    printResult(err, result);

})

/**
 * archive particular business
 */
synup.businessArchive('xxx', function (err, result) {
    printResult(err, result);

})

/**
 * create business
 */
var params = {
    "name": "The Nugget Spot",
    "street": "230 East 14th Street",
    "city": "New York",
    "state_id": "3537",
    "country_id": "233",
    "postal_code": "10003",
    "phone": "6464227346",
    "biz_url": "http://www.thenuggetspot.com/",
    "sub_category_id": "383",
    "year_of_inc": "1994",
    "description": "Inspired by an iconic childhood favorite, The Nugget Spot is dedicated ...",
    "storecode": "NS00123",
    "location_biz_hours_attributes": [
        {"day": "Monday", "holiday": true, "start_time": "05:00 am", "end_time": "05:30 pm"},
        {"day": "Tuesday", "holiday": false, "start_time": "09:00 am", "end_time": "08:00 pm"}
    ],
    "facebook_url": "https://facebook.com/thenuggetspot",
    "googleplus_url": "https://plus.google.com/thenuggetspot",
    "linkedin_url": "https://linkedin.com/us/thenuggetspot",
    "twitter_url": "https://twitter.com/thenuggetspot",
    "biz_logo_link": "http://thenuggetspot.com/images/slideshow_images/home-teaser2.jpg",
    "location_photos_attributes": [
        {"photo": "http://thenuggetspot.com/images/slideshow_images/home-teaser4.jpg"},
        {"photo": "http://thenuggetspot.com/images/slideshow_images/home-teaser1.jpg"}
    ],
    "videos_attributes": [
        {"link": "https://www.youtube.com/watch?v=2i_Cnfjv4Jw"},
        {"link": "https://www.youtube.com/watch?v=ABCCnfjv4Jw"}
    ],
    "payment_methods_attributes": [
        {"name": "Visa", "is_accepted": true},
        {"name": "Master Card", "is_accepted": true}
    ],
    "owner_email": "admin@thenuggetspot.com",
    "owner_first_name": "Bryan",
    "owner_last_name": "Adams",
    "tagline": "Eat in or take out!",
    "additional_info": "We've designed 'The Spot' to be ...."

}
synup.createBusiness(params, function (err, result) {
    printResult(err, result);

})

/**
 * update business
 */
var params = {
    "name": "Saravanaa Bhavan",
    "phone": "408-616-5577"
}
synup.updateBusiness('xxx', params, function (err, result) {
    printResult(err, result);

});

/**
 * get list of supported countries
 */
synup.getCountries(function (err, result) {
    printResult(err, result);

})

/**
 * get states
 */
synup.getState('xxx', function (err, result) {
    printResult(err, result);

})


/**
 * get subcategory
 */
synup.getSubCategory(function (err, result) {
    printResult(err, result);

})

/**
 *
 * @param err
 * @param result
 */
function printResult(err, result) {
    if (err) {
        console.log("Error : ", err)
    } else {
        console.log("Result : ", result)
    }
}
