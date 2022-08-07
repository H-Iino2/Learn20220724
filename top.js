let APay = null;
let BPay = null;
let finPay = null;

document.getElementById("money-button").onclick = function() {

    //購入者を定義
    let purchaser = document.getElementById("purchaser").value;

    //購入品を定義
    let goods;
    goods = document.getElementById("goods").value;

    //購入金額を定義
    let pay = document.getElementById("pay").value
    numPay = Number(pay);




    if (purchaser === "A"){
      document.getElementById("left-result-goods").insertAdjacentHTML('beforeend','<p>'+goods+ '</p>');
      document.getElementById("left-result-pay").insertAdjacentHTML('beforeend','<p>'+numPay+ '円<p>');
      APay = APay + numPay;
      document.getElementById("left-pay-merge").innerHTML=APay;
    } else if(purchaser === "B"){
      document.getElementById("right-result-goods").insertAdjacentHTML('beforeend','<p>'+goods+ '</p>');
      document.getElementById("right-result-pay").insertAdjacentHTML('beforeend','<p>'+numPay+ '円</p>');
      BPay = BPay + numPay;
      document.getElementById("right-pay-merge").innerHTML=BPay;
    } 

    if (APay > BPay){
      finPay = APay - BPay;

      finMessage = 'AがBに' + finPay + '円払う'
      document.getElementById("fin-pay").innerHTML = finMessage;
    } else if (APay < BPay){
      finPay = BPay - APay;

      finMessage = 'BがAに' + finPay + '円払う'
      document.getElementById("fin-pay").innerHTML = finMessage;
    }

    console.log(finMessage);


    //入力フォームをリセット]
    document.getElementById("goods").value = "";
    document.getElementById("pay").value = "";

    

//gitest
  }


