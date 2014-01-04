/// <reference path="../Application/FizzBuzz.js" />

describe("Javascript Tests", function () {

    describe("When performing a FizzBuzz calculation", function () {
        var fizzbuzz;
    
        beforeEach(function () {
            fizzbuzz = new Application.FizzBuzz();
        });

        describe("and the value is not divisible by 3 or 5", function () {

            it("returns 1 as 1", function () {
                var result = fizzbuzz.DoIt(1);
                expect(result).toBe("1");
            });

            it("returns 2 as 2", function () {
                var result = fizzbuzz.DoIt(2);
                expect(result).toBe("2");
            });

            it("returns 4 as 4", function () {
                var result = fizzbuzz.DoIt(4);
                expect(result).toBe("4");
            });

        });

        describe("and the value is divisible by only 3", function () {
        
            it("returns 3 as Fizz", function () {
                var result = fizzbuzz.DoIt(3);
                expect(result).toBe("Fizz");
            });

            it("returns 6 as Fizz", function () {
                var result = fizzbuzz.DoIt(6);
                expect(result).toBe("Fizz");
            });

        });

        describe("and the value is divisible by only 5", function () {

            it("returns 5 as Buzz", function () {
                var result = fizzbuzz.DoIt(5);
                expect(result).toBe("Buzz");
            });

            it("returns 10 as Buzz", function () {
                var result = fizzbuzz.DoIt(10);
                expect(result).toBe("Buzz");
            });

        });


        describe("and the value is divisible by both 3 and 5", function () {

            it("returns 15 as FizzBuzz", function () {
                var result = fizzbuzz.DoIt(15);
                expect(result).toBe("FizzBuzz");
            });

            it("returns 30 as FizzBuzz", function () {
                var result = fizzbuzz.DoIt(30);
                expect(result).toBe("FizzBuzz");
            });

        });
    });

});