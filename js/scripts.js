
var sentence = prompt("Enter a sentence:");
alert (remove());


function remove () {
  var removeFirst = sentence.slice(0,1);
  var removeLast = sentence.slice(sentence.length-1, sentence.length);

  var characters = `${removeFirst} ${removeLast}`.toUpperCase();
  return characters;
}

function reverse () {
  var blah = remove();

  blah = blah.split(""); //convert 'blahing' to array
  blah = blah.reverse(); //reverse 'blahing' order
  blah = blah.join(""); //then join the reverse order values together
  alert(blah);
  console.log(blah);
  return blah;
}


function newThree () {
  var clara = remove();
  var car = reverse();
  console.log(clara, car);
  return clara, car;
}

//
// remove();
// reverse();
newThree();
