// Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

// ("Hello", 'o')  =>  1
// ("Hello", 'l')  =>  2
// ("", 'z')       =>  0
// Notes
// The first argument can be an empty string
// In languages with no distinct character data type, the second argument will be a string of length 1

// https://www.codewars.com/kata/5865918c6b569962950002a1

#include <stddef.h>

size_t str_count(const char *str, char letter) {
  size_t count = 0;
  
  while(*str) {
    if(*str == letter) {
      count++;
    }
    str++;
  }
  return count;
}