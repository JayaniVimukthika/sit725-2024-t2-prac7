
const clickMe = () => {
    alert("Thanks for clicking me. Hope you have a nice day!")
}

let socket = io();
socket.on('number',(msg)=>{
    console.log('Random Number: ' + msg);
});

