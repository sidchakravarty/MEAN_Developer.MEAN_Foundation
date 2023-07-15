
// function employee(fname, lname, age, salary) {
//     this.fname = fname;
//     this.lname = lname;
//     this.age = age;
//     this.salary = salary;
//     // console.log("First Name: " + this.firstName);
// }

// const newEmp = employee("Sid", "Chakravarty", 43, 160000);
// console.log(this.fname);
// console.log(this.lname);
// console.log(this.age);
// console.log(this.salary);

class Person {
    constructor(fname, lname, gender) {
        this.fname = fname
        this.lname = lname
        this.gender = gender
    }
}

function validate_data(value, value_type) {
    let return_value = false;

    switch (value_type) {
        case "String":
            console.log("Validating: " + value + " as a " + value_type)

            if (value.length == 0 || value.length == null || value.length == undefined) {
                return_value = false;
            } else if (value.length >= 0 && value.length < 3) {
                return_value = false;
            } else {
                return_value = true;
            }            
            break;
        case "Integer":
            console.log("Validating: " + value + " as an " + value_type)

            if (value.length == 0 || value.length == null || value.length == undefined) {
                return_value = false;
            } else {
                return_value = true;
            }           
            break;
    }
    return return_value;
}


function submit_data(fname, lname, gender) {
    let is_fname_valid = false;
    let is_lname_valid = false;
    let is_gender_valid = false;

    is_fname_valid = validate_data(document.getElementById("txt_first_name").value, "String");
    is_lname_valid = validate_data(document.getElementById("txt_last_name").value, "String");
    is_gender_valid = validate_data(document.getElementById("cmb_gender").value, "String");

    if (is_fname_valid & is_lname_valid & is_gender_valid) {
        console.log("Input data is valid")        
    } else {
        console.log("Input data cannot be validated")        
    }


}

function erase_data() {
    console.log("Erase Data")
}