// let arr = [11,22,33,44,55,22,99,55,22,99];

// function duplicate(){
    
//     let obj = {};

//     arr.forEach((e)=>{
//         if(obj[e]){
//             obj[e]++;
//         }
//         else{
//             obj[e] = 1;
//         }
//     })

//     return obj;

// }

// let ans = duplicate(arr);
// console.log(ans);


function doubleTrouble(arr) {
    // Check if the array is empty
    if (arr.length === 0) {
      return [];
    }
  
    // Initialize a new array with the first element
    const result = [arr[0]];
  
    // Iterate through the array starting from the second element
    for (let i = 1; i < arr.length; i++) {
      // Check if the current element is equal to the previous one
      if (arr[i] === arr[i - 1]) {
        // If yes, double only one of them and add to the result array
        result.push(arr[i] * 2);
      } else {
        // If no consecutive duplicate, double the current element and add to the result array
        result.push(arr[i] * 2);
      }
    }
  
    return result;
  }
  
  // Example usage
  const inputArray = [1, 2, 2, 3, 4, 4, 4, 5];
  const doubledArray = doubleTrouble(inputArray);
  
  console.log(doubledArray);
  