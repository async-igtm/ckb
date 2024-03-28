methode = (param) => {
    var request = new XMLHttpRequest();
    if (param === 'upi') {

        document.getElementById('upi').style.backgroundColor = "aqua";
        document.getElementById('car').style.backgroundColor = "#fff";
        document.getElementById('net').style.backgroundColor = "#fff";
        document.getElementById('wal').style.backgroundColor = "#fff";
        document.getElementById('cas').style.backgroundColor = "#fff";
        request.open("GET", 'upi.php', true);
    }
    if (param === 'Cradit') {
        document.getElementById('upi').style.backgroundColor = "#fff";
        document.getElementById('car').style.backgroundColor = "aqua";
        document.getElementById('net').style.backgroundColor = "#fff";
        document.getElementById('wal').style.backgroundColor = "#fff";
        document.getElementById('cas').style.backgroundColor = "#fff";
        request.open("GET", 'Cradit.php', true);
    }
    if (param === 'Netbanking') {
        document.getElementById('upi').style.backgroundColor = "#fff";
        document.getElementById('car').style.backgroundColor = "#fff";
        document.getElementById('net').style.backgroundColor = "aqua";
        document.getElementById('wal').style.backgroundColor = "#fff";
        document.getElementById('cas').style.backgroundColor = "#fff";
        request.open("GET", 'Netbanking.php', true);
    }
    if (param === 'allets') {
        document.getElementById('upi').style.backgroundColor = "#fff";
        document.getElementById('car').style.backgroundColor = "#fff";
        document.getElementById('net').style.backgroundColor = "#fff";
        document.getElementById('wal').style.backgroundColor = "aqua";
        document.getElementById('cas').style.backgroundColor = "#fff";
        request.open("GET", 'allets.php', true);
    }

    if (param === 'CashDelivery') {
        document.getElementById('upi').style.backgroundColor = "#fff";
        document.getElementById('car').style.backgroundColor = "#fff";
        document.getElementById('net').style.backgroundColor = "#fff";
        document.getElementById('wal').style.backgroundColor = "#fff";
        document.getElementById('cas').style.backgroundColor = "aqua";
        request.open("GET", 'CashDelivery.php', true);
    }

    request.send();
    request.onreadystatechange = () => {
        if (request.status === 200) {
            document.getElementById("action").innerHTML = request.responseText;
        }
    }
}
methode('upi');

getway = (param) => {

    const val = document.getElementById('upi-put').value;

    const paytm = '@paytm';
    const sbi = '@oksbi';
    const hdfc = '@okhdfcbank';
    const icici = '@okicici';
    const ybl = '@ybl';
    const cub = '@cub';

    const match_paytm = val.match(sbi);
    const match_sbi = val.match(hdfc);
    const match_hdfc = val.match(icici);
    const match_icici = val.match(ybl);
    const match_ybl = val.match(cub);
    const match_cub = val.match(cub);


    if (param === 'paytm') {
        if (val.match(sbi)) {
            document.getElementById('upi-put').value = val.replace(sbi, paytm);

        } else if (val.match(hdfc)) {
            document.getElementById('upi-put').value = val.replace(hdfc, paytm);
        }
        else if (val.match(icici)) {
            document.getElementById('upi-put').value = val.replace(icici, paytm);
        }
        else if (val.match(ybl)) {
            document.getElementById('upi-put').value = val.replace(ybl, paytm);
        }
        else if (val.match(cub)) {
            document.getElementById('upi-put').value = val.replace(cub, paytm);
        }
        else {
            document.getElementById('upi-put').value = val + '@' + param;
        }
    }
    if (param === 'oksbi') {
        if (val.match(paytm)) {
            document.getElementById('upi-put').value = val.replace(paytm, sbi);
        } else if (val.match(hdfc)) {
            document.getElementById('upi-put').value = val.replace(hdfc, sbi);
        }
        else if (val.match(icici)) {
            document.getElementById('upi-put').value = val.replace(icici, sbi);
        }
        else if (val.match(ybl)) {
            document.getElementById('upi-put').value = val.replace(ybl, sbi);
        }
        else if (val.match(cub)) {
            document.getElementById('upi-put').value = val.replace(cub, sbi);
        }
        else {
            document.getElementById('upi-put').value = val + '@' + param;
        }
    }
    if (param === 'okhdfcbank') {
        if (val.match(paytm)) {
            document.getElementById('upi-put').value = val.replace(paytm, hdfc);
        } else if (val.match(sbi)) {
            document.getElementById('upi-put').value = val.replace(sbi, hdfc);
        }
        else if (val.match(icici)) {
            document.getElementById('upi-put').value = val.replace(icici, hdfc);
        }
        else if (val.match(ybl)) {
            document.getElementById('upi-put').value = val.replace(ybl, hdfc);
        }
        else if (val.match(cub)) {
            document.getElementById('upi-put').value = val.replace(cub, hdfc);
        }
        else {
            document.getElementById('upi-put').value = val + '@' + param;
        }
    }
    if (param === 'okicici') {
        if (val.match(paytm)) {
            document.getElementById('upi-put').value = val.replace(paytm, icici);
        } else if (val.match(hdfc)) {
            document.getElementById('upi-put').value = val.replace(hdfc, icici);
        }
        else if (val.match(sbi)) {
            document.getElementById('upi-put').value = val.replace(sbi, icici);
        }
        else if (val.match(ybl)) {
            document.getElementById('upi-put').value = val.replace(ybl, icici);
        }
        else if (val.match(cub)) {
            document.getElementById('upi-put').value = val.replace(cub, icici);
        }
        else {
            document.getElementById('upi-put').value = val + '@' + param;
        }
    }
    if (param === 'ybl') {
        if (val.match(paytm)) {
            document.getElementById('upi-put').value = val.replace(paytm, ybl);
        } else if (val.match(hdfc)) {
            document.getElementById('upi-put').value = val.replace(hdfc, ybl);
        }
        else if (val.match(icici)) {
            document.getElementById('upi-put').value = val.replace(icici, ybl);
        }
        else if (val.match(sbi)) {
            document.getElementById('upi-put').value = val.replace(sbi, ybl);
        }
        else if (val.match(cub)) {
            document.getElementById('upi-put').value = val.replace(cub, ybl);
        }
        else {
            document.getElementById('upi-put').value = val + '@' + param;
        }
    }
    if (param === 'cub') {
        if (val.match(paytm)) {
            document.getElementById('upi-put').value = val.replace(paytm, cub);
        } else if (val.match(hdfc)) {
            document.getElementById('upi-put').value = val.replace(hdfc, cub);
        }
        else if (val.match(icici)) {
            document.getElementById('upi-put').value = val.replace(icici, cub);
        }
        else if (val.match(ybl)) {
            document.getElementById('upi-put').value = val.replace(ybl, cub);
        }
        else if (val.match(sbi)) {
            document.getElementById('upi-put').value = val.replace(sbi, cub);
        }
        else {
            document.getElementById('upi-put').value = val + '@' + param;
        }
    }
}

active = () => {
    console.log(500);
    document.getElementById('fvsxkk').removeAttribute("disabled", '');
}
