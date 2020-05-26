function modifContent(data){
    document.getElementById("title").innerHTML = data[0];
    document.getElementById("detail").innerHTML = " hours :" +data[1]["hours"] + "<br>" + "minutes : " + data[1]["minutes"] + "<br>" + " secondes : " + data[1]["seconds"] + "<br>";
    
}
function httpErrors(errorCode){
    document.getElementById('errors').innerHTML = errorCode;
    document.getElementById('errors').style.display = "block";
}

function ajaxRequest(type, url,callback){
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
            case 200 :
            let data = xhr.responseText;
            let decod = JSON.parse(data);
            callback(decod);
            displayClock(decod[1]);
             
            break;
            default : console.log('HTTP error:'+ xhr.status); 
        }
    };
    xhr.send();    
}

function main(){
    console.log("Partie 2");
    setInterval(ajaxRequest,1000,'GET','../Partie 2/php/time.php',modifContent);
}
main();