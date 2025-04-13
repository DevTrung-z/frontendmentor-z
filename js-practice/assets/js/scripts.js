

let strs =["Bannaa","akjnda","ba","akha"];

let loc =[];


for(let str of strs){

    let chart = "";

    for(let i = 0; i < str.length; i++){
        let code = str.charCodeAt(i);

        if(i === 0 && code >= 97 && code <= 122){
            chart += String.fromCharCode(code - 32);
        }else{
            chart +=str[i];
        }
    }
    loc.push(chart);
}

console.log(loc)