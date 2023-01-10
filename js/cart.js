/****************Add to cart************** */
let QtCart=0;
let totalprice=0;
document.getElementById('qtcart').innerText=QtCart;
document.getElementById('totalprice').innerText="Total Price :"+totalprice+" LE.";
function AddToCart(e)
{
   
     QtCart=0;  
     totalprice=0;
    let product;

    for(let i=0;i<AllProducts.length;i++)
    {
        if(AllProducts[i].id==e.target.id)
        {

            
            product=
            {
                "id":AllProducts[i].id,
                'name':AllProducts[i].name,
                 'desc':AllProducts[i].desc,
                 'price':AllProducts[i].price,
                 'img':AllProducts[i].img,

            };

            break;

        }
    }

    let allProducts=new Array();
    let isfind=0;

    if(localStorage.getItem("cart")!=null)
    {
        allProducts=JSON.parse(localStorage.getItem("cart"));
        for(let i=0;i<allProducts.length;i++)
        {
        if(allProducts[i].id==e.target.id)
        {

            allProducts[i].qt++;
            let pqt=document.getElementById("qt"+allProducts[i].id);
            pqt.innerHTML="Quantity: "+allProducts[i].qt+ " | Price : "+allProducts[i].price+" LE. ";
            product.qt=allProducts[i].qt;
            isfind=1;

        }
        totalprice+=Number(allProducts[i].qt)*Number(allProducts[i].price);
        QtCart+=Number(allProducts[i].qt);

       }
        
       if(isfind==0)
       {
        product.qt=1;
        totalprice+=Number(product.price);
        QtCart++;
        allProducts.push(product);
       }

       localStorage.setItem("cart",JSON.stringify(allProducts));

    }else
    {
        product.qt=1;
        QtCart++;
        totalprice+=Number(product.price);
        allProducts.push(product);
        localStorage.setItem("cart",JSON.stringify(allProducts));
    }

      document.getElementById('qtcart').innerText=QtCart;
      document.getElementById('totalprice').innerText="Total Price : "+totalprice+" LE.";
 




    if(isfind==0)
    {

    let boxCart=document.getElementById('cart-box');

    let card=document.createElement("div");
    card.classList.add("col-lg-12","card","mt-4");
    card.id="product"+product.id;

      let rowCard=document.createElement("div");
       rowCard.classList.add('row');


       let img=document.createElement("div");
       img.classList.add("col-lg-4","col-sm-4");
       let contentImg=document.createElement("img");
       contentImg.src="images/"+product.img;
       contentImg.classList.add("img-fluid");
       img.append(contentImg);

       let infoProduct=document.createElement("div");
       infoProduct.classList.add("col-lg-8","col-sm-8","mt-4");
       let rowInfoProduct=document.createElement("div");
       rowInfoProduct.classList.add("row");

         let info=document.createElement("div");
         info.classList.add("col-lg-9","col-sm-9");
         let nameProduct=document.createElement("h3");
         nameProduct.innerText=product.name;
         let descProduct=document.createElement("p");
         descProduct.innerText=product.desc;
         info.append(nameProduct);
         info.append(descProduct);
         rowInfoProduct.append(info);
         infoProduct.append( rowInfoProduct);
         let qt=document.createElement("h6");
         qt.id="qt"+product.id;
         qt.innerHTML="Quantity: "+product.qt+ "  |  Price : "+product.price +" LE. ";
         info.append(qt);

         let removeProduct=document.createElement("div");
         removeProduct.classList.add("col-lg-2","col-sm-2","mx-1");
         let button=document.createElement("button");
         button.classList.add("btn");
         button.id="remove"+product.id;
         button.addEventListener('click',function (e)
         {
            let confiremdelete=confirm("Are you sure to delete ? ");
            if(confiremdelete){
            let id=(e.target.id).substr(6);
            let search=JSON.parse(localStorage.getItem("cart"));
            for(let j=0;j<search.length;j++)
            {
            if(search[j].id==id)
            {
                console.log(search);
                QtCart-=Number(search[j].qt);
                totalprice-=Number(search[j].qt)*Number(search[j].price);
                search.splice(j,1);
                console.log(search);
                localStorage.setItem("cart",JSON.stringify(search));
                break;
             }
    
             }
           
            document.getElementById('qtcart').innerText=QtCart;
            document.getElementById('totalprice').innerText="Total Price : "+totalprice+" LE.";
            document.getElementById("product"+id).remove();
            alert("deleted Successfully!");
            }

         });
        

         let buttonR=document.createElement("i");
         buttonR.classList.add("fa","fa-trash");
         buttonR.id="remove"+product.id;
         button.append(buttonR);
         removeProduct.append(button);
         rowInfoProduct.append(removeProduct);

         rowCard.append(img);
         rowCard.append(infoProduct);
         card.append(rowCard);
         boxCart.append(card);
        }
        alert("Added Successfully!");
}







