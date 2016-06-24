# Synup Client Library for Node.js
 It is used to tracks hundreds of thousands of business profiles, monitor millions of interactions to provide businesses with automated marketing as well as insights that they would otherwise not get.
 
This module provide complete support to synup rest api calls. Synup tracks hundreds of thousands of business profiles, monitor millions of interactions to provide businesses with automated marketing as well as insights that they would otherwise not get
<br/>
Complete api doc can be found [here](http://v2.synup.com/api-docs/v2/).

```javascript
var synupModule = require('../index');
var synup = new synupModule({
    email: 'xyz.com',
    token: 'xxxxxxxx'
});

/**
 * list business
 */
synup.listBusiness(function (err, result) {
    if (err) {
        console.log("Error : ", err)
    } else {
        console.log("Result : ", result)
    }

});
```

## Installation

`npm install sypup  //install locally`

`npm install -g sypup  //install globally`

`npm install sypup --save  //install locally and save to package json`

## Quick Start

You will need valid Setcronjob Token and email id to work with this module, You can obtain token after signing up [here](http://synup.com/).


## How to use different Api:

```javascript
var synupModule = require('../index');
var synup = new synupModule({
    email: 'xyz.com',
    token: 'xxxxxxxx'
});
```

```javascript
/**
 * list business
 */
synup.listBusiness(function (err, result) {
    printResult(err, result);

})
```
```javascript
/**
 * get information for a business
 */
synup.infoBusiness('xxx', true, function (err, result) {
    printResult(err, result);

})
```

```javascript

/**
 * get listing of particular business
 */
synup.businessListing('xxx', function (err, result) {
    printResult(err, result);

})

```

```javascript
/**
 * get reviews of particular business
 */
synup.businessReview('xxx', function (err, result) {
    printResult(err, result);

})

```


```javascript
/**
 * get ranking of particular business
 */
synup.businessRanking('xxx', function (err, result) {
    printResult(err, result);

})

```


```javascript

/**
 * archive particular business
 */
synup.businessArchive('xxx', function (err, result) {
    printResult(err, result);

})
```


```javascript
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
```


```javascript

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
```


```javascript

/**
 * get list of supported countries
 */
synup.getCountries(function (err, result) {
    printResult(err, result);

})
```

```javascript

/**
 * get states
 */
synup.getState('xxx', function (err, result) {
    printResult(err, result);

})

```

```javascript

/**
 * get subcategory
 */
synup.getSubCategory(function (err, result) {
    printResult(err, result);

})

```


## Examples

* [example](https://github.com/princesoni1989/synup/blob/master/example/example.js)

## Contributors

Originally authored by  [@princesoni1989](https://github.com/princesoni1989)

## LICENSE

sypup is released under the ISC License Copyright (c) 2016 Prince Soni

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
