/**
 * Created by mshuang on 2017/6/12.
 */
//获取输入框元素及输入的变量
var input_name = document.getElementById('input_name');
var input_pwd = document.getElementById('input_pwd');
var confirm_pwd = document.getElementById('confirm_pwd');
var input_email = document.getElementById('input_email');
var input_phone = document.getElementById('input_phone');

//获取提示框元素
var name_help = document.getElementById('name_help');
var pwd_help = document.getElementById('pwd_help');
var pwd_again = document.getElementById('pwd_again');
var email_help = document.getElementById('email_help');
var phone_help = document.getElementById('phone_help');

//提交按钮
var btn = document.getElementById('button');
//判断所有输入都通过的全局变量
var flag = 0;

//获取字符长度
function str_get_len(str){
    var len = 0;
    for(var i=0;i<str.length; i++){
        if(str.charCodeAt(i)>0 && str.charCodeAt(i)<128){
            len++;
        }else{
            len = len + 2;
        }
    }
    return len;
}

//姓名校验
function name_valid(){
    if(input_name.value == ""){
        input_name.style.borderColor = 'red';
        name_help.style.visibility = 'visible';
        name_help.innerHTML = '名称不能为空';
        name_help.style.color = 'red';
    }else{
        if(str_get_len(input_name.value)<4 || str_get_len(input_name.value>16)){
            input_name.style.borderColor='red';
            name_help.style.visibility = 'visible';
            name_help.innerHTML = '名称字符个数为4-16个字符之间';
            name_help.style.color = 'red';
        }else{
            input_name.style.borderColor='green';
            name_help.style.visibility = 'visible';
            name_help.innerHTML = '格式正确';
            name_help.style.color = 'green';
            flag++;
        }
    }
}

//密码校验
function pwd_valid(){
    if(input_pwd.value == ""){
        input_pwd.style.borderColor = 'red';
        pwd_help.style.visibility = 'visible';
        pwd_help.style.color = 'red';
        pwd_help.innerHTML = '密码不能为空';
    }else{
        if(str_get_len(input_pwd.value)<4 ||str_get_len(input_pwd.value)>16){
            input_pwd.style.borderColor = 'red';
            pwd_help.style.visibility = 'visible';
            pwd_help.style.color = 'red';
            pwd_help.innerHTML = '密码为4-16位字符';
        }else{
            input_pwd.style.borderColor = 'green';
            pwd_help.style.visibility = 'visible';
            pwd_help.style.color = 'green';
            pwd_help.innerHTML = '密码格式正确';
            flag++;
        }
    }
}

//两次密码是否相同
function pwd_same(){
    if(confirm_pwd.value == ""){
        confirm_pwd.style.borderColor = 'red';
        pwd_again.style.visibility = 'visible';
        pwd_again.innerHTML = '密码不能为空';
        pwd_again.style.color = 'red';
    }else{
        if(input_pwd.value == confirm_pwd.value){
            confirm_pwd.style.borderColor = 'green';
            pwd_again.style.visibility = 'visible';
            pwd_again.innerHTML = '两次密码一致';
            pwd_again.style.color = 'green';
            flag++;
        }else{
            confirm_pwd.style.borderColor = 'red';
            pwd_again.style.visibility = 'visible';
            pwd_again.innerHTML = '两次密码不一致';
            pwd_again.style.color = 'red';
        }
    }
}

//手机号码校验
function phone_valid(){
    if(input_phone.value != "") {
        var reg = /^1[34578]\d{9}$/;
        if (reg.test(input_phone.value)) {
            input_phone.style.borderColor = 'green';
            phone_help.style.visibility = 'visible';
            phone_help.innerHTML = '手机号码格式正确';
            phone_help.style.color = 'green';
            flag++;
        } else {
            input_phone.style.borderColor = 'red';
            phone_help.style.visibility = 'visible';
            phone_help.innerHTML = '手机号码格式错误';
            phone_help.style.color = 'red';
        }
    }else{
        input_phone.style.borderColor = 'red';
        phone_help.style.visibility = 'visible';
        phone_help.innerHTML = '手机号码不能为空';
        phone_help.style.color = 'red';
    }

}

//邮箱校验
function email_valid(){
    if(input_email.value != ""){
        var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
        if(reg.test(input_email.value)) {
            input_email.style.borderColor='green';
            email_help.style.visibility = 'visible';
            email_help.innerHTML = '邮箱格式正确';
            email_help.style.color = 'green';
            flag++;
        }else{
            input_email.style.borderColor='red';
            email_help.style.visibility = 'visible';
            email_help.innerHTML = '邮箱格式错误';
            email_help.style.color = 'red';
        }
    }else{
        input_email.style.borderColor='red';
        email_help.style.visibility = 'visible';
        email_help.innerHTML = '邮箱格式错误';
        email_help.style.color = 'red';
    }
}

//名称输入框：元素获取焦点和失去焦点
input_name.addEventListener('focus',function(){
    name_help.style.visibility = 'visible';
});
input_name.addEventListener('blur', function () {
    name_valid();
});

//密码输入框：元素获取焦点和失去焦点
input_pwd.addEventListener('focus',function(){
    pwd_help.style.visibility = 'visible';
});
input_pwd.addEventListener('blur',function(){
    pwd_valid();
});

//密码输入框：元素获取焦点和失去焦点
confirm_pwd.addEventListener('focus', function () {
    pwd_again.style.visibility = 'visible';
});
confirm_pwd.addEventListener('blur',function(){
    pwd_same();
});

//邮箱输入框：元素获取焦点和失去焦点
input_email.addEventListener('focus',function(){
    email_help.style.visibility = 'visible';
});
input_email.addEventListener('blur',function() {
    email_valid();
});

//手机号码输入框：元素获取焦点和失去焦点
input_phone.addEventListener('focus',function(){
    phone_help.style.visibility = 'visible';
});
input_phone.addEventListener('blur', function () {
   phone_valid();
});

//提交按钮
btn.addEventListener('click',function(){
    if(flag <= 4){
        alert('输入内容有误');
    }else{
        alert('输入正确');
    }
},false);