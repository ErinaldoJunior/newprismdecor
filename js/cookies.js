// Função para definir um cookie
const setCookie = (cName, cValue, expdays) => {
    let date = new Date();
    date.setTime(date.getTime() + (expdays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = cName + "=" + cValue + ";" + expires + ";path=/";
}

const getCookie = (cName) => {
    const name = cName + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');

    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// Event listener para o botão de aceitar cookies
document.querySelector("#cookies-btn").addEventListener('click', () => {
    document.querySelector("#cookies").style.display = "none"; // Esconde o aviso de cookies
    setCookie("cookie", "true", 30); // Define o cookie para indicar que o usuário aceitou os cookies
});


const cookieMessage = () => {
    if(!getCookie("cookie")) {
        document.querySelector('#cookies').style.display='block';
    }
}

window.addEventListener( "load", cookieMessage );