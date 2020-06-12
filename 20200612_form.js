var formData={
  staticEmail:null,
  exampleInputEmail1:null,
  exampleInputPassword1:null,
  exampleInputSelect1:null,
  exampleInputSelect2:null,
  exampleInputSelect3:null,
  optionRadios1:null,
  optionRadios2:null,
  optionRadios3:null,
  check1:null,
  check2:null,
  customRange1:null
};

// 把要在console可看到的變數在此宣告
// var ...; 

// 確保整個html文件DOM已完整才進行js
$(document).ready(function(){
  
$("#form1").change(function(){
    console.log(document.forms.form1.exampleTextarea.value);
    $("#result").text(document.forms.form1.exampleTextarea.value);
  });
});