function shout(hello) {
  const result = ("hello".toUpperCase());
  return result;
}

const output = shout("hello");
expect(output).toEqual('HELLO');

function whisper(hello) {
  const result = hello.toLowerCase();
  return result;
}

const outputWhisper = whisper("hello");
expect(outputWhisper).toEqual('hello');

function logShout(string) {
  console.log(string.toUpperCase());
}

logShout("hello");

function logWhisper(string) {
  console.log(string.toLowerCase());
}

logWhisper("HELLO");

function sayHiToHeadphonedRoommate(string) {
  if (string === string.toLowerCase()) {
    return "I can't hear you!";
  }else if (string === string.toUpperCase()) {
    return "YES INDEED!";
  } else if (string.toLowerCase() !== string && string.toUpperCase() !== string) {
    return "I would love to!";
  }
}



const response = sayHiToHeadphonedRoommate("Let's have dinner together!");
expect(response).toEqual("I would love to!");




