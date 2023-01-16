let products=
[
    {
        'id':1,
        'name':'Medicin1',
        'desc':'Pantoloc 40 Mg 14 Tablet 2 Strips',
        'price':'25.00',
        'img':'ESL_1461.png'

    },
    {
        'id':2,
        'name':'Medicin2',
        'desc':'Pantoloc 40 Mg 14 Tablet 2 Strips',
        'price':'25.00',
        'img':'ESL_4445.png'

    },
    {
        'id':3,
        'name':'Medicin3',
        'desc':'Pantoloc 40 Mg 14 Tablet 2 Strips',
        'price':'25.00',
        'img':'ESL_4590.png'
    }
];

let AllProducts =
[
    {
        'id':1,
        'name':'Medicin1',
        'desc':'Pantoloc 40 Mg 14 Tablet 2 Strips Medicin1',
        'price':'25.00',
        'img':'ESL_4695.png',
        'cat_id':1

    },

    {
        'id':2,
        'name':'Medicin2',
        'desc':'Pantoloc 40 Mg 14 Tablet 2 Strips Medicin2',
        'price':'20.00',
        'img':'ESL_4689.png',
        'cat_id':1

    },


    {
        'id':3,
        'name':'Medicin3',
        'desc':'Pantoloc 40 Mg 14 Tablet 2 Strips Medicin3',
        'price':'25.00',
        'img':'ESL_4686.png',
        'cat_id':1

    },


    {
        'id':4,
        'name':'Medicin4',
        'desc':'Pantoloc 40 Mg 14 Tablet 2 Strips Medicin4',
        'price':'25.00',
        'img':'ESL_4680.png',
        'cat_id':1

    },

    {
        'id':5,
        'name':'Medicin5',
        'desc':'Pantoloc 40 Mg 14 Tablet 2 Strips Medicin5',
        'price':'25.00',
        'img':'ESL_4679.png',
        'cat_id':1

    },

    {
        'id':6,
        'name':'Medicin6',
        'desc':'Pantoloc 40 Mg 14 Tablet 2 Strips Medicin6',
        'price':'30.00',
        'img':'ESL_4672.png',
        'cat_id':1

    },

    //category2

    {
        'id':7,
        'name':'Medicin7',
        'desc':'Pantoloc 40 Mg 14 Tablet 2 Strips Medicin7',
        'price':'35.00',
        'img':'ESL_4778.png',
        'cat_id':2
    },

    {
        'id':8,
        'name':'Medicin8',
        'desc':'Pantoloc 40 Mg 14 Tablet 2 Strips Medicin8',
        'price':'35.00',
        'img':'ESL_4775.png',
        'cat_id':2
    },

    {
        'id':9,
        'name':'Medicin9',
        'desc':'Pantoloc 40 Mg 14 Tablet 2 Strips Medicin9',
        'price':'25.00',
        'img':'ESL_4473.png',
        'cat_id':2
    },

    //cat3

    {
        'id':10,
        'name':'Medicin10',
        'desc':'Pantoloc 40 Mg 14 Tablet 2 Strips Medicin10',
        'price':'35.00',
        'img':'ESL_2450.png',
        'cat_id':3
    },
    {
        'id':11,
        'name':'Medicin11',
        'desc':'Pantoloc 40 Mg 14 Tablet 2 Strips Medicin11',
        'price':'35.00',
        'img':'ESL_2609.png',
        'cat_id':3
    },

    //cat4
    {
        'id':12,
        'name':'Medicin12',
        'desc':'Pantoloc 40 Mg 14 Tablet 2 Strips Medicin12',
        'price':'35.00',
        'img':'ESL_2545.png',
        'cat_id':4
    },

    {
        'id':13,
        'name':'Medicin13',
        'desc':'Pantoloc 40 Mg 14 Tablet 2 Strips Medicin13',
        'price':'35.00',
        'img':'ESL_4266.png',
        'cat_id':4
    },

    
    {
        'id':14,
        'name':'Medicin14',
        'desc':'Pantoloc 40 Mg 14 Tablet 2 Strips Medicin13',
        'price':'35.00',
        'img':'ESL_4290.png',
        'cat_id':4
    },


    
    {
        'id':15,
        'name':'Medicin15',
        'desc':'Pantoloc 40 Mg 14 Tablet 2 Strips Medicin13',
        'price':'35.00',
        'img':'ESL_2468.png',
        'cat_id':4
    },

];


