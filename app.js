// title
document.title = "New Title";


// header 
const header = document.getElementById('header');
header.classList.add('s100A_flash_title');
const headerText = header.innerText = 'ComBo Offer';


// function new tag create
const newPTagFun = (parentsId,text)=>{
    const mainParent = document.getElementById(parentsId);
    const spanTag = document.createElement('span');
    spanTag.innerText = text;
    mainParent.append(spanTag);
    return  mainParent;
}

// sub header 
const subHeaderHomeText = newPTagFun('subHeaderHome','Home');
const subHeaderOtherText = newPTagFun('sub-header-text','Combo Offer');




// function counter
function counterFun (haveTimeDivider,innerHtml,parentsId){
    const spanTag = document.createElement('span');
    const mainParent = document.getElementById(parentsId);
    
    if(haveTimeDivider){
        const allDivider = document.querySelectorAll('.s100A_time_divider');
        for(const each of allDivider){
            each.innerText =':-'
        }
    }
    else{
        mainParent.innerHTML = innerHtml;
        return mainParent;
    }
}

counterFun(false,'<span class="s100A_combo_counter_number">07d</span>','counter-1');
counterFun(true);
counterFun(false,'<span class="s100A_combo_counter_number">05h</span>','counter-2');
counterFun(false,'<span class="s100A_combo_counter_number">02m</span>','counter-3');
counterFun(false,'<span class="s100A_combo_counter_number">25s</span>','counter-4');








// function batchFun
function itemBatchFun (){
    const batchMain = document.querySelector('.s100A_product_batch_wrapper');
    const batchTag = createTag('span','s100A_product_batch_txt');
    batchTag.innerText = 'Sale_';
    return batchMain.appendChild(batchTag)
    
    
    // console.log(parents.length)
    // for(i=0; i<parents.length; i++){
    //     const span = document.createElement('span');
    //     span.classList.add('s100A_product_batch_txt')
    //     span.innerText = 'Sale__';
    //     parents[i].appendChild(span)
    // }
}


function createTag(tagName,className){
    const div = document.createElement(tagName.toLowerCase());
    div.classList.add(className);
    return div;
}

function imgaeFun (){
    const imgaeContainer = document.querySelector(".s100A_product_img_wrapper");
    const img = createTag('img','s100A_product_img');
    img.src='images/product1.jpg'
    imgaeContainer.appendChild(img);
    return imgaeContainer
}


// item name variant and price 
function itemNamePrice(){
    const mainContainer =document.querySelector('.s100A_product_bottom_area s100A_combo_single_product_bottom_background');
    
    // item name
    const nameMain = document.querySelector('.s100A_product_name_wrapper');
    const name = createTag('span','s100A_product_name');
    name.innerText ='Item Name';
    nameMain.appendChild(name);
    
    // item variant 
    const variantMain = document.querySelector('.s100A_product_variant_wrapper');
    const variantName = createTag('span','s100A_product_variant');
    variantName.innerText = 'Black';
    variantMain.appendChild(variantName);
    
    // item price
    const priceMainContainer =document.querySelector('.s100A_product_price_wrapper');
    
    const oldPriceContainer = document.querySelector('.s100A_product_old_price_wrapper')
    const oldPrice = createTag('span','s100A_product_old_price');
    oldPrice.innerText = 'BDT3500';
    oldPriceContainer.appendChild(oldPrice);
    
    const newPriceContainer = document.querySelector('.s100A_product_new_price_wrapper');
    const newPrice = createTag('span','s100A_product_new_price');
    newPrice.innerText = 'BDT3200';
    newPriceContainer.appendChild(newPrice)
    
    priceMainContainer.appendChild(oldPriceContainer,newPriceContainer)
    
    // final append 
    return mainContainer.append(nameMain,variantMain,priceMainContainer);
}



// cart icon function 
function cartIconFun (){
    const mainContainer =  document.querySelector('.s100A_wishlist_cart_icon_wrapper');
    
    const  first = document.querySelector('.s0604_wishlist_icon');
    const firstIcon = createTag('span','icon');
    firstIcon.innerText ='🥵'
    first.appendChild(firstIcon);
    
    const  second = document.querySelector('.s0604_separator');
    const secondIcon = createTag('span','icon');
    secondIcon.innerText ='||'
    second.appendChild(secondIcon);
    
    const  third = document.querySelector('.s0604_cart_icon');
    const thirdIcon = createTag('span','icon');
    thirdIcon.innerText ='🥱'
    third.appendChild(thirdIcon);    
    
    return mainContainer.append(first,second,third);
}


// rating 
function ratingFun(){
    const main = document.querySelector('.s100A_product_rating');
    
        let allStar = ''
        for(i=1; i<=5; i++){
            const li = createTag('li','s100A_product_rating_start');
            li.innerText =allStar+'*'
            main.appendChild(li);
        }
}
ratingFun();



// main function
const MainCartItemFun = ()=>{
    const productContainer = document.getElementById('product-wraper');
    const product = document.querySelector('.s100A_combo_single_product');
    
    const fcartIconFun = cartIconFun()
    
    // batch funcition call
    const fItemBatch = itemBatchFun();
    
    
    //  imageFun function call
    const fImageFun = imgaeFun();     
    
    // function nameBatchprice
    const fItemNPrice =  itemNamePrice();
    
    product.append(fItemBatch,fImageFun,fcartIconFun,fItemNPrice);
    return productContainer.appendChild(product);
}


MainCartItemFun();
MainCartItemFun();
MainCartItemFun();
MainCartItemFun();