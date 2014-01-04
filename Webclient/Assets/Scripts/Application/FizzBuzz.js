var Application;
(function (Application) {
    var FizzBuzz = (function () {
        function FizzBuzz() {
        }
        FizzBuzz.prototype.DoIt = function (value) {
            if (this.isNotDivisibleByThreeOrFive(value))
                return value.toString();

            var result = "";
            if (this.isDividableByThree(value))
                result += "Fizz";
            if (this.isDividableByFive(value))
                result += "Buzz";

            return result;
        };

        FizzBuzz.prototype.isNotDivisibleByThreeOrFive = function (value) {
            return !this.isDividableByThree(value) && !this.isDividableByFive(value);
        };

        FizzBuzz.prototype.isDividableByThree = function (value) {
            return value % 3 == 0;
        };

        FizzBuzz.prototype.isDividableByFive = function (value) {
            return value % 5 == 0;
        };
        return FizzBuzz;
    })();
    Application.FizzBuzz = FizzBuzz;
})(Application || (Application = {}));
//# sourceMappingURL=FizzBuzz.js.map