let loc=location.search; 
let arr=loc.split('?'); 
let id=-1;
if(arr!=''){
   ////////////// ////secial page => one product
prod=arr[1].split('=');
id=prod[1];
}

  switch (id)
  {
    case '1':
        document.getElementById("nameCategory").innerHTML="Medications";
        document.getElementById("nameCategory").style.color="#06ab84";
        document.getElementsByClassName("linkproduct")[0].style.color="#00b18f";
        document.getElementsByClassName("linkproduct")[0].style.fontWeight="700";
        break;

    case '2':
        document.getElementById("nameCategory").innerHTML="Vitamines";
        document.getElementById("nameCategory").style.color="#2ebed8";
        document.getElementsByClassName("linkproduct")[1].style.color="#00b18f";
        document.getElementsByClassName("linkproduct")[1].style.fontWeight="700";
         break;

    case '3':
        
          document.getElementById("nameCategory").innerHTML="Skin Care";
          document.getElementById("nameCategory").style.color="#fcac2a";
          document.getElementsByClassName("linkproduct")[2].style.color="#00b18f";
          document.getElementsByClassName("linkproduct")[2].style.fontWeight="700";
           break;


    case '4':
        document.getElementById("nameCategory").innerHTML="Hair Care";
        document.getElementById("nameCategory").style.color="#78cbcf";
        document.getElementsByClassName("linkproduct")[3].style.color="#00b18f";
        document.getElementsByClassName("linkproduct")[3].style.fontWeight="700";
        break;

        case '5':
            document.getElementById("nameCategory").innerHTML="General Use";
            document.getElementById("nameCategory").style.color="#81c143";
            document.getElementsByClassName("linkproduct")[4].style.color="#00b18f";
            document.getElementsByClassName("linkproduct")[4].style.fontWeight="700";
            break;  

        case '6':
                document.getElementById("nameCategory").innerHTML="Mother / Baby Care";
                document.getElementById("nameCategory").style.color="#f7a5ae";
                document.getElementsByClassName("linkproduct")[5].style.color="#00b18f";
                document.getElementsByClassName("linkproduct")[5].style.fontWeight="700";
                break; 
                
                
        case '7':
        document.getElementById("nameCategory").innerHTML="Perfumes";
        document.getElementById("nameCategory").style.color="#7d59a3";
        document.getElementsByClassName("linkproduct")[6].style.color="#00b18f";
        document.getElementsByClassName("linkproduct")[6].style.fontWeight="700";
        break;

        case '8':
        document.getElementById("nameCategory").innerHTML="Medical Supplies";
        document.getElementById("nameCategory").style.color="#ee5741";
        document.getElementsByClassName("linkproduct")[7].style.color="#00b18f";
        document.getElementsByClassName("linkproduct")[7].style.fontWeight="700";
        break;
  }

   let exist=0;
  for(let i=0;i<AllProducts.length;i++)
  {
    if(AllProducts[i].cat_id==id){
        exist=1;
     let productsBox=document.getElementById("product-box");

 let productsBox_product=document.createElement("div");
 productsBox_product.classList.add("col-lg-4", "col-md-6", "col-12", "mt-4", "mb-2");

 productsBox.append(productsBox_product);

 let productsBox_product_card=document.createElement("div");
 productsBox_product_card.classList.add("card");

 productsBox_product.append(productsBox_product_card);

///
 let product_content=document.createElement("a");
 product_content.classList.add("content-product");
let product_contentImg=document.createElement("img");
product_contentImg.classList.add("card-img-top");
product_contentImg.src="images/"+AllProducts[i].img;
product_content.append(product_contentImg);
productsBox_product_card.append(product_content);


 ///
 let product_card_body=document.createElement("div");
 product_card_body.classList.add("card-body","w-100");
 productsBox_product_card.append(product_card_body);
 let productsBox_product_type=document.createElement("p");
 productsBox_product_type.classList.add("type");
 productsBox_product_type.innerHTML=AllProducts[i].name;
 product_card_body.append(productsBox_product_type);

 let productsBox_product_desc=document.createElement("a");
 let productsBox_product_descp=document.createElement("p");
 productsBox_product_descp.innerHTML="Berberil N Ophtiole 0.05 % 10 Ml drop";
 productsBox_product_desc.append(productsBox_product_descp);
 product_card_body.append( productsBox_product_desc);

 let productsBox_product_qt=document.createElement("p");
 productsBox_product_qt.classList.add("qt");
 productsBox_product_qt.innerHTML="10 ml";
 product_card_body.append(productsBox_product_qt);

 let productsBox_product_info=document.createElement("h5");
 product_card_body.append(productsBox_product_info);

 let productsBox_product_infoRow=document.createElement("div");
 productsBox_product_infoRow.classList.add("row","m-auto");
 productsBox_product_info.append(productsBox_product_infoRow);

 let productsBox_product_infoColumn1=document.createElement("div");
  productsBox_product_infoColumn1.classList.add("col-6", "mt-3","mb-2");
 productsBox_product_infoRow.append(productsBox_product_infoColumn1);
 let productsBox_product_infoColumn1_price=document.createElement("p");
 productsBox_product_infoColumn1_price.innerHTML=AllProducts[i].price+" EGP";
 productsBox_product_infoColumn1.append( productsBox_product_infoColumn1_price);

 let stars=document.createElement("div");
  stars.classList.add("col-6","mt-2");
  productsBox_product_infoRow.append(stars);
  let star1=document.createElement("i");
  star1.classList.add("fa","fa-star");
  stars.append(star1);
  let star2=document.createElement("i");
  star2.classList.add("fa","fa-star");
  stars.append(star2);
  let star3=document.createElement("i");
  star3.classList.add("fa","fa-star");
  stars.append(star3);
  let star4=document.createElement("i");
  star4.classList.add("fa","fa-star");
  stars.append(star4);
  let star5=document.createElement("i");
  star5.classList.add("fa","fa-star");
  stars.append(star5);



 


 ///
 let product_card_footer=document.createElement("div");
 product_card_footer.classList.add("card-footer");
 productsBox_product_card.append(product_card_footer);

 let product_card_footerRow=document.createElement("div");
 product_card_footerRow.classList.add("row");
 product_card_footer.append( product_card_footerRow);

 let product_card_footerColumn1=document.createElement("div");
 product_card_footerColumn1.classList.add("col-9", "mt-1");

 product_card_footerRow.append(product_card_footerColumn1);

 let product_card_footerColumn1_button=document.createElement("button");
 product_card_footerColumn1_button.classList.add("btn");
 product_card_footerColumn1_button.innerText="ADD TO CARD";
 product_card_footerColumn1_button.id=AllProducts[i].id;
 product_card_footerColumn1_button.addEventListener('click',AddToCart);
 product_card_footerColumn1.append(product_card_footerColumn1_button);




 let product_card_footerColumn2=document.createElement("div");
 product_card_footerColumn2.classList.add("col-2");
 let wish=document.createElement("i")
 wish.classList.add("fa","fa-heart")
 product_card_footerColumn2.append(wish);

 product_card_footerRow.append(product_card_footerColumn2);


  }


     if(exist==0 && document.getElementById("result-product-box")!=null)
     document.getElementById("result-product-box").innerHTML="No Results";
     else if(document.getElementById("result-product-box")!=null)
     document.getElementById("result-product-box").innerHTML="";

  }




