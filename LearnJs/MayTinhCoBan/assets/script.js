
//Hàm xử lý tính 
function tinh(operator){
    /**
     * Lấy giá trị người dùng nhập từ hai ô input và chuyển sang kiểu số thực (float).
     * .value lấy nội dung nhập vào của input
     * .parseFloat() chuyển string thành số, tránh lỗi khi tính toán.
     */
    let a = parseFloat(document.getElementById("num1").value);
    let b = parseFloat(document.getElementById("num2").value);
    let result;

    /**
     * Kiểm tra nếu người dùng không nhập số (NaN = Not a Number), thì báo lỗi.
     * .isNaN() là hàm kiểm tra giá trị không phải là số.
     */
    if(isNaN(a) || isNaN(b)){
        result = "Vui lòng nhập só hợp lệ";
    }
    //if else cơ bản để thực hiện phép tính
    else{
        if(operator === '+') result = a + b;
        else if(operator === '-') result = a - b;
        else if(operator === 'x') result = a * b;
        else if(operator === '/') {
            //Kiểm tra b 
            if(b === 0) result = "Không chia được cho 0";
            else result = (a / b).toFixed(2);
            //.toFixed(2): mục đích là làm tròn về 2 chữ số thập phân
            // Muốn chuyển thêm về dạng số thay vì dạng chuỗi thì bổ xung
            // result = parseFloat((a / b).toFixed(2));
        }
    }

    document.getElementById("result").innerText = result;
}

//Xóa các thành phần để làm lại thành phần mới
function reset(){
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("result").innerText = "";

}