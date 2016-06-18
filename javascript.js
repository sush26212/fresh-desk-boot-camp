function Max(){
var a = document.getElementById('n1').value;
var b = document.getElementById('n2').value;
if(a>b)
{
alert(a+" is greater");
}
else
{
alert(b + " is greater");
}
}

function Maxofthree()
{
var a = document.getElementById('n3').value;
var b = document.getElementById('n4').value;
var c = document.getElementById('n5').value;
if (a>b && a>c)
alert(a +" is greater");
else 
if (b>a && b>c)
alert(b +" is greater");
else 
alert(c +" is greater");
}

function vowel()
{
var ch = document.getElementById('c1').value;
if(ch=="a" || ch=="e" || ch=="i" || ch=="o" || ch=="u" || ch=="A" || ch=="E" || ch=="I" || ch=="O" || ch=="U")
alert("its a vowel");
else
alert("not a vowel");
}

function tran()
{
 var current = document.getElementById('n7').value;
 var y = "";
 for (i = 0; i < current.length; i++) {
 var text = current.charAt(i); 
 if(text=="a" || text=="e" || text=="i" || text=="o" || text=="u")
    y=(y+(text));
      else 
   y = (y + (text + "o" + text));
 }
 alert(y);
}

var sum = function(array) {
  var length = array.length;
  var total = 0;
  for (i = 0; i < length; i++) {
    total += array[i];
  }
  return total;
}

var multiply = function(array) {
  var length = array.length;
  var total = 1;
  for (i = 0; i < length;  i++) {
    total *= array[i];
  }
  return total;
}

function rev()
{
 var current = document.getElementById('n8').value;
 var y = "";
 for (i = current.length; i>=0 ; i--) {
 var text = current.charAt(i); 
    y=(y+(text));
       }
 alert(y);
}

function translate(str){
   var lexicon = {"merry":"god", "christmas":"jul", "and":"och", "happy":"gott", "new":"nytt", "year":"år"},
       q = "";
   
   str.toLowerCase().split(" ").map(function(p, c){
       q += lexicon[p] + ' ';
   });
   
   return q;
}


var phrase = "Merry Christmas and Happy New Year",
   x = translate(phrase);

document.getElementById("filler").innerHTML = x;

var findLongestWord = function(array) {
  var elements = array.length;
  var count = 0;
  for (i = 0; i < elements; i++) {
    if (array[i].length > count) 
      count = array[i].length;
  }
  return count;
}

var filterLongWords = function(array, int){
  var length = array.length;
  var longestWords = [];
  for (i = 0; i < length; i++) {
    if (array[i].length > int) {
      longestWords[longestWords.length] = array[i];
    }
  }
  return longestWords;
}

var charFreq = function(string){
  var list = {};
  var length = string.length;
  for (var i = 0; i < length; i++) {  
  if (string.charAt(i) in list) 
    list[string.charAt(i)] += +1;
  else 
    list[string.charAt(i)] = 1;
  }
  return list;
}