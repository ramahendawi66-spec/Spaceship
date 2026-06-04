// StringCalculator.js
function StringCalculator() {}
StringCalculator.prototype.add = function(string_numbers) {
	
    if (string_numbers === '') return 0;

    return string_numbers
        .split(',')
        .reduce(function(sum, n) {
            return sum + parseInt(n);
        }, 0);
        
};
