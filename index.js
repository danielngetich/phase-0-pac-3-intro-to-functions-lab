function shout(string){
    return string.toUpperCase();
}
function whisper(string){
    return string.toLowerCase();
}
function logShout(spy){
    console.log(spy.toUpperCase());
}
logShout('hello');
function logWhisper(spy){
    console.log(spy.toLowerCase());
}
logWhisper('HELLO');
function sayHiToHeadphonedRoommate(string){
    if (string==="hello"){
        return "I can't hear you!";
    }
    if (string==="HELLO"){
        return "YES INDEED!";
    }
    if (string==="Let's have dinner together!"){
        return"I would love to!";
    }
}