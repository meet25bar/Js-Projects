const productlist = document.getElementById("product-list");
const searchinput = document.getElementById("search-input");
const searchbtn = document.getElementById("search-btn");
const categorybtn = document.querySelectorAll(".category-btn");

function filterproduct(){
const searchvalue = searchinput.value.toLowerCase();
const productItems = document.querySelectorAll(".product-item")
const activeCategoryBtn = document.querySelector(".category-btn.active");
const activeCategory = activeCategoryBtn ? activeCategoryBtn.dataset.category.toLowerCase() : "all";

productItems.forEach(item=>{
    const title = item.querySelector("h3").innerText.toLowerCase();
  
    const category = item.dataset.category.toLowerCase();

    if((title.includes(searchvalue) || searchvalue=="") && (category === activeCategory || activeCategory === "all")){
        item.style.display="block"
    }
    else{
        item.style.display="none"
    }
})
}

function setCategory(e){
  categorybtn.forEach(btn=> btn.classList.remove("active"));
    e.target.classList.add("active")
    filterproduct();
  
}

searchbtn.addEventListener('click',filterproduct);
searchinput.addEventListener('keyup',filterproduct);
categorybtn.forEach(btn => {
    btn.addEventListener("click",setCategory)
});
filterproduct();