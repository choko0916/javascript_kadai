

function clickbtn(button) {
  let result = document.getElementById('result');
  let buttonValue = button.innerHTML;
  let point = document.getElementById('point');
  
    if (buttonValue == "AC") {
      result.textContent = 0;
      point.disabled = false;
    }
    else if (buttonValue == "=") {
      result.textContent = eval(result.textContent);
      point.disabled = false;
    }
    else {
      if (result.textContent == 0) {
        result.textContent = buttonValue;
      }
      else { 
        result.textContent = result.textContent + buttonValue;
      }
    }
  } 
    
  function clickOperator(button) {
    let result = document.getElementById('result');
    let buttonValue = button.innerHTML;
    let plus = document.getElementById('plus');
    let minus = document.getElementById('minus');
    let asterisk = document.getElementById('asterisk');
    let slash = document.getElementById('slash');
    let point = document.getElementById('point');
    
    point.disabled = false;
    
    if (result.textContent.slice(-1) == plus.textContent //もし文字列の最後の文字が+なら
        || result.textContent.slice(-1) == minus.textContent　//または-なら
        || result.textContent.slice(-1) == asterisk.textContent 
        || result.textContent.slice(-1) == slash.textContent)
      {
        let removeLastOperator = result.textContent.slice(0, -1); //文字列の最後の文字を削除
        result.textContent = removeLastOperator + buttonValue;
      }
    else {
       result.textContent = result.textContent + buttonValue;   
      }
  }  
  
  function clickPoint(button) {
    let result = document.getElementById('result');
    let point = document.getElementById('point');
    
    point.disabled = true;
    result.textContent += point.textContent;
  }
  
//0.7など入力できるようにする→質問する？
// 1/2 デバッグ勉強する
