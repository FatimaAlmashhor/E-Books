// const get_one = (element) => document.querySelector(element)
import { get_one } from './main';
const requirment_list = get_one('#required-table');
const comments_list = get_one('#comments');
import { reqs, comments } from '../../utils/damoData';


const _fetchData = (arr) => {
  arr.forEach(element => {
    let li_element = document.createElement('div');
    li_element.innerHTML =
      `
        <p class="">${element.key}</p>
        <p class="mx-6 font-bold" >${element.value}</p>
      `;
    li_element.className = "table-row  flex-row p-1 py-2 border-b-1 border-gray";
    requirment_list.append(li_element);
  })
  console.log('i am the loop element', arr);
}

const _fetchComments = (arr) => {
  arr.forEach(element => {
    let li_element = document.createElement('div');
    li_element.innerHTML =
      `
            <div class="bg-gray p-1 rounded-5">
            <p>${element.text}</p>
            <div class="flex-row font-14 color-gray justify_content_between w-full">
              <p class="">من قبل ${element.user}</p>
              <p>${element.data}</p>
            </div>
          </div>
          <div class="px-1 py-5px color-gray">
            ${element.evaluation}
          </div>
      `;
    li_element.className = "p-1";
    comments_list.append(li_element);
  })
  console.log('i am the loop element', arr);
}
_fetchData(reqs);
_fetchComments(comments)