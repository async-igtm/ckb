// AJAX
function login() {
    var req = new XMLHttpRequest();
    req.open("GET", "dta/link/about.php", true);
    req.send(true);

    req.onreadystatechange = () => {
        if (req.status == 200) {
            document.getElementById("page").innerHTML = req.responseText

            console.log(req.responseText);
        }
    }


}