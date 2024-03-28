
cart = () => {

    cart_request = new XMLHttpRequest();
    cart_request.open("GET", 'dta/link/async_request/cart.php', true);
    cart_request.send();
    cart_request.onreadystatechange = () => {
        if (cart_request.status == 200) {
            if (cart_request.responseText) {
                document.getElementById('cart-item').style.display = 'block';
                document.getElementById('cart-item').innerHTML = cart_request.responseText;
            }
        }
    }

    cart_request_2 = new XMLHttpRequest();
    cart_request_2.open("GET", 'dta/link/async_request/fetch_cart.php', true);
    cart_request_2.send();
    cart_request_2.onreadystatechange = () => {
        if (cart_request_2.status == 200) {
            document.getElementById('dropdown-item').innerHTML = cart_request_2.responseText;
        }
    }

    cart_request_3 = new XMLHttpRequest();
    cart_request_3.open("GET", 'dta/link/async_request/total.php', true);
    cart_request_3.send();
    cart_request_3.onreadystatechange = () => {
        if (cart_request_3.status == 200) {
            document.getElementById('total-cost').innerHTML = cart_request_3.responseText;
        }
    }
}

setInterval(() => {
    cart();
}, 500);

remove_product = (param) => {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            if (xhr.status == 200) {
                console.log(xhr.responseText);
            }
        }
    };
    xhr.open("POST", 'dta/link/async_request/remove_cart.php', true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    var data = "food=" + encodeURIComponent(param);
    xhr.send(data);
}
