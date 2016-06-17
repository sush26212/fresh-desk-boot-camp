var a = prompt("enter first number");
var b = prompt("enter second number");
var c;
c = max(a,b);
document.write("largest number is "+c"<br>")
function max(a,b)
{
if(a>b)
return a;
else 
return b;
}

