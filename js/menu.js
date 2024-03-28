function menu() {
    window.location = "dta/link/menu.php";
}



fetch_data = (param) => {
    //document.getElementById("img-con").style.backgroundColor = "red";
    document.getElementById('main-bt-con-525').style.display = 'block';

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "../link/food/fetch_price/indian_cusin.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    var data = "food_code=" + encodeURIComponent(param);

    xhr.send(data);

    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            if (xhr.status == 200) {
                array = xhr.responseText.split(',');
                console.log(array);
                document.getElementById("amount").innerHTML = array[1];
                img = "../" + array[4];
                console.log(img);
                document.getElementById("img-con").style.backgroundImage = 'url("' + img + '")';

                price = array[1];
                food_name = array[0];
                user_id = document.getElementById('user_id').innerText;
                food_code = array[2];

                data_cart = + user_id + ',"' + food_name + '",' + price + ',"' + food_code + '"';

              console.log(data_cart);


                document.getElementById('add_to_cart').setAttribute('onclick', "add_to_cart(" + data_cart + ")");
            }
        }
    };
}

// fetch_data_l = (param) => {
//     //document.getElementById("img-con").style.backgroundColor = "red";
//     document.getElementById('main-bt-con-525').style.display = 'block';

//     var xhr = new XMLHttpRequest();
//     xhr.open("POST", "../link/food/fetch_price/coffee.php", true);
//     xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

//     var data = "food_code=" + encodeURIComponent(param);

//     xhr.send(data);

//     xhr.onreadystatechange = function () {
//         if (xhr.readyState == XMLHttpRequest.DONE) {
//             if (xhr.status == 200) {
//                 array = xhr.responseText.split(',');
//                 console.log(array);
//                 document.getElementById("amount").innerHTML = array[1];
//                 img = "../" + array[4];
//                 console.log(img);
//                 document.getElementById("img-con").style.backgroundImage = 'url("' + img + '")';
//             }
//         }
//     };
// }



/*
coffee = (param) => {
    //document.getElementById("img-con").style.backgroundColor = "red";
    document.getElementById('main-bt-con-525').style.display = 'block';

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "../link/food/fetch_price/coffee.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    var data = "food_code=" + encodeURIComponent(param);

    //console.log(data);

    xhr.send(data);

    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            if (xhr.status == 200) {
                array = xhr.responseText.split(',');
                console.log(array);
                document.getElementById("amount").innerHTML = array[1];
                img = "../" + array[4];
                console.log(img);
                document.getElementById("img-con").style.backgroundImage = 'url("' + img + '")';

                price = array[1];
                food_name = array[0];
                user_id = document.getElementById('user_id').innerText;

                data_cart = + user_id + ',"' + food_name + '",' + price;

                ///console.log(data_cart);


                document.getElementById('add_to_cart').setAttribute('onclick', "add_to_cart(" + data_cart + ")");
            }
        }
    };
}
*/




// coffe = (param, param_1) => {
//     document.getElementById('main-bt-con-525').style.display = 'block';
//     value_cof = "coffee_" + param;

//     var xhr = new XMLHttpRequest();
//     xhr.open("POST", "price.php", true);
//     xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

//     var data = "food_code=" + encodeURIComponent(value_cof);
//     xhr.send(data);

//     xhr.onreadystatechange = function () {
//         if (xhr.readyState == XMLHttpRequest.DONE) {
//             if (xhr.status == 200) {
//                 food_details = xhr.responseText.split(','); // Convarting coma separeted text into an array by split function. (My Innovation)
//                 console.log(food_details);
//                 document.getElementById("amount").innerHTML = food_details[2];

//                 img = "../" + food_details[5];

//                 document.getElementById("img-con").style.backgroundImage = "url(" + img + ")";


//             }
//         }
//     }
// }


function ajax(param) {
    page = "food/" + param + ".php";
    var request = new XMLHttpRequest();
    request.open("GET", page, true);
    request.send();
    request.onreadystatechange = () => {
        if (request.status === 200) {
            document.getElementById("get").innerHTML = request.responseText;
        }
    }

    if (param === 'Indian_cuisine') {
        setTimeout(() => {
            fetch_data('IndianCusin65fae3a58a252');
        }, 50);

    }

    if (param === 'Coffee') {
        setTimeout(() => {
            fetch_data('Coffee65fae52ac4af3');
        }, 50);
    }


    if (param === 'Tea') {
        setTimeout(() => {
            fetch_data('Tea66042f932fd4a');
        }, 50);
    }


}


npo = (param) => {
    if (param == 'nop') {
        $(document).ready(function () {
            $('#alert').text('Not Possible to Delivery');
            $('#alert').fadeIn(500);
            setTimeout(() => {
                $('#alert').fadeOut(2000);
            }, 300);
        });
    }
}


add_to_cart = (param, parm_1, param_2, param_3) => {
    // console.log(param);
    // console.log(parm_1);
    // console.log(param_2);
    update = new XMLHttpRequest();
    update.open("POST", "async_request/addToCart.php", true);
    update.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    url = "id=" + encodeURIComponent(param) + "&food=" + encodeURIComponent(parm_1) + "&price=" + encodeURIComponent(param_2) + '&food_code=' + encodeURIComponent(param_3);

    update.send(url);
    update.onreadystatechange = () => {
        if (update.status === 200) {
            console.log(update.responseText);
        }
    }
}



