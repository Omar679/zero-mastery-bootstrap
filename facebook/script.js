database = [{
    username:'andrei',
    password:'123456'
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

function signIn(user,pass){
    if (user == database[0].username && pass == database[0].password){
        console.log(newsfeed);
    }
    else{
        alert("Username or password incorrect");
    }
}
signIn(userNamePrompt,passwordPrompt);