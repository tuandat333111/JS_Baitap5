/**
 * Bài tập 1:
 * Mô hình 3 khối:
 * + Đầu vào:
 * Nhập điểm thi của hội đồng, điểm thi 3 môn, nhập khu vực ưu tiên (nếu không có nhập X), nhập đối tượng ưu tiên (nếu không có nhập X)
 * + Xử lí:
 * Tính tổng điểm thi 3 môn, nếu có điểm ưu tiên khu vực thì cộng thêm vào:
 * - Khu vực A: + 2 điểm 
 * - Khu vực B: + 1 điểm
 * - Khu vực C: + 0.5 điểm
 * Nếu có thêm điểm đối tượng thì cộng thêm vào:
 * - Đối tượng 1: + 2.5 điểm
 * - Đối tượng 2: + 1.5 điểm 
 * - Đối tượng 3: + 1 điểm
 * So sánh nếu điểm tổng lớn điểm hội đồng thì đậu, nếu nhỏ hơn thì rớt.
 * + Đầu ra:
 * Xuất ra màn hình ngày kết quả đậu hay rớt:
 */
document.getElementById("btnCheckScore").onclick=function(){
    var score=document.getElementById("score").value*1;
    var score1=document.getElementById("score1").value*1;
    var score2=document.getElementById("score2").value*1;
    var score3=document.getElementById("score3").value*1;
    var area=document.getElementById("area").value;
    var object=document.getElementById("object").value*1;
    var total=score1+score2+score3;
    var resultCheckScore="";
    switch (area){
        case "X":
        break;
        case "A":
            total+=2;
        break;
        case "B":
            total+=1;
        break;
        case "C":
            total+=0.5;
        break;
    }
    switch (object){
        case "X":
        break;
        case 1:
            total+=2.5;
        break;
        case 2:
            total+=1.5;
        break;
        case 3:
            total+=1;
        break;
    }
    if (total>=score){
        resultCheckScore="Tổng điểm đạt được: "+total+"->"+"Đậu";
    }
    else{
        resultCheckScore="Tổng điểm đạt được: "+total+"->"+"Rớt";
    }
    document.getElementById("resultCheckScore").innerHTML=resultCheckScore;
}

/**
 * Bài tập 2:
 * Mô hình 3 khối:
 * + Đầu vào:
 * Nhập tên người sử dụng
 * Nhập số điện tiêu thụ (KW): amountKw
 * + Xử lí:
 * Tính tổng tiền lũy tiến theo công thức: 
 * Nếu số điện <=50KW: totalmoney=số điện*500;
 * Nếu 50KW < số điện <=100KW: totalmoney=50*500+(số điện-50)*650;
 * Nếu 100 < số điện <=200KW: totalmoney=50*500+50*650+(số điện-100)*850;
 * Nếu 200 < số điện <=350KW:totalmoney=50*500+50*650+100*850+(số điện-200)*1100;
 * Nếu số điện >350: totalmoney=50*500+50*650+100*850+150*1100+(số điện-350)*1300;
 * 
 * + Đầu ra:
 * Xuất màn hình kết quả tổng tiền điện
 */
 const numberFormat = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
});
document.getElementById("btnCalKW").onclick=function(){
    var name=document.getElementById("name").value;
    var amountKw=document.getElementById("amountKW").value*1;
    var totalmoney=0;
    if(amountKw<=50){
        totalmoney=amountKw*500;
        
    }
    else if(50<amountKw<=100){
        totalmoney=50*500+(amountKw-50)*650;
    }
    else if(100<amountKw<=200){
        totalmoney=50*500+50*650+(amountKw-100)*850;
    }
    else if(200<amountKw<=350){
        totalmoney=50*500+50*650+100*850+(amountKw-200)*1100;
    }
    else if(350<amountKw){
        totalmoney=50*500+50*650+100*850+150*1100+(amountKw-350)*1300;
    }
    var resultCalKW="<p>"+name+" đã sử dụng tổng số tiền điện là: "+numberFormat.format(totalmoney)+"</p>";
    document.getElementById("resultCalKW").innerHTML=resultCalKW;
}