

function Captcha() 
{  
  const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let captchaCode = "";
  for (let i = 0; i < 6; i++) 
  {
     captchaCode += chars[Math.floor(Math.random() * chars.length)];
  }
  document.getElementById("txtCaptcha").value = captchaCode;  
} 
 


$('.sign-in-buttom').click(function () {
  if ($('input[type="radio"]:checked').length > 0) {
      $('#login-form').slideToggle();
  } else {
      alert('يرجى اختيار كتاب أولاً.');
  }
});



function validateForm() 
{
  var number_s = document.getElementById("number_s").value;
  if (number_s == "") 
  {
    alert("يرجى ملء حقل الرقم الوطني");
    return false;    
  }







  var myUsername = document.getElementById("myUsername").value;
  if (myUsername == "") 
  {
    var regex = /[ء-ي]/;
    alert("يرجى ملء حقل الاسم");
    return false;
  }
  var regexEnglish = /[a-zA-Z]/;
  if (regexEnglish.test(myUsername)) 
  {
    alert("يرجى إدخال الاسم باللغة العربية");
    return false;
  }






 
var firstTwoDigits = number_s.substring(0, 2);
var validProvinces = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14"];
if (!validProvinces.includes(firstTwoDigits)) {
  alert("الرقم الوطني غير صحيح");
  return false;
}






  var date1 = document.getElementById("date1").value;
  if (date1 == "") 
  {
    alert("يرجى ملء حقل تاريخ الولادة");
    return false;
  }   
  
  

  
  var phonenumber = document.getElementById("phonenumber").value;
  if (phonenumber == "") 
  {
    alert("يرجى ملء حقل رقم الهاتف");
    return false;
  }     
  var email = document.getElementById("email").value;
  if (email == "") {
    alert("يرجى ملء حقل البريد الإلكتروني");
    return false;
  }   
  var txtCaptcha = document.getElementById("txtCaptcha").value;
  var txtCompare = document.getElementById("txtCompare").value;
  if (txtCaptcha != txtCompare) 
  {
    alert("رمز التحقق من الكابتشا غير صحيح");
    return false;
  }
  return true;    
}

var purchaseButton = document.getElementById('purchaseButton').value;
var button_submit = document.getElementById('button_submit');


button_submit.onclick =   function() 
{
  
  if(purchaseButton.trim() === ''){
    window.alert('error')
  }
  else if(purchaseButton.length !== 11){
    window.alert('success')
  }
  else{
    window.alert('تم شراء العقار بنجاح')
  }
}



