(function(){
    "use strict";

    var aPeople = ['Milly', "Jimmy", "Billy", "Jeffrey"];
    console.log(aPeople.length);
    console.log(aPeople[0]);
    console.log(aPeople[1]);
    console.log(aPeople[2]);
    console.log(aPeople[3]);

    // TODO: Create an array of 4 people's names using literal array notation, in a variable called 'names'.
    // TODO: Create a log statement that will log the number of elements in the names array.
    // TODO: Create log statements that will print each of the names array elements individually.
})();

            // element is the shape name
            // index is the iterator
            // array is the shapes array itself
        var aPeople = ['Milly', "Jimmy", "Billy", "Jeffrey"];

        aPeople.forEach(function (element, index, array) {
            console.log('The shape at index ' + index + ' is: ' + element);
        });
