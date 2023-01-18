function myFun() {

    var correct_way = /^[A-Za-z]+$/;

    var a = document.getElementById('User_Name1').value;
    var last_name = document.getElementById('User_Name2').value;
    var date = document.getElementById('date').value;


    var b = document.getElementById('date').value;
    if (a == "") {
        document.getElementById("Message1").innerHTML = "*Invalid first name Entered";
        return false;

    }
    if (a.replace(/\s/g, "").length <= 0) {
        document.getElementById("Message1").innerHTML = "*space not allow";
        return false;
    }
    if (a.length < 3) {
        document.getElementById("Message1").innerHTML = "*user name most be 3 Character";
        return false;
    }
    if (a.length > 20) {
        document.getElementById("Message1").innerHTML = "*user name most be less than 20 Character";
        return false;
    }
    if (a.match(correct_way))
        true;
    else {
        document.getElementById("Message1").innerHTML = "*Only alphabets are allowed";
        return false;
    }
    if (last_name == "") {
        document.getElementById("Message2").innerHTML = "*Invalid last name Entered";
        return false;
    }
    if (date == "") {
        document.getElementById("Message3").innerHTML = "*Invalid Date range selected";
        return false;
    }
}
