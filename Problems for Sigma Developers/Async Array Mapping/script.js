 function Double(num){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(num*2)
        },500);
    })
}

async function asyncArrayMapping(numbers) {
    const resultArray = [];
  
    for (const number of numbers) {
      const multipliedValue = await Double(number);
      resultArray.push(multipliedValue);
    }
  
    return resultArray;
  }

let arr = [2,3,4,5,6];

asyncArrayMapping(arr).then((maoArray)=>{
    console.log(maoArray);
}).catch(error=>{
    console.log("erroe",error);
    
})