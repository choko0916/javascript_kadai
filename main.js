

function clickbtn(button) {
  let result = document.getElementById('result');
  let  buttonValue = button.innerHTML;
  let Dot = document.getElementById('dot');
  
    if ( buttonValue == "AC") {
      result.textContent = 0;
      dot.disabled = false;
    }
    else if ( buttonValue == "=") {
      result.textContent = eval(result.textContent);
      dot.disabled = false;
    }
    else {
      if (result.textContent == "0") {
        result.textContent =  buttonValue;
        dot.disabled = false;
      }
      else { 
        result.textContent = result.textContent +  buttonValue;
        dot.disabled = false;
      }
    }
  } 
    
  function clickOperator(button) {
    let result = document.getElementById('result');
    let  buttonValue = button.innerHTML;
    let plus = document.getElementById('plus');
    let minus = document.getElementById('minus');
    let asterisk = document.getElementById('asterisk');
    let slash = document.getElementById('slash');
    let dot = document.getElementById('dot');
    
    
    if (result.textContent.slice(-1) == plus.textContent //もし文字列の最後の文字が+なら
        || result.textContent.slice(-1) == minus.textContent　//または-なら
        || result.textContent.slice(-1) == asterisk.textContent 
        || result.textContent.slice(-1) == slash.textContent)
      {
        let removeLastOperator = result.textContent.slice(0, -1); //文字列の最後の文字を削除
        result.textContent = removeLastOperator + buttonValue;
        dot.disabled = false;
      }
    else {
       result.textContent = result.textContent + buttonValue;
       dot.disabled = false;
      }
  }  
  
  function clickDot(button) {
    let result = document.getElementById('result');
    let dot = document.getElementById('dot');
    
      if (result.textContent.slice(-1) == ".") {
       let removeLastDot = result.textContent.slice(0, -1);
       result.textContent = removeLastDot + "."
       dot.disabled = false;
     }
      else if (result.textContent.slice(-1) == plus.textContent //もし文字列の最後の文字が+なら
      || result.textContent.slice(-1) == minus.textContent　//または-なら
      || result.textContent.slice(-1) == asterisk.textContent 
      || result.textContent.slice(-1) == slash.textContent)
    {
      dot.disabled = true; //符号の後は.を押せないようにする
    }
      else {
        result.textContent += dot.textContent;
        dot.disabled = false;
      }
  }
  
// 1/2 デバッグ勉強する
