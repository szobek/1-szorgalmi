const arr = [11,5,19,16,3,17,22,1,33,69,185]
const sum = arr.reduce((i,acc)=>{
    return i+acc
},0)
let small=arr[0]
arr.forEach(i =>{
    if(i<small){
        small=i
    }
})
console.log(`A legkisebb szám: ${small}, a tömb összege: ${sum}`);