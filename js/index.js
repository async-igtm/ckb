function rec() {
    window.location = "dta/link/coffee.php";
}

min = (div_id, text_id) => {
    document.getElementById(div_id).style.width = '100%';
    document.getElementById(text_id).style.color = '#fff';
}

mout = (div_id, text_id) => {
    document.getElementById(div_id).style.width = '0%';
    document.getElementById(text_id).style.color = 'black';
}

logout = () => {
    window.location = "dta/links/logout/destroy.php";
}
