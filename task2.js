/**
 * Created by mshuang on 2017/6/12.
 */
//��ȡ�����Ԫ�ؼ�����ı���
var input_name = document.getElementById('input_name');
var input_pwd = document.getElementById('input_pwd');
var confirm_pwd = document.getElementById('confirm_pwd');
var input_email = document.getElementById('input_email');
var input_phone = document.getElementById('input_phone');

//��ȡ��ʾ��Ԫ��
var name_help = document.getElementById('name_help');
var pwd_help = document.getElementById('pwd_help');
var pwd_again = document.getElementById('pwd_again');
var email_help = document.getElementById('email_help');
var phone_help = document.getElementById('phone_help');

//�ύ��ť
var btn = document.getElementById('button');
//�ж��������붼ͨ����ȫ�ֱ���
var flag = 0;

//��ȡ�ַ�����
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

//����У��
function name_valid(){
    if(input_name.value == ""){
        input_name.style.borderColor = 'red';
        name_help.style.visibility = 'visible';
        name_help.innerHTML = '���Ʋ���Ϊ��';
        name_help.style.color = 'red';
    }else{
        if(str_get_len(input_name.value)<4 || str_get_len(input_name.value>16)){
            input_name.style.borderColor='red';
            name_help.style.visibility = 'visible';
            name_help.innerHTML = '�����ַ�����Ϊ4-16���ַ�֮��';
            name_help.style.color = 'red';
        }else{
            input_name.style.borderColor='green';
            name_help.style.visibility = 'visible';
            name_help.innerHTML = '��ʽ��ȷ';
            name_help.style.color = 'green';
            flag++;
        }
    }
}

//����У��
function pwd_valid(){
    if(input_pwd.value == ""){
        input_pwd.style.borderColor = 'red';
        pwd_help.style.visibility = 'visible';
        pwd_help.style.color = 'red';
        pwd_help.innerHTML = '���벻��Ϊ��';
    }else{
        if(str_get_len(input_pwd.value)<4 ||str_get_len(input_pwd.value)>16){
            input_pwd.style.borderColor = 'red';
            pwd_help.style.visibility = 'visible';
            pwd_help.style.color = 'red';
            pwd_help.innerHTML = '����Ϊ4-16λ�ַ�';
        }else{
            input_pwd.style.borderColor = 'green';
            pwd_help.style.visibility = 'visible';
            pwd_help.style.color = 'green';
            pwd_help.innerHTML = '�����ʽ��ȷ';
            flag++;
        }
    }
}

//���������Ƿ���ͬ
function pwd_same(){
    if(confirm_pwd.value == ""){
        confirm_pwd.style.borderColor = 'red';
        pwd_again.style.visibility = 'visible';
        pwd_again.innerHTML = '���벻��Ϊ��';
        pwd_again.style.color = 'red';
    }else{
        if(input_pwd.value == confirm_pwd.value){
            confirm_pwd.style.borderColor = 'green';
            pwd_again.style.visibility = 'visible';
            pwd_again.innerHTML = '��������һ��';
            pwd_again.style.color = 'green';
            flag++;
        }else{
            confirm_pwd.style.borderColor = 'red';
            pwd_again.style.visibility = 'visible';
            pwd_again.innerHTML = '�������벻һ��';
            pwd_again.style.color = 'red';
        }
    }
}

//�ֻ�����У��
function phone_valid(){
    if(input_phone.value != "") {
        var reg = /^1[34578]\d{9}$/;
        if (reg.test(input_phone.value)) {
            input_phone.style.borderColor = 'green';
            phone_help.style.visibility = 'visible';
            phone_help.innerHTML = '�ֻ������ʽ��ȷ';
            phone_help.style.color = 'green';
            flag++;
        } else {
            input_phone.style.borderColor = 'red';
            phone_help.style.visibility = 'visible';
            phone_help.innerHTML = '�ֻ������ʽ����';
            phone_help.style.color = 'red';
        }
    }else{
        input_phone.style.borderColor = 'red';
        phone_help.style.visibility = 'visible';
        phone_help.innerHTML = '�ֻ����벻��Ϊ��';
        phone_help.style.color = 'red';
    }

}

//����У��
function email_valid(){
    if(input_email.value != ""){
        var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
        if(reg.test(input_email.value)) {
            input_email.style.borderColor='green';
            email_help.style.visibility = 'visible';
            email_help.innerHTML = '�����ʽ��ȷ';
            email_help.style.color = 'green';
            flag++;
        }else{
            input_email.style.borderColor='red';
            email_help.style.visibility = 'visible';
            email_help.innerHTML = '�����ʽ����';
            email_help.style.color = 'red';
        }
    }else{
        input_email.style.borderColor='red';
        email_help.style.visibility = 'visible';
        email_help.innerHTML = '�����ʽ����';
        email_help.style.color = 'red';
    }
}

//���������Ԫ�ػ�ȡ�����ʧȥ����
input_name.addEventListener('focus',function(){
    name_help.style.visibility = 'visible';
});
input_name.addEventListener('blur', function () {
    name_valid();
});

//���������Ԫ�ػ�ȡ�����ʧȥ����
input_pwd.addEventListener('focus',function(){
    pwd_help.style.visibility = 'visible';
});
input_pwd.addEventListener('blur',function(){
    pwd_valid();
});

//���������Ԫ�ػ�ȡ�����ʧȥ����
confirm_pwd.addEventListener('focus', function () {
    pwd_again.style.visibility = 'visible';
});
confirm_pwd.addEventListener('blur',function(){
    pwd_same();
});

//���������Ԫ�ػ�ȡ�����ʧȥ����
input_email.addEventListener('focus',function(){
    email_help.style.visibility = 'visible';
});
input_email.addEventListener('blur',function() {
    email_valid();
});

//�ֻ����������Ԫ�ػ�ȡ�����ʧȥ����
input_phone.addEventListener('focus',function(){
    phone_help.style.visibility = 'visible';
});
input_phone.addEventListener('blur', function () {
   phone_valid();
});

//�ύ��ť
btn.addEventListener('click',function(){
    if(flag <= 4){
        alert('������������');
    }else{
        alert('������ȷ');
    }
},false);