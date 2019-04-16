# Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.
#
# Example:
#
# Input: 121
# Output: true

def palindrome?(num)
  revNum = num.to_s.reverse.to_i
  if num == revNum
    return true
  else
    return false
  end
end

pp "Is 123 a palindrome? #{palindrome?(123)}"
pp "Is 1001 a palindrome? #{palindrome?(1001)}"
