let slides=document.getElementsByClassName('slider-content');
let slider=document.getElementsByClassName('slider')[0];
let numberSlide=-1;


for(let i=0;i<slides.length;i++)
{
    slides[i].style.display = "none";
}

if(slides.length>0){
slides[0].style.display = "block";
slider.style.backgroundColor="#00b18f";
}


setInterval(Carousel,3000);

function Carousel()
{
    if(numberSlide!=2)
    {
        numberSlide++;
    }else
    {
        numberSlide=0;

    }

    for(let i=0;i<3;i++)
    {
        if(i!=numberSlide)
        slides[i].style.display = "none";
        else{
        slides[i].style.display = "block";
        }
        if(numberSlide==0)
        slider.style.backgroundColor="#00b18f";
        else
        slider.style.backgroundColor="#fff";
    }
}