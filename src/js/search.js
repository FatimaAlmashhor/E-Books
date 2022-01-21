const get_one = (element) => document.querySelector(element);
const get_all = (element) => document.querySelectorAll(element);
// import {get_one , get_all} from './main' ;
const product_list = get_one('#product_list')
const cart_counter = get_one('#cart-counter')
const damoData = [
  {
    id: 0,
    name: 'لانك الله',
    title: 'كتاب الكتروني',
    price: "19.22",
    img: "../assets/images/465531.jpg",
  },
  {
    id: 0,
    title: 'كتاب الكتروني',
    name: 'كلي ونامي ',
    price: "19.22",
    img: "../assets/images/465531.jpg",
  },
  {
    id: 0,
    title: 'كتاب الكتروني',
    name: ' نون النسوه',
    price: "19.22",
    img: "../assets/images/465531.jpg",
  },
  {
    id: 0,
    title: 'كتاب الكتروني',
    name: 'تخاريف  ',
    price: "19.22",
    img: "../assets/images/465531.jpg",
  },
  {
    id: 0,
    title: 'كتاب الكتروني',
    name: 'علم النفس  ',
    price: "19.22",
    img: "../assets/images/465531.jpg",
  },
  {
    id: 0,
    title: 'كتاب الكتروني',
    name: 'علم النفس  ',
    price: "19.22",
    img: "../assets/images/465531.jpg",
  },

]
let current_counter = 0;
let storeCart = localStorage.getItem('cart_counter');
window.onload = () => {
  _fetchData(damoData);

  // add to cart function 

  console.log('[storeCart]', storeCart);
  storeCart = storeCart === null ? 0 : storeCart;
  current_counter = storeCart;
  cart_counter.innerText = current_counter > 9 ? "9+" : current_counter;
  get_all('.cart_icon').forEach(element => {
    element.addEventListener('click', (e) => {
      current_counter++;
      cart_counter.innerText = current_counter > 9 ? "9+" : current_counter;
      localStorage.setItem('cart_counter', current_counter)
    })
  })

}

const _fetchData = (arr) => {
  arr.forEach(element => {
    let li_element = document.createElement('li');
    li_element.innerHTML = `
  <div  class="product_warpper flex-col">
    <a href="./details.html">
      <div class="product_img">
        <img src="${element.img}" alt="">
      </div>
    </a>
    <div class="product_content">
      <a href="./details.html">
        <div class="product_name">
          <h4 class="">${element.title}</h4>
          <p class='color-gray'>${element.name}</p> 
        </div>
        <div class="product_price color-red">
          <h3 class="font-bold">${element.price}<small>ر.ي</small></h3>
          <p class="font-12 color-gray">شامل الضريبه</p>
        </div>
      </a>
      <!-- <div class="product_more-info">
        inforamtion
      </div> -->
      <div class="product_interactive flex-row  justify_content_around ">
        <span class="w-20  flex-center ">
          <img src="../assets/svgs/star.svg" />
        </span>
        <span class=" cart_icon w-20 adding-cart">
          <img src="../assets/svgs/white-card.svg" />
        </span>
        <span class="w-20">
          <img src="../assets/svgs/two-arrow.svg" />
        </span>
        
      </div>
    </div>
  </div>`;
    li_element.className = 'product m-1'
    product_list.append(li_element);
  })
  console.log('i am the loop element', arr);
}
// get_one('#search_btn').addEventListener('click', (e) => {

// })
// document.addEventListener('keydown')
get_one('#search_input').addEventListener('keydown', async (e) => {
  product_list.innerHTML = '';
  console.log(e.target.value);
  let filter = damoData.filter(element => {
    if (element.name.includes(e.target.value))
      return element
  })

  console.log('[filter ] , ', filter);
  await _fetchData(filter);

  if (e.target.value.length === '') {
    _fetchData(damoData)
  }
})



