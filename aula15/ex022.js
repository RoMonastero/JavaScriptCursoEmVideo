let num = [4, 5, 9, 3, 7]

console.log(num.sort())
/*
for (let index = 0; index < num.length; index++) {
    console.log(num[index])
    
} 
*/
for (const index in num) {
    console.log(num[index])
}