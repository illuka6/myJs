// 使用name屬性 取得元素內容
let myDrinks = document.getElementsByName('drinks');
console.log(myDrinks);

for (let i = 0; i < myDrinks.length; i++) {
    // console.log(myDrinks.item(i).value);
    console.log(myDrinks[i].value);
}

//取得勾選項目內容
// 1.找到按鈕
let myBtn = document.querySelector('#btn');
// 2.監聽按鈕是否被按了(click => 左鍵一下的事件)
myBtn.addEventListener('click', () => {
    let arrResult = [];
    let arrResultNot = [];
    let allDrinks = document.getElementsByName('drinks');
    // 逐一檢查是否被勾選=>checked
    for (let i = 0; i < myDrinks.length; i++) {
        // 有被勾選的項目:
        if (allDrinks[i].checked) {
            arrResult.push(allDrinks[i].value);
        }
        // 沒有被勾選的項目=>使用NOT反向 => !
        if (!allDrinks[i].checked) {
            arrResultNot.push(allDrinks[i].value);
        }

    }
    console.log("勾選的飲料"+arrResult);
    console.log("沒勾選的飲料"+arrResultNot);

    // 給值
    // getDiv.textContent = 'test';
    // getDiv.innerHTML = '<li>${arrResult[i]}<li>';
    // getDiv.innerHTML = '<li>${arrResultNot[i]}<li>';
    // 被勾選
    let str1 = '';
    if (arrResult.length > 0) {
        str1 = '<div><ul>被勾選項目';
        // 被選取的li
        for (let i = 0; i < arrResult.length; i++) {
            str1 = str1 + `<li>${arrResult[i]}</li>`;
        }
        str1 = str1 + '</ul></div>';
    }

    // 沒有被勾選
    let str2 = '';
    if (arrResultNot.length > 0) {
        str2 = '<div><ul>沒被勾選項目';
        // 被選取的li
        for (let i = 0; i < arrResultNot.length; i++) {
            str2 = str2 + `<li>${arrResultNot[i]}</li>`;
        }
        str2 = str2 + '</ul></div>';


    }
    // 取得顯示資料的位置
    let getDiv = document.getElementById('showData');
    getDiv.innerHTML=str1+str2;
});