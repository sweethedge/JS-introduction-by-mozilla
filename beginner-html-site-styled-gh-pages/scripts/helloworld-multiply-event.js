let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

function multiply(num1,num2) {
  let result = num1 * num2;
  return result;
}

// 브라우저 내의 콘솔 창에서 직접 입력해야 실행된다.


// 이벤트 만들기 첫 번째 방법.
/* document.querySelector('html').onclick = function() {
  alert('Ouch! Stop poking me!');
} */

// 이벤트 만들기 두 번째 방법.
/* let myHTML = document.querySelector('html');
myHTML.onclick = function() {
  alert('Ouch! Stop poking me!')
}; */

n