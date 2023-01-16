let offers=document.getElementsByClassName('alloffer');
let counter=3;
let prevcounter=document.getElementById('prev');
let nextcounter=document.getElementById('next');

if(counter==3)
prevcounter.disabled = true;
if(counter==offers.length-1)
nextcounter.disabled = true;

for(let i=0;i<offers.length;i++)
{
    if(i<4)
    {
        offers[i].style.display="block";
        continue;
    }
       offers[i].style.display="none";
}

function prev()
{
    counter--;
    check();
    for(let i=0;i<offers.length;i++)
   {
       if(i==counter-3){
        offers[i].style.display="block";
        offers[i].classList.add('fade');
        setTimeout(function(){offers[i].classList.remove('fade');},1000);
        }
        else 
        offers[i].classList.remove('fade');
    if(i>counter-3&&i<=counter)
    {
        offers[i].style.display="block";
        continue;
    }else if(i!=counter-3)
       offers[i].style.display="none";
}

}


function next()
{

    counter++;
   
    check();
    for(let i=0;i<offers.length;i++)
{
      if(i==counter){
      offers[i].style.display="block";
      offers[i].classList.add('fade');
      setTimeout(function(){offers[i].classList.remove('fade');},1000);
      }
      else 
      offers[i].classList.remove('fade');
      

    if(i>=counter-3&&i<counter)
    {
        offers[i].style.display="block";
        continue;
    }else if(i!=counter)
       offers[i].style.display="none";
}

}


function check()
{
if(counter==3)
prevcounter.disabled = true;
else
prevcounter.disabled = false;
if(counter==offers.length-1)
nextcounter.disabled = true;
else
nextcounter.disabled = false;
}