

// 1) Task

function reverseArray(arr) {

    let reversedArray = [];
    for (let i = 0; i < arr.length; i++) {
      reversedArray.unshift(arr[i]);
    }
  
    return reversedArray;
  }
  
  console.log(reverseArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
  console.log(reverseArray(["a", "b", "c"])); // ["c", "b", "a"]




  // 2) Task

  function removeDuplicates(arr) {
    
    let uniqueArray = [];
    for (let i = 0; i < arr.length; i++) {
      if (!uniqueArray.includes(arr[i])) {
        uniqueArray.push(arr[i]);
      }
    }
  
    return uniqueArray;
  }
  
  console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
  console.log(removeDuplicates(["a", "b", "a", "c", "b"])); // ["a", "b", "c"]


  // 3) Task


  function containsElement(arr, element) {
    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === element) {
        return true; 
      }
    }
  
    return false; 
  }
  
 
  console.log(containsElement([1, 2, 3, 4, 5], 3)); // true
  console.log(containsElement([1, 2, 3, 4, 5], 6)); // false
  console.log(containsElement(["a", "b", "c"], "b")); // true
  console.log(containsElement(["a", "b", "c"], "z")); // false