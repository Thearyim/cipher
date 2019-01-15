
var sentence = prompt("Enter a sentence:");

function remove () {
  var removeFirst = sentence.slice(0,1);
  var removeLast = sentence.slice(sentence.length-1, sentence.length);
  var characters = `${removeFirst}${removeLast}`.toUpperCase();
  return characters;
}

function reverse () {
  var blah = remove();
  blah = blah.split(""); //convert 'blahing' to array
  blah = blah.reverse(); //reverse 'blahing' order
  blah = blah.join(""); //then join the reverse order values together
  return blah;
}

function newThree () {
  var clara = remove();
  var car = reverse(clara);
  var string = `${sentence}${car}`;
  return string;
}

function newFour () {
  var number = sentence.length;
  console.log(number);
  var answer = Math.floor(number / 2);
  var mouse = sentence.slice(answer-1, answer);
  var yay = reverse();
  var newSentence = `${mouse}${sentence}${yay}`;
  return newSentence;
}

function reverseTwo () {
  var key = newFour();
  key = key.split("");
  key = key.reverse();
  key = key.join("");
  console.log(key);
  return key;
}

function reverseTwoInverse () {
  var key = reverseTwo();
  key = key.split("");
  key = key.reverse();
  key = key.join("");
  console.log(key);
  return key;
}

$(function(){
  $(".clickable").click(function() {
    $("#initially-showing").toggle();
    $("#initially-hidden").toggle();
  });
});



alert (remove());
alert (reverse());
alert (newThree());
alert (newFour());
alert (reverseTwo());
alert (reverseTwoInverse());
// newFour();
// reverseTwo();
