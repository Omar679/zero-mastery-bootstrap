function check_driver_age() {

    x = prompt("What is your age?");

    if (Number(x) < 18) {
        alert("Sorry, you are too yound to drive this car. Powering off");
    } else if (Number(x) > 18) {
        alert("Powering On. Enjoy the ride!");
    } else if (Number(x) === 18) {
        alert("Congratulations on your first year of driving. Enjoy the ride!");
    }
}
function check_driver_age_2(x){
    
    if (Number(x) < 18) {
        console.log("Sorry, you are too yound to drive this car. Powering off");
    } else if (Number(x) > 18) {
        console.log("Powering On. Enjoy the ride!");
    } else if (Number(x) === 18) {
        console.log("Congratulations on your first year of driving. Enjoy the ride!");
    }
}

check_driver_age()
check_driver_age_2(4)