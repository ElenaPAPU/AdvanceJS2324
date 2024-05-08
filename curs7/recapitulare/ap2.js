// 2)Functie parametru palindrom

// let str="capac"; true
// let str2="mere"; false

function palindrom(str){
    let cuvant2 = reverseString(str);
    if(str === cuvant2){
        return true;
    }
    else{
        return false;
    }
}
let cuvant='ana';
console.log(palindrom(cuvant));
