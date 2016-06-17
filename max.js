var a = prompt("enter first number");
var b = prompt("enter second number");
var c;
c = max(a,b);
alert("largest number is "+c)
function max(a,b)
{
if(a>b)
return a;
else 
return b;
}

