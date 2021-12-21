var totalWorkHours=40;
var basePay=8;
var extraWork=basePay*1.5;
if(basePay>8 && totalWorkHours<=40){
    var payment=totalWorkHours*basePay;
    console.log(payment);
}else{
    console.log("error")
}if(totalWorkHours>40 && totalWorkHours<60){
    var extraWork=basePay*1.5;
    console.log(extrawork);
}else{
    console.log("error")
}