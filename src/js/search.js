const get_one = (element) => document.querySelector(element);
const get_all = (element) => document.querySelectorAll(element);
// import {get_one , get_all} from './main' ;
const product_list = get_one('#product_list')
const cart_counter = get_one('#cart-counter')
import { damoData } from '../../utils/damoData'

let current_counter = 0;
window.onload = () => {
  _fetchData(damoData);


  // add to cart function 
  let storeCart = localStorage.getItem('cart_counter');
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
    li_element.innerHTML = `<div  class="product_warpper flex-col">
    <div class='product_img'>
      <img src=${element.img} alt="">
    </div>
    <div class="product_content">
      <div class="product_name">
        <h4 class="font-bold">${element.title}</h4>
        <!-- <p>something</p> -->
        <p class='color-gray font-14'>${element.name}</p>
      </div>
      <div class="product_price color-red">
        <h3 class="font-bold">${element.price}<small>ر.ي</small></h3>
        <p class="font-12 color-gray">شامل الضريبه</p>
      </div>
      <!-- <div class="product_more-info">
        inforamtion
      </div> -->
      <div class="product_interactive flex-row  justify_content_around ">
        <span class="w-20  flex-center ">
          <img src="../assets/svgs/star.svg" />
        </span>
        <span class="cart_icon adding-cart w-20">
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



