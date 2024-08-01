// 取得送出按鈕(擇其一)
// let myBtn = document.getElementById('btn');
let myBtn = document.querySelector('#btn');
// 監聽按鈕是否被左鍵點擊
myBtn.addEventListener('click', () => {
    let result = "";
    //取得科目全部
    let subjects = document.getElementsByName('subject');
    console.log(subjects);
    console.log(typeof subjects);
    // 使用迴圈逐一檢查是否被選取 => checked
    for (let i = 0; i < subjects.length; i++) {
        if(subjects[i].checked){
            // 取得選項按鈕的值
            result=subjects[i].value;
            // 因為是單選，所以找到後就結束迴圈
            console.log(result);
            console.log(typeof result);
            break;
        }
    }
console.log(`選擇的科目: ${result}`);

});
