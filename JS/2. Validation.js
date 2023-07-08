
function validate_data(){
    // Validate User Name
    strName = document.getElementById('txt_userName').value
    if (strName.length == 0 || strName.length == null || strName.length == undefined) {
        document.getElementById("error_message_span").innerHTML = "<p style = 'color:red'>Name must be required</p>"
        // document.getElementById("error_message_span").innerText = "Name must be required"
        // alert("Name must be required")
    } else if (strName.length >= 0 && strName.length < 3) {
        document.getElementById("error_message_span").innerHTML = "<p style = 'color:yellow'>Name must be more than 2 characters</p>"
        //document.getElementById("error_message_span").innerText = "Name must be more than 2 characters"
        // alert("Name must be more than 2 characters")
    } else {
        document.getElementById("error_message_span").innerText = ""
        alert("Chosen Name: " +  strName)
    }

    // Validate Age
    strAge = document.getElementById('txt_age').value
    if (strAge.length == 0 || strAge.length == null || strAge.length == undefined) {
        document.getElementById("error_message_span").innerHTML = "<p style = 'color:red'>Age is required</p>"
        // document.getElementById("error_message_span").innerText = "Name must be required"
        // alert("Name must be required")
    }

    intAge = parseInt(strAge);
    while (intAge < 18) {
        alert("You are not old enough.");
        intAge = prompt("Please enter correct age");
    }

    /*
    userResponse = confirm("Is the age correct?");
    if (userResponse) {
        document.write("Good!")
    }*/
}