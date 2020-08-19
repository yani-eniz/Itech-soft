let keys_api = ["user_id","marketplace","app_key","app_secret","api_username","api_password"];
let arr_api = [];
let arr_api2 = [];
let keys_api2 = ["app_key","app_secret","api_username","api_password"];
let id_user =parseInt(localStorage.getItem('id'));

let ok = false;

let marketplace;
function getMarket(market){
marketplace =market;
}
let api_obg;
(async function loadData() {
    let url = 'http://51.68.195.202:3000/users_api';
    let response = await fetch(url);
    let commits = await response.json(); // читаем ответ в формате JSON
    api_obg = commits;
    console.log(api_obg);
}());

function postApi(){

    arr_api.push(id_user,marketplace);
    for(let i=0;i<=api_obg.length-1;i++){
        let get_arr = [];
        for (let value of Object.values(api_obg[i])) {
            get_arr.push(value);
            console.log(get_arr);

        }
        if(arr_api[0] == get_arr[1] && arr_api[1] == get_arr[2]){
            console.log("match");
            ok = true;
            updateMarketplace();
            break;
        }
    }
    if(ok === false){
        insertMarketplace();
    }




}


function updateMarketplace(){
    let findObj = {};

    let app_key = document.getElementById('app_key').value;
    let app_key1 = document.getElementById('app_key1').value;
    let app_key2 = document.getElementById('app_key2').value;
    let app_key3 = document.getElementById('app_key3').value;
    if(app_key != ""){
        arr_api2.push(app_key);
    }
    if(app_key1 != ""){
        arr_api2.push(app_key1);
    }
    if(app_key2 != ""){
        arr_api2.push(app_key2);
    }
    if(app_key3 != ""){
        arr_api2.push(app_key3);
    }


    let app_secret = document.getElementById('app_secret').value;
    let app_secret1 = document.getElementById('app_secret1').value;
    let app_secret2 = document.getElementById('app_secret2').value;
    let app_secret3 = document.getElementById('app_secret3').value;
    if(app_secret != ""){
        arr_api2.push(app_secret);
    }
    if(app_secret1 != ""){
        arr_api2.push(app_secret1);
    }
    if(app_secret2 != ""){
        arr_api2.push(app_secret2);
    }
    if(app_secret3 != ""){
        arr_api2.push(app_secret3);
    }



    let api_username = document.getElementById('api_username').value;
    let api_username1 = document.getElementById('api_username1').value;
    let api_username2 = document.getElementById('api_username2').value;
    let api_username3 = document.getElementById('api_username3').value;
    if(api_username != ""){
        arr_api2.push(api_username);
    }
    if(api_username1 != ""){
        arr_api2.push(api_username1);
    }
    if(api_username2 != ""){
        arr_api2.push(api_username2);
    }
    if(api_username3 != ""){
        arr_api2.push(api_username3);
    }


    let api_password = document.getElementById('api_password').value;
    let api_password1 = document.getElementById('api_password1').value;
    let api_password2 = document.getElementById('api_password2').value;
    let api_password3 = document.getElementById('api_password3').value;
    if(api_password != ""){
        arr_api2.push(api_password);
    }
    if(api_password1 != ""){
        arr_api2.push(api_password1);
    }
    if(api_password2 != ""){
        arr_api2.push(api_password2);
    }
    if(api_password3 != ""){
        arr_api2.push(api_password3);
    }
    // arr_api.push(null);
    console.log(arr_api2);

    for (let i = 0; i <= keys_api2.length -1; i++) {
        findObj[keys_api2[i]] = arr_api2[i];
    }
    console.log(findObj);

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify([findObj]);

    var requestOptions = {
      method: 'PATCH',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(`http://51.68.195.202:3000/users_api?user_id=eq.${id_user}&marketplace=eq.${marketplace}`, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
}

function insertMarketplace(){
    let obj = {};
    let app_key = document.getElementById('app_key').value;
    let app_key1 = document.getElementById('app_key1').value;
    let app_key2 = document.getElementById('app_key2').value;
    let app_key3 = document.getElementById('app_key3').value;
    if(app_key != ""){
        arr_api.push(app_key);
    }
    if(app_key1 != ""){
        arr_api.push(app_key1);
    }
    if(app_key2 != ""){
        arr_api.push(app_key2);
    }
    if(app_key3 != ""){
        arr_api.push(app_key3);
    }


    let app_secret = document.getElementById('app_secret').value;
    let app_secret1 = document.getElementById('app_secret1').value;
    let app_secret2 = document.getElementById('app_secret2').value;
    let app_secret3 = document.getElementById('app_secret3').value;
    if(app_secret != ""){
        arr_api.push(app_secret);
    }
    if(app_secret1 != ""){
        arr_api.push(app_secret1);
    }
    if(app_secret2 != ""){
        arr_api.push(app_secret2);
    }
    if(app_secret3 != ""){
        arr_api.push(app_secret3);
    }



    let api_username = document.getElementById('api_username').value;
    let api_username1 = document.getElementById('api_username1').value;
    let api_username2 = document.getElementById('api_username2').value;
    let api_username3 = document.getElementById('api_username3').value;
    if(api_username != ""){
        arr_api.push(api_username);
    }
    if(api_username1 != ""){
        arr_api.push(api_username1);
    }
    if(api_username2 != ""){
        arr_api.push(api_username2);
    }
    if(api_username3 != ""){
        arr_api.push(api_username3);
    }


    let api_password = document.getElementById('api_password').value;
    let api_password1 = document.getElementById('api_password1').value;
    let api_password2 = document.getElementById('api_password2').value;
    let api_password3 = document.getElementById('api_password3').value;
    if(api_password != ""){
        arr_api.push(api_password);
    }
    if(api_password1 != ""){
        arr_api.push(api_password1);
    }
    if(api_password2 != ""){
        arr_api.push(api_password2);
    }
    if(api_password3 != ""){
        arr_api.push(api_password3);
    }

    console.log(arr_api);

    for (let i = 0; i <= keys_api.length -1; i++) {
          obj[keys_api[i]] = arr_api[i];

      }

      console.log(obj);


      var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify([obj]);

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://51.68.195.202:3000/users_api", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}

var N11 = new Vue ({
    el: '#N11',
    data: {
      app_key: '',
      app_secret: '',
      api_username: '',
      api_password: '',
    }
  })

  var Trendyal = new Vue ({
    el: '#Trendyal',
    data: {
      app_key1: '',
      app_secret1: '',
      api_username1: '',
      api_password1: '',
    }
  })

  var Hepsiburada = new Vue ({
    el: '#Hepsiburada',
    data: {
      app_key2: '',
      app_secret2: '',
      api_username2: '',
      api_password2: '',
    }
  })


  var Gittigidiyor = new Vue ({
    el: '#Gittigidiyor',
    data: {
      app_key3: '',
      app_secret3: '',
      api_username3: '',
      api_password3: '',
    }
  })


