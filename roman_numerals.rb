# Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
#
# Symbol       Value
# I             1
# V             5
# X             10
# L             50
# C             100
# D             500
# M             1000
# For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.
#
# Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:
#
# I can be placed before V (5) and X (10) to make 4 and 9.
# X can be placed before L (50) and C (100) to make 40 and 90.
# C can be placed before D (500) and M (1000) to make 400 and 900.
# Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.
#
# Example 1:
#
# Input: "III"
# Output: 3
# Example 2:
#
# Input: "IV"
# Output: 4
# Example 3:
#
# Input: "IX"
# Output: 9
# Example 4:
#
# Input: "LVIII"
# Output: 58
# Explanation: L = 50, V= 5, III = 3.
# Example 5:
#
# Input: "MCMXCIV"
# Output: 1994
# Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

# -------------------------------------------------------


def romanNumerator(romanString)
  charArray = romanString.chars
  romanSum = 0

  charArray.each_with_index do |char, index|

    nextChar = charArray[index + 1]
    charCombo = []
    charCombo << charArray[index]
    charCombo << charArray[index+1]
    charCombo = charCombo.join.upcase


    if charCombo == "IV" || charCombo == "IX" || charCombo == "XL" || charCombo == "XC" || charCombo == "CD" || charCombo == "CM"
      if charCombo == "IV"
        romanSum += 4
        charArray[index+1] = 0
      elsif charCombo == "IX"
        romanSum += 9
        charArray[index+1] = 0
      elsif charCombo == "XL"
        romanSum += 40
        charArray[index+1] = 0
      elsif charCombo == "XC"
        romanSum += 90
        charArray[index+1] = 0
      elsif charCombo == "CD"
        romanSum += 400
        charArray[index+1] = 0
      elsif charCombo == "CM"
        romanSum += 900
        charArray[index+1] = 0
      end
    elsif char == "I"
      romanSum += 1
    elsif char == "V"
      romanSum += 5
    elsif char == "X"
      romanSum += 10
    elsif char == "L"
      romanSum += 50
    elsif char == "C"
      romanSum += 100
    elsif char == "D"
      romanSum += 500
    elsif char == "M"
      romanSum += 1000
    end
  end

  return romanSum

end

test1 = "MCMLXXXIV"
pp "MCMLXXXIV = #{romanNumerator(test1)}"

test2 = "MCMXCIV"
pp "MCMXCIV = #{romanNumerator(test2)}"

test3 = "MMXIX"
pp "MMXIX = #{romanNumerator(test3)}"

test4 = "MCMLXXXIX"
pp "MCMLXXXIX = #{romanNumerator(test4)}"






# Go through each letter and determine if it has the valid chatacters
# Determine if the string has any RN combos such as IV or XC
# Add the combo cases
# Remove those characters from the string once they are added to the sum
# Once the cases are added, go through the other characters and add them to the sum and delete once added
# Return sum
