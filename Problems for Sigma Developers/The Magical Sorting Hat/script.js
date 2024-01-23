let names = ['love','ajju','chandu','abhishek','rajnish','ankit','jannyfar','rohitagrval','jayrajput',
            'aaaaaaaaaaaaaaaa','ggggggggggggggg','tahsgjs'
]

let ans = [];

names.forEach((name)=>{
    // console.log(name.length);

    if(name.length<6){
        ans.push("Gryffindor")
    }
    else if(name.length<8){
        ans.push("Hufflepuff")
    }
    else if(name.length<12){
        ans.push("Ravenclaw");
    }
    else if(name.length>=12){
        ans.push("Slytherin");
    }
})

ans.forEach((e)=>{
    console.log(`${e.length} = ${e}`);
    
})
