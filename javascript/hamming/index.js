// Define your Hamming class here.
// `npm test` to ensure the unit tests pass and
// your code meets all of the conditions.
// You may use ES6 or ES5 to solve.

Array.prototype.differences = function(compared_array) {
    difference_list = [];
    for (i = 0; i < this.length; i++) {
        if (this[i] != compared_array[i]) {
        difference_list.push(i);
        };
    };
    return difference_list.length
 };

function Hamming() {};

Hamming.prototype.compute = function(dna_string_1, dna_string_2) {
    dna_string_1 = dna_string_1.split("");
    dna_string_2 = dna_string_2.split("");
    if (dna_string_1.length != dna_string_2.length) { throw('DNA strands must be of equal length.') };
    //return total number of differences in compared lists
    return dna_string_1.differences(dna_string_2)
};

module.exports = Hamming;