if(localStorage.getItem("cart")!=null)
{
    let carts=JSON.parse(localStorage.getItem("cart"));

   QtCart=0;
   totalprice=0;

   for(let i=0;i<carts.length;i++)
   {
    QtCart+=Number(carts[i].qt);
    totalprice+=Number(carts[i].qt)*Number(carts[i].price);
    let boxCart=document.getElementById('cart-box');

    let card=document.createElement("div");
    card.classList.add("col-lg-12","card","mt-4");
    card.id="product"+carts[i].id;

      let rowCard=document.createElement("div");
       rowCard.classList.add('row');


       let img=document.createElement("div");
       img.classList.add("col-lg-4","col-sm-4");
       let contentImg=document.createElement("img");
       contentImg.src="images/"+carts[i].img;
       contentImg.classList.add("img-fluid");
       img.append(contentImg);

       let infoProduct=document.createElement("div");
       infoProduct.classList.add("col-lg-8","col-sm-8","mt-4");
       let rowInfoProduct=document.createElement("div");
       rowInfoProduct.classList.add("row");

         let info=document.createElement("div");
         info.classList.add("col-lg-9","col-sm-9");
         let nameProduct=document.createElement("h3");
         nameProduct.innerText=carts[i].name;
         let descProduct=document.createElement("p");
         descProduct.innerText=carts[i].desc;
         info.append(nameProduct);
         info.append(descProduct);
         rowInfoProduct.append(info);
         infoProduct.append( rowInfoProduct);
         let qt=document.createElement("h6");
          qt.innerHTML="Quantity: "+carts[i].qt+ " | Price : "+carts[i].price+" LE. ";
          qt.id="qt"+carts[i].id;
          info.append(qt);


         let removeProduct=document.createElement("div");
         removeProduct.classList.add("col-lg-2","col-sm-2","mx-1");
         let button=document.createElement("button");
         button.classList.add("btn");
         button.id="remove"+carts[i].id;
         button.addEventListener('click',function (e)
         {
            let confiremdelete=confirm("Are you sure to delete ? ");
            if(confiremdelete){
            let id=(e.target.id).substr(6);
            let search=JSON.parse(localStorage.getItem("cart"));
            for(let j=0;j<search.length;j++)
            {
            if(search[j].id==id)
            {
                QtCart-=Number(search[j].qt);
                totalprice-=Number(search[j].qt)*Number(search[j].price);
                search.splice(j,1);
                localStorage.setItem("cart",JSON.stringify(search));
                break;
             }
    
             }
           
            document.getElementById('qtcart').innerText=QtCart;
            document.getElementById('totalprice').innerText="Total Price : "+totalprice+" LE.";
            document.getElementById("product"+id).remove();
            alert("deleted Successfully!");
            }

         });
        

         let buttonR=document.createElement("i");
         buttonR.classList.add("fa","fa-trash");
         buttonR.id="remove"+carts[i].id;
         button.append(buttonR);
         removeProduct.append(button);
         rowInfoProduct.append(removeProduct);

         rowCard.append(img);
         rowCard.append(infoProduct);
         card.append(rowCard);
         boxCart.append(card);

}
document.getElementById('qtcart').innerText=QtCart;
document.getElementById('totalprice').innerText="Total Price : "+totalprice+" LE.";



}

