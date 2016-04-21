/**
 * This is where you have to code.
 *
 * See javadoc and associated unit tests to understand what is expected
 *
 * @author tiry
 *
 */
var Tester = {
  /**
   * input will be a string, but it may not have a file extension. return the file
   * extension (with no period) if it has one, otherwise null
   *
   * @param file
   * @return null if input is null or filename has no extension and the
   *         extension without the period otherwise
   */
    getFileNameExtension: function (file) {
        var ext = file.split(".").length == 1 ? null : file.split('.').pop();

        return ext;
  },

  /**
   * return the longest string contained inside the input array
   *
   * @param values input Array of values
   * @return null if input is null and the longest string otherwise
   */
  getLongestString: function (values) {
      var newValues = [];

      for (var i = 0; i < values.length; i++){
          newValues.push(values.sort(function (a, b) { return b.length - a.length; })[i]);
      }

      return newValues;
  },

  /**
   * Returns true is both arrays contains the same values
   *
   * @param arr1 first Array to test
   * @param arr2 second Array to test
   * @return true if both arrays contains the same values
   */
  areArraysEquals: function (arr1, arr2) {
      var temp = new Array(),
          arrEq = true;

      if ((!arr1[0]) || (!arr2[0])) { // If either is not an array
          arrEq = false;
      }
      if (array1.length != array2.length) {
          arrEq = false;
      }
      // Put all the elements from array1 into a "tagged" array
      for (var i = 0; i < arr1.length; i++) {
          key = (typeof arr1[i]) + "~" + arr1[i];
          // Use "typeof" so a number 1 isn't equal to a string "1".
          if (temp[key]) { temp[key]++; } else { temp[key] = 1; }
          // temp[key] = # of occurrences of the value (so an element could appear multiple times)
      }
      // Go through array2 - if same tag missing in "tagged" array, not equal
      for (var i = 0; i < arr2.length; i++) {
          key = (typeof arr2[i]) + "~" + arr2[i];
          if (temp[key]) {
              if (temp[key] == 0) { return false; } else { temp[key]--; }
              // Subtract to keep track of # of appearances in array2
          } else { // Key didn't appear in array1, arrays are not equal.
              arrEq = false;
              break;
          }
      }

      return arrEq;
  },

  /**
   * Compress the input string with a very dummy algorithm : repeated letters
   * are replaced by {n}{letter} where n is the number of repetition and
   * {letter} is the letter. n must be superior to 1 (otherwise, simply output
   * the letter)
   *
   * @param str the input string that can only contains letters
   * @return the compressed String or null if the input is null
   */
  getCompressedString: function (str) {

    return null;
  },

  /**
   * Sort the input array of string based on lexicographic order of the
   * corresponding compressed string
   *
   * @param arr the Array to sort
   * @return the sorted array
   */
  getSortedArray: function (arr) {
      var sortArr = arr.sort();

      return sortArr;
  }
};
