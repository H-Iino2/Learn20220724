document.getElementById("money-button").onclick = function() {

    //購入者を定義
    let purchaser = document.getElementById("purchaser").value;

    //購入品を定義
    let goods;
    goods = document.getElementById("goods").value;

    //購入金額を定義
    let pay = document.getElementById("pay").value
    numPay = Number(pay);

    let APay;
    let BPay;


    if (purchaser === "A"){
      document.getElementById("left-result-goods").insertAdjacentHTML('beforeend','<p>'+goods+ '</p>');
      document.getElementById("left-result-pay").insertAdjacentHTML('beforeend','<p>'+numPay+ '円<p>');
    } else if(purchaser === "B"){
      document.getElementById("right-result-goods").insertAdjacentHTML('beforeend','<p>'+goods+ '</p>');
      document.getElementById("right-result-pay").insertAdjacentHTML('beforeend','<p>'+numPay+ '円</p>');
    } 



  }

