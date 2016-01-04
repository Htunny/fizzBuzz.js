describe("fizzBuzz", function() {

  it("should return Fizz if a number given is divisible by 3 ", function() {
    expect(fizzBuzz(9)).toEqual("Fizz")
  })

  it("should not return Fizz if a number given is not divisible by 3 ", function() {
    expect(fizzBuzz(10)).not.toEqual("Fizz")
  })

  it("should return Buzz if a number given is divisible by 5 ", function() {
    expect(fizzBuzz(10)).toEqual("Buzz")
  })

  it("should not return Buzz if a number given is not divisible by 5 ", function() {
    expect(fizzBuzz(11)).not.toEqual("Buzz")
  })

  it("should return FizzBuzz if a number given is divisible by 3 & 5 ", function() {
    expect(fizzBuzz(15)).toEqual("FizzBuzz")
  })

  it("should not return FizzBuzz if a number given is not divisible by 3 & 5 ", function() {
    expect(fizzBuzz(14)).not.toEqual("FizzBuzz")
  })
});
