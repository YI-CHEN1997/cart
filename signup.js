var password=document.getElementById('pwd1');
var length=document.getElementById('length');
var uppercase=document.getElementById('uppercase');
var lowercase=document.getElementById('lowercase');
var number=document.getElementById('number');

password.onfocus=function(){
  document.getElementById('rule').style.display="block"
}

password.onblur=function(){
  document.getElementById('rule').style.display="none"
}

// onkeyup 在輸入的時候
password.onkeyup = function(){

// 確認是否大於8
if (password.value.length >=8){
  length.classList.remove('invalid')
  length.classList.add('valid')
} else {
  length.classList.add('invalid')
  length.classList.remove('valid')
}

// 確認是否大寫  g搜尋配對的功能
var upperletter=/[A-Z]/g;
if (password.value.match(upperletter)){
  uppercase.classList.remove('invalid')
  uppercase.classList.add('valid')
} else {
  uppercase.classList.add('invalid')
  uppercase.classList.remove('valid')
}

// 確認是否小寫
var lowerletter=/[a-z]/g;
if (password.value.match(lowerletter)){
  lowercase.classList.remove('invalid')
  lowercase.classList.add('valid')
} else {
  lowercase.classList.add('invalid')
  lowercase.classList.remove('valid')
}

// 確認是否有數字
var num=/[0-9]/g;
if (password.value.match(num)){
  number.classList.remove('invalid')
  number.classList.add('valid')
} else {
  number.classList.add('invalid')
  number.classList.remove('valid')
}

}

var password2=document.getElementById('pwd2');

password2.onkeyup = function(){
 if (password.value==password2.value){
  var pw2 = document.querySelector('#pwdnomatch')
  pw2.textContent='';
 } else{
  var pw2 = document.querySelector('#pwdnomatch')
  pw2.textContent='密碼不一致';
}
}