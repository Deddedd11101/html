function quad(a,b,c)
{
if (a==0) alert("Ошибка, 0 - недопустимое значение") ; 
var D=b*b-4*a*c;
var x1,x2,y1,y2;
if (D>0)
{
    x1=(-b+Math.sqrt(D))/(2*a);
    x2=(-b-Math.sqrt(D))/(2*a);
    y1=x1.toFixed(3);
    y2=x2.toFixed(3)
    return "Коэффициенты: a="+a+", b="+b+", c="+c+"\nКорни уравнения: X1=" + y1 + ", X2=" + y2 + "\nДискриминант (D)=" + D;
} else if (D==0)
{
    x1 =-b/(2*a);
    y1=x1.toFixed(3)
    return "Коэффициенты: a="+a+", b="+b+", c="+c+"\nКорни уравнения: X1=" + y1 + "\nДискриминант (D)=" + D;
} else if (D<0) return "Коэффициенты: a="+a+", b="+b+", c="+c+"\nКорней нет!\nДискриминант (D)=" + D;
}
function prog(){
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var c = document.getElementById('c').value;
    var result = quad(a,b,c);
    document.getElementById('result').textContent = result;
    document.getElementById('otvet').style.display ='block';
}
