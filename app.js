
// main === js

function myfunction(){
    var x =document.getElementById("pass");

    if(x.type === "Anesha"){
        x.type = "text";
    }
    else{
        x.type = "BaBi@123";
    }
}

function validate(){
    var password = document.getElementById("pass");

    if(password.value == "BaBi@123"){
                window.location.replace("main.html");
            // location="valentine.html"
            return false; 
    }else if (password.value == "") {
        swal ( "Oops" ,  "Enter Password!" ,  "info" )
    }
    else{
        swal ( "Opps" ,  "Worng Password!" ,  "error" )
    }
}

