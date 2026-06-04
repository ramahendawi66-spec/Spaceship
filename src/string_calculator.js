// StringCalculator.js
function StringCalculator() {}
StringCalculator.prototype.add = function(string_numbers) {
	
    if (string_numbers === '') {
        return 0;
    }

    return parseInt(string_numbers);
};
