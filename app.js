// Candy object
const candy = [
    {
        id:1,
        category:"gummy-candy",
        img:"./image/img1.jpg"
    },
    {
        id:2,
        category:"chocolate",
        img:"./image/img2.jpg"
    },  
    {
        id:3,
        category:"chocolate",
        img:"./image/img3.jpg"
    }, 
    {
        id:4,
        category:"lollipop",
        img:"./image/img4.jpg"
    },  
    {
        id:5,
        category:"chocolate",
        img:"./image/img5.jpg"
    },  
    {
        id:6,
        category:"gummy-candy",
        img:"./image/img6.jpg"
    },  
    {
        id:7,
        category:"lollipop",
        img:"./image/img7.jpg"
    },  
    {
        id:8,
        category:"lollipop",
        img:"./image/img8.jpg"
    },  
    {
        id:9,
        category:"lollipop",
        img:"./image/img9.jpg"
    },
]; 

const btn = document.querySelector(".filter-button");
const gallary = document.querySelector(".gallary");

// load the button
function displayButton(){
    const cate = candy.reduce(function(values ,item){
        if(!values.includes(item.category)){
            values.push(item.category);
        }
        return values;
    },["all"]);
    console.log(cate);

    const categoryBtn = cate.map(function(category){
        return`<button class="filter" data-id=${category}>${category}</button>`
    }).join("");
    btn.innerHTML = categoryBtn;

    const filter = btn.querySelectorAll(".filter");
    filter.forEach(function(item){
        item.addEventListener('click',function(e){
            const categorys = e.currentTarget.dataset.id;
            const finalFilter =candy.filter(function(gallarys){
                if(gallarys.category === categorys){
                    return gallarys;
                }

            })
            if(categorys === 'all'){
                displayGallary(candy);
            }else{
                displayGallary(finalFilter);
            }
        })
    })
}

function displayGallary(finalFilter){
    let display = finalFilter.map(function(item){
        return` <img src=${item.img} alt=${item.img} />`
    }).join(""); 
    gallary.innerHTML = display;
}

window.addEventListener('DOMContentLoaded',function(){
    displayButton();
    displayGallary(candy);
})
 