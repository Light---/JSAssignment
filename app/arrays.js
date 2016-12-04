exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    for (var i = 0; i<arr.length; i++){
      if (arr[i] === item){
        return i;
      }
    }
    return -1;
  },

  sum: function(arr) {
    var answer = 0;

    for (var i = 0; i<arr.length; i++){
      answer = answer + arr[i];
    }

    return answer;

  },

  remove: function(arr, item) {
    var answer = [];

    for (var i = 0; i<arr.length; i++){
      if (arr[i] !== item){
        answer.push(arr[i]);
      }
    }

    return answer;
  },

  removeWithoutCopy: function(arr, item) {
    for (var i = 0; i<arr.length; i++){
      if (arr[i] === item){
        arr.splice(i, 1)
        i--;
      }
    }

    return arr;
  },

  append: function(arr, item) {
    var newArray = [];

    for (var i = 0; i<arr.length; i++){
      newArray.push(arr[i])
    }
    newArray.push(item);
    return newArray;
  },

  truncate: function(arr) {
    var newArray = [];

    for (var i = 0; i<arr.length-1; i++){
      newArray.push(arr[i])
    }

    return newArray;
  },

  prepend: function(arr, item) {
    var newArray = [item];

    for (var i = 0; i<arr.length; i++){
      newArray.push(arr[i])
    }
    return newArray;
  },

  curtail: function(arr) {

  },

  concat: function(arr1, arr2) {

  },

  insert: function(arr, item, index) {

  },

  count: function(arr, item) {

  },

  duplicates: function(arr) {

  },

  square: function(arr) {

  },

  findAllOccurrences: function(arr, target) {

  }
};