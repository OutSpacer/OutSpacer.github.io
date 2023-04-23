

var imagenes = [
    "../C2A.png",
    "../C2B.png",
    "../C2C.png",
    "../C2D.png",
];
var q = 0;

function mySlider()
{
document.getElementById('slidercab2').classList.remove("desaparecer");
document.getElementById('slidercab2').src = imagenes[q];
document.getElementById('slidercab2').classList.add("aparecer");

setTimeout(()=>{
document.getElementById('slidercab2').classList.remove("aparecer");
document.getElementById('slidercab2').classList.add("desaparecer");
},2000);



if(q < imagenes.length - 1)
{
q++;
}
else{
q = 0;
}

setTimeout("mySlider()",4000);
}






var imagenes2 = [
    "../C4A.png",
    "../C4B.png",
    "../C4C.png",
    "../C4D.png",
    "../C4E.png",
    "../C4F.png",
    "../C4G.png",
];
var i = 0;

function mySecondSlider()
{
document.getElementById('slidercab4').classList.remove("desaparecer");
document.getElementById('slidercab4').src = imagenes2[i];
document.getElementById('slidercab4').classList.add("aparecer");

setTimeout(()=>{
document.getElementById('slidercab4').classList.remove("aparecer");
document.getElementById('slidercab4').classList.add("desaparecer");
},2000);



if(i < imagenes2.length - 1)
{

i++;
}else{
i = 0;
}

setTimeout("mySecondSlider()",4000);
}

