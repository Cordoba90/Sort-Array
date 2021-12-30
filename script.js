const arrCase1 = [false, 100, [24, 33], "💩", 55, "🥵", null, 45, "Sanyia", 66, "James", 23];
const arrCase2 = ["28", 100, 60, "Elamin", 55, ,"75"];

function sort(params) {
    let bosDizin = []
    for (let index = 0; index < params.length; index++) {
        return bosDizin [index] = params[index]
    }
  
}
console.log (sort(arrCase1))

function handleFilter(arr) {
    let diziNumaralar = [] 
    arr.forEach(element => { 
        if (typeof element === "number" ) {
            diziNumaralar.push (element)
            
        }

    }) 
    return diziNumaralar; 
}
console.log (handleFilter(arrCase1))
console.log (handleFilter(arrCase2))
console.log (handleFilter(arrCase1[2]))

function typeNumber(arr) {
    return arr.filter (item => typeof item === "number" ) 
    
 }
console.log (typeNumber(arrCase1))

function name(params) {
    
}
//const points = [40, 100, 1, 5, 25, 10];
//points.sort(function(a, b){return b-a});
//document.getElementById("demo").innerHTML = points;