let letter = "b";
let letters = ["a", "b", "c", "d", "e"];
letters.forEach(element => {
    if(element.indexOf(letter) == 0) {
        console.log(element)
    }
})