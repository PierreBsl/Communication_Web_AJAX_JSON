function updateTime(date){
    document.getElementById('timestamp').innerHTML = date;
}
function httpErrors(errorCode){
    document.getElementById('errors').innerHTML = errorCode;
    document.getElementById('errors').style.display = "block";
}

function ajaxRequest(type, url, callback){
    let xhr = new XMLHttpRequest();
    xhr.open(type,url);
    xhr.onload = () => {
        switch(xhr.status){
            case 400: httpErrors('Requête incorrecte');
            break;
            case 401: httpErrors('Authentifiez vous');
            break;
            case 403: httpErrors('Accès refusé');
            break;
            case 404: httpErrors('Page non trouvée');
            break;
            case 500: httpErrors('Erreur interne du serveur');
            break;
            case 503: httpErrors('Service indisponible');
            break;
            case 200 : callback(xhr.responseText);
            break;
            default : console.log('HTTP error:'+ xhr.status); 
        }
    };
    xhr.send();
}

function main(){
    setInterval(ajaxRequest,1000,'GET','php/time.php',updateTime);
}


main();