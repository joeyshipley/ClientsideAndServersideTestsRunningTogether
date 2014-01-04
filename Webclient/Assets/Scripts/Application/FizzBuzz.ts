module Application
{
    export class FizzBuzz
    {
        public DoIt(value:number)
        {
            if (this.isNotDivisibleByThreeOrFive(value))
                return value.toString();

            var result = "";
            if (this.isDividableByThree(value))
                result += "Fizz";
            if (this.isDividableByFive(value))
                result += "Buzz";

            return result;
        }

        private isNotDivisibleByThreeOrFive(value)
        {
            return !this.isDividableByThree(value) && !this.isDividableByFive(value);
        }

        private isDividableByThree(value)
        {
            return value % 3 == 0;
        }

        private isDividableByFive(value)
        {
            return value % 5 == 0;
        }
    }
}