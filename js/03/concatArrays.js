
function concatArrays() {
    const concatArr = ['x'];
    const charcterArr2= ['cica', 'mica', 'nyuszi', 'cica'];
    console.log([...concatArr, ...charcterArr2]);
    
    const uniqChars = [...new Set (charcterArr2)];
    console.log(uniqChars);
         
    let result = charcterArr2.replace(/\s/g,"");
    
    
   
    return new charcterArr2;
}

function concatArrays1() {
    const concatArr = ['x'];
const charcterArr2= ['cica', 'mica', 'nyuszi', 'cica'];
console.log([...concatArr, ...concatArr2]);
return concatArr + concatArr2;

}

function concatArrays2() {

    const concatArr = ['x'];
const charcterArr2= ['cica', 'mica', 'nyuszi', 'cica'];
const uniqChars = [...new Set (charcterArr2)];
console.log(uniqChars);
return concatArrays2 - uniqChars;

}

function concatArrays3() {
    const concatArr = ['x'];
    const charcterArr2= ['cica', 'mica', 'nyuszi', 'cica'];
    let result = charcterArr3.replace(/\s/g,"");
   
return charcterArr2-result;
};

export default concatArrays;