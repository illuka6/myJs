/* // 取得元素節點
// 根據id屬性
let myjs = document.getElementById("js");
console.log(typeof myjs);
console.log(myjs.textContent);

// 根據html標籤
let myLi=document.getElementsByTagName('li');
// 得HTMLCollection=>集合物件
console.log(myLi);
// 取出css內容 => .item(陣列編號)=>取得集合物件內的內容
console.log(myLi.item(1).textContent);
console.log(myLi[1].textContent);

// 顯示所有的li內容
for (let i=0; i<myLi.length;i++){
    console.log(myLi.item(i).textContent);
    console.log(myLi[i].textContent);
}
console.log(document.querySelector('h1'));
console.log(document.getElementsByTagName('h1'));
console.log(document.getElementsByTagName('h1').item(0).textContent);
console.log(document.getElementsByTagName('h1')[0].textContent);
// 使用類別名稱

let mySubjects = document.getElementsByClassName('subjects');
console.log(mySubjects);
for (let i=0;i<mySubjects.length; i++) {
    console.log(mySubjects.item(i).textContent);
    console.log(mySubjects[i].textContent);
}
console.log(mySubjects['css'].textContent);
 */


// 取得id#p1
console.log(document.getElementById('p1').textContent);
console.log(document.querySelector('#p1').textContent);

// 取得li中的p
let myP = document.querySelector('p');
console.log(myP);

// 取得li子元素中的p,孫元素(div內的p)被跳過
let myP1 = document.querySelectorAll('li>p');
console.log(myP1);
console.log(myP1[0].textContent); 


let myP2 = document.querySelector('li>div>p');
console.log(myP2);
// 使用querySelectorAll得到的是集合元素=>.textContent印出內容時使用陣列定位
let myP3 = document.querySelectorAll('li>div>p');
console.log(myP3[0].textContent);