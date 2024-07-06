function bodyMassIndex(){
    
    var btnStatus  = document.getElementById('send-age').addEventListener("click",function(){

        var weightData = document.getElementById('weight').value;
        var heightData = document.getElementById('height').value;

        var massResult = weightData / Math.pow(heightData,2);
      
        if(massResult < 18 ){

            window.alert("Your result as : " + (massResult) + " so final status be : " + ("Slim Weight"));
        }else if(massResult >= 18 &&  massResult <= 24.9){

            window.alert("Your result as : " + (massResult) + " so final status be : " + ("Perfect Weight"));
        }else if(massResult >= 25  &&  massResult <= 29.9){

            window.alert("Your result as : " + (massResult) + " so final status be : " + ("Additional Weight"));
        }else if(massResult >= 30 &&  massResult <= 34.9){

            window.alert("Your result as : " + (massResult) + " so final status be : " + ("Ghee from one category"));
        }else if(massResult >= 35 &&  massResult <= 39.9){

            window.alert("Your result as : " + (massResult) + " so final status be : " + ("Ghee from two category"));
        }else if(massResult >= 40){

            window.alert("Your result as : " + (massResult) + " so final status be : " + ("Danger Ghee"));
        }else{

            window.alert("Please re-again to enter you data!");
        }
    })
}
bodyMassIndex();