database = [{
    username:'andrei',
    password:'123456',
},
{
    username:'caleb',
    password:'3456',
},
{
    username:'khalifah',
    password:'345632',
},
{
    username:'hussain',
    password:'56df3',
}];


newsfeed = [
    {
        username:'bobby',
        timeline:'I am a magictian'

    },

    {
        username:'sally',
        timeline:'javascript ia cool'
    }
];

userNamePrompt = prompt("Enter your Username");
passwordPrompt = prompt("Enter your password");

function isUserNameValid(username,password){
    for (i=0; i < database.length; i++){
        if(database[i].username == username && database[i].password == password){
            return true;
        } 
    }
    return false;
}

function signIn(username,password){

    if (isUserNameValid(username,password)){
        console.log(newsfeed);
    }
    else{
        alert("Username or password incorrect");
    }
}
signIn(userNamePrompt,passwordPrompt);

