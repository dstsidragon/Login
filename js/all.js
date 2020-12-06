


//DOM

var send = document.querySelector('.send');

//EVENT

send.addEventListener('click',sendSignup,false);

//註冊帳號
//送出註冊訊息給後端確認
function sendSignup(){ 
    var emailS = document.querySelector('.account').value;
    var passwordS = document.querySelector('.password').value;
    var str = {};
    str.email= emailS;
    str.password = passwordS;
    var  xhr = new XMLHttpRequest();
    xhr.open('post','https://hexschool-tutorial.herokuapp.com/api/signup',true);
/*       設定傳送格式 一般表單格式         */ 
    xhr.setRequestHeader('Content-type','application/json');
/*          將OBJECT轉成字串            */
    var data =JSON.stringify(str);
/*          傳送資料                    */ 
    xhr.send(data);
    console.log(xhr);
    //判斷是否註冊成功
    xhr.onload=function(){
        
        var reback = JSON.parse(xhr.responseText);
        var messageS = reback.message;
        if(messageS =='帳號註冊成功'){
            alert('帳號註冊成功!!!')
        }else if(messageS =='此帳號已被使用'){
            alert('此帳號已被使用!!')
        }else{
            alert('格式不正確!!')

        }
    }

};


//DOM

var send = document.querySelector('.send1');

//EVENT

send.addEventListener('click',sendSignup1,false);

//註冊帳號
//送出註冊訊息給後端確認
function sendSignup1(){ 
    var emailS = document.querySelector('.account1').value;
    var passwordS = document.querySelector('.password1').value;
    var str = {};
    str.email= emailS;
    str.password = passwordS;
    var  xhr = new XMLHttpRequest();
    xhr.open('post','https://hexschool-tutorial.herokuapp.com/api/signin',true);
/*       設定傳送格式 一般表單格式         */ 
    xhr.setRequestHeader('Content-type','application/json');
/*          將OBJECT轉成字串            */
    var data =JSON.stringify(str);
/*          傳送資料                    */ 
    xhr.send(data);
    console.log(xhr);
    //判斷是否註冊成功
    xhr.onload=function(){
        
        var reback = JSON.parse(xhr.responseText);
        var messageS = reback.message;
        if(messageS =='登入成功'){
            alert('登入成功!!!')
        }else{
            alert('此帳號不存在或帳號密碼錯誤!!')

        }
    }

};
