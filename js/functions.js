function updateTime(date){
    document.getElementById('timestamp').innerHTML = date;
}

function ajaxRequest(type, url, callback){
    let xhr = new XMLHttpRequest();
    
    xhr.open(type,url);
    xhr.onload = () => {
        switch(xhr.status){
            case 200:
            
            case 201 : callback(xhr.responseText);
            default : console.log('HTTP error:'+ xhr.status); 
        }
    };
    xhr.send();
}

function main(){
    setInterval(ajaxRequest,1,'GET','php/timestamp.php',updateTime);
}
main();