let arr = [10,20,30,60,-54,67];

function sum(arr){
    let ans = 0;
    for(let i = 0;i<arr.length;i++){
        if(arr[i]>0){
            ans+=arr[i];
        }
        else{
            return ans;
        }
    }
    return ans;
}

// console.log(sum(arr));

// function repeat(){
//     work_hard();
//     love_yourself();
//     console.log("hello");
//     repeat();
// }

// // repeat();