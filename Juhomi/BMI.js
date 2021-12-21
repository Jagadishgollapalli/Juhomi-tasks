var height=50;
var weight=110;
BMI=[weight  / (height * height)] * 703
console.log(BMI)

if(BMI>19 && BMI<25){
    console.log("Healthy person")
}else{
    console.log("Unhealthy person")
}
