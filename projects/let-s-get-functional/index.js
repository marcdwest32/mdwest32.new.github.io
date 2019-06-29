// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lodown-mdwest32');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 */

var maleCount = function(array) {
    return _.filter(array, function(customer) {
        return customer.gender === 'male';
    }).length;
};

// 2 FEMALE COUNT
// Objective: Find the number of female customers
// Input: Array
// Output: Number
// Constraints: use reduce

var femaleCount = function(array) {
    return _.reduce(array, function(acc, customer) {
        if (customer.gender === 'female') {
            return acc + 1;
        } else {
            return acc;
        }
    }, 0);
};


// 3 OLDEST CUSTOMER
// Objective: Find the oldest customer’s name
// Input: Array
// Output: String
// Constraints:

var oldestCustomer = function(array) {
    return _.reduce(array, function(acc, customer) {
        if (acc.age > customer.age) {
            return acc;
        } else {
            return customer;
        }
    }).name;
};


// 4: youngestCustomer
// Objective: Find the youngest customer’s name
// Input: Array
// Output: String
// Constraints:

 var youngestCustomer = function(array) {
     return _.reduce(array, function(acc, customer) {
         if (acc.age < customer.age) {
             return acc;
         } else {
             return customer;
         }
     }).name;
 };


// 5: averageBalance
// Objective: Find the average balance of all customers
// Input: Array
// Output: Number
// Constraints:

var averageBalance = function(array) {
    return _.reduce(array, function(acc, customer) {
       if (customer.balance) {
           return acc + parseFloat(customer.balance.replace(/[$-,]/g, ''));
       } else {
           return acc;
       }
    }, 0) / array.length;
};


// 6: firstLetterCount
// Objective: Find how many customer’s names begin with a given letter
// Input: Array, Letter
// Output: Number
// Constraints:

var firstLetterCount = (array, alpha) => {
    return _.reduce(array, function(acc, customer) {
        if (customer.name[0].toLowerCase() === alpha.toLowerCase()) {
            return acc + 1;
        } else {
            return acc;
        }
    }, 0);    
}


// 7: friendFirstLetterCount
// Objective: Find how many friends of a given customer have names that start with a given letter
// Input: Array, Customer, Letter
// Output: Number
// Constraints:

var friendFirstLetterCount = (array, customer, alpha) => {
    let custObj;
    _.each(array, function(person, i, array) {
       if (person.name.toLowerCase() === customer.toLowerCase()) {
           custObj = person;
       }
   })
   return _.reduce(custObj.friends, function(acc, friend, i) {
       if (friend.name[0].toLowerCase() === alpha.toLowerCase()) {
           return acc + 1;
       } else {
           return acc;
       }
   }, 0);
}


// 8: friendsCount
// Objective: Find the customers’ names that have a given customer’s name in their friends list
// Input: Array, Name
// Output: Array
// Constraints:

var friendsCount = (array, friend) => {
    return _.reduce(array, function(result, person, i) {
        if (_.contains(_.pluck(person.friends, 'name'), friend)) {
            result.push(person.name);
        }
        return result;
    }, [])
};


// 9: topThreeTags
// Objective: Find the three most common tags among all customers’ associated tags
// Input: Array
// Output: Array
// Constraints:
var topThreeTags = (array) => {
    let tagCount = _.reduce(array, function(countObj, customer, i) {
        _.each(customer.tags, function(tag, i, tagArray) {
            if (countObj.hasOwnProperty(tag)) {
                countObj[tag] = countObj[tag] + 1;
            } else {
                countObj[tag] = 1;
            }
        })
        return countObj;
    }, {})
    let mapArray = _.map(tagCount, function(count, tag) {
        return [tag, count];
    })
    let sortArray = mapArray.sort(function(x, y) {
        return y[1] - x[1];
    })
    let topThree = [];
    topThree.push(sortArray[0][0]);
    topThree.push(sortArray[1][0]);
    topThree.push(sortArray[2][0]);
    return topThree;
};


// 10: genderCount
// Objective: Create a summary of genders, the output should be:
// {
//     male: 3,
//     female: 4,
//     transgender: 1
// }
// Input: Array
// Output: Object
// Constraints: Use reduce
var genderCount = (array) => {
    return _.reduce(array, (acc, customer, i) => {
        if (!acc.male) {
            acc.male = 0;
        }
        if (!acc.female) {
            acc.female = 0;
        }
        if (!acc.transgender) {
            acc.transgender = 0;
        }
        if (customer.gender === 'male') {
            acc.male += 1;
        } else if (customer.gender === 'female') {
            acc.female += 1;
        } else {
            acc.transgender += 1;
        }
        return acc;
    }, {})
};








//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
