// 建立一個存放結果的變數
let result = "";
// 取得送出按鈕
let myBtn = document.querySelector('#btn');
// 監聽
myBtn.addEventListener('click', () => {
    // 取得下拉式方塊
    let myCity = document.querySelector('#city');
    // 逐一檢查是否被選取 =>seleced
    for (let i = 0; i < myCity.length; i++) {
        if (myCity[i].selected) {
            if (myCity[i].value == "") {
                result = '尚未選取';
            } else {
                result = myCity[i].value;
                break;
            }
        }
    }
    console.log('所選縣市:' + result);
});

let arrCity = ['台北市', '新北勢', '桃園市'];
                for (let i = 0; i < arrCity.length; i++) {
                    let opt= opt.innerHTML(`<option value=${arrCity[i]}>${arrCity[i]}</option>`);
                }