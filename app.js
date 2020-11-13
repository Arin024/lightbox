/*var dayOfWk=[" Fri Oct 23","Mon Nov 24","Thur Dec 25",];
var dayOne=dayOfWk[3]
alert(dayOne);

switch (dayOne){
    case " Fri Oct 23":
        alert("Good job");
    break;
    case "Mon Nov 24":
        confirm("How come?");
        break;
    case "Thur Dec 25" :
        alert("HAPPY CHRISTMASS");
        break;
        default:
            alert("ALL IS WELL")   
};*/
function studentId(){
    var YourName;
    var EnterReg=document.getElementById("regNo").value;

    switch (EnterReg){
        case "001":
            YourName="Amaka";
            break;
        case "002" :
            YourName="paul" ;
            break;
        case "003":
            YourName="Arinze" ;
            break;
        case "004":
            YourName="Emeka";
            break;
        case "005" :
            YourName="Chinwe";
            break;            
    }
    document.getElementById("name").value=YourName.toUpperCase();
}