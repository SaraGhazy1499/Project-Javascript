

let nav=document.getElementsByClassName("nav")[0];
window.onscroll=function()
{
    let x=document.body.scrollTop;
    console.log(x);
    if (document.body.scrollTop >= 200 ) {
       nav.classList.add("nav-scroll");
        nav.classList.remove("nav");
    } 
    else {
        nav.classList.add("nav");
        nav.classList.remove("nav-scroll");
    }

}



/********************Start cart************************* */
function openCart()
{
    let cart=document.getElementById('Cart');
    let contentCart=document.getElementById('cartContent');

    setTimeout(function(){
        cart.style.display="block";
    },.3);

    let ps=-100;
    let time=setInterval(open,.1);
    function open()
    {
        ps++;
    contentCart.style.right=ps+'%';
    if(ps==0)
    {
        clearInterval(time);
    }
    };

}


function closeCart()
{
    let cart=document.getElementById('Cart');
    let contentCart=document.getElementById('cartContent');
    let ps=0;
    let time=setInterval(open,.1);
    function open()
    {
        ps--;
    contentCart.style.right=ps+'%';
    if(ps==-70)
    {
        cart.style.display="none";
    }

    if(ps==-100)
    {
        clearInterval(time);
    }

    };

}

/*********************End Cart**************************** */

/*******************Start login*****************/

if(sessionStorage.getItem("username")!=null)
{
document.getElementById("user").innerHTML=sessionStorage.getItem("username");
document.getElementById("user").title="Logout";
}


function userStatus()
{

    let login=document.getElementById('login');
    let contentLogin=document.getElementById('contentLogin');

    if( document.getElementById("user").innerHTML!="login"){
    document.getElementById("user").innerHTML="login";
    document.getElementById("user").title="";
    Logout();
    alert("Logout Successfully!");
    }else
    {
    setTimeout(function(){
        login.style.display="block";
    },.3);

    let ps=-100;
    let time=setInterval(open,.1);
    function open()
    {
        ps+=2;
    contentLogin.style.top=ps+'%';
    if(ps==0)
    {
        clearInterval(time);
    }
    };

  }

}


function infoLogin()
{
    document.getElementById('login').style.display="none";
    document.getElementById('contentLogin').style.top=-100;

    let username=document.getElementById("userName").value;
    let password=document.getElementById("password").value;
 
    sessionStorage.setItem("username",username);
    sessionStorage.setItem("password",password);  

    if(document.getElementById("check").checked)
    {
        localStorage.setItem("username",username);
        localStorage.setItem("password",password);  
    }else if(localStorage.getItem("username")!=null)
    {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
    }

    document.getElementById("user").innerHTML=sessionStorage.getItem("username");
    document.getElementById("user").title="Logout";
    alert("Login Successfully!");
};




if(localStorage.getItem("username")!=null)
{
    if(document.getElementById("userName")!=null)
    {
    document.getElementById("userName").value=localStorage.getItem("username");
    document.getElementById("password").value=localStorage.getItem("password");
    document.getElementById("check").checked=true;
    }
}

function Logout()
{
    sessionStorage.clear();
    if(localStorage.getItem("username")==null)
    {
    document.getElementById("password").value="";
    document.getElementById("userName").value="";
    }

}


function closeLogin()
{
    let login=document.getElementById('login');
    let contentLogin=document.getElementById('contentLogin');
    let ps=0;
    let time=setInterval(open,.1);
    function open()
    {
        ps-=2;
        contentLogin.style.top=ps+'%';
    if(ps==-80)
    {
        login.style.display="none";
    }

    if(ps==-100)
    {
        clearInterval(time);
    }

    };

}



/*********************End Login************************/


/**********************Start Read*********************** */
function Read(e)
{
    let idmore="more"+e.id.substr(4,e.id.length);
    let iddots="dots"+e.id.substr(4,e.id.length);
    if(e.innerHTML=="Read more")
    {
        document.getElementById(idmore).style.display="inline";
        document.getElementById(iddots).style.display="none";
        e.innerHTML="Read less";
    }else
    {
        document.getElementById(idmore).style.display="none";
        document.getElementById(iddots).style.display="inline";
        e.innerHTML="Read more";

    }

}


/**********************EndRead*********************** */