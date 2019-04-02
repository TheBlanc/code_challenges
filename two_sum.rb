# Given an array of integers, return indices of the two numbers such that they add up to a specific target.
#
# You may assume that each input would have exactly one solution, and you may not use the same element twice.
#
# Example:
#
# Given nums = [2, 7, 11, 15], target = 9,
#
# Because nums[0] + nums[1] = 2 + 7 = 9,
# return [0, 1].

def two_sum(numbers, target)
  numbers.each_with_index do |num, index|
    x = index + 1
    while x < numbers.length
      if num + numbers[x] == target
        return [index, x]
      end
      x += 1
    end
  end
end



numbersOne = [20, 2, 10, 14]
targetOne = 30

numbersTwo = [2, 4, 3, 14]
targetTwo = 7

numbersThree = [4, 2, 20, 3]
targetThree = 23

numbersFour = [40, 2, 9, 5]
targetFour = 45



pp "Given array #{numbersOne} and target sum #{targetOne}, the target sum is met with indices: #{two_sum(numbersOne, targetOne)}"
pp "Given array #{numbersTwo} and target sum #{targetTwo}, the target sum is met with indices: #{two_sum(numbersTwo, targetTwo)}"
pp "Given array #{numbersThree} and target sum #{targetThree}, the target sum is met with indices: #{two_sum(numbersThree, targetThree)}"
pp "Given array #{numbersFour} and target sum #{targetFour}, the target sum is met with indices: #{two_sum(numbersFour, targetFour)}"
