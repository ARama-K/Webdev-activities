function Changer(){
    var x1=Math.random()*6;
    var x2=Math.random()*6;
    x1=Math.ceil(x1);
    x2=Math.ceil(x2);
    var t1="images/dice"+x1+".png";
    var t2="images/dice"+x2+".png";
    var pp1=document.querySelectorAll('img')[0];
    var pp2=document.querySelectorAll('img')[1];
    pp1.setAttribute("src",t1);
    pp2.setAttribute("src",t2);
    if(x1>x2){
        document.querySelector('footer').innerHTML='<h2>Result: Player 1 Wins 🔴</h2>';
    }
    else if(x1<x2){
        document.querySelector('footer').innerHTML='<h2>Result: Player 2 Wins 🔷</h2>';
    }
    else{
        document.querySelector('footer').innerHTML='<h2>Result: Draw 💚</h2>'
    }
}