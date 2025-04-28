
function kiemtra(){
    let a =  parseInt(document.getElementById("so").value);
    if(isNaN(a)){
        document.getElementById("kq").innerText = "Nhap lai so";
        return;
    }
    if(a % 2 === 0){
        document.getElementById("kq").innerText = "Chẵn";
        return;
    }
    else{
        document.getElementById("kq").innerText = "Lẻ";
        return;
    }
}


function tinhTong(){
    let x = parseInt(document.getElementById("n").value);
    let tong = 0;
    if(isNaN(x)){
        document.getElementById("tong").innerText = "Nhap lai so";
        return;
    }
    
}