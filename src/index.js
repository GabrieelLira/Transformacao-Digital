if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showLocation);
}

function showLocation(position){

    const long = position.coords.longitude;
    const lat = position.coords.latitude;

    const url = `https://maps.google.com/maps?q=${lat},${long}&t=&z=10&ie=UTF8&iwloc=&output=embed`;

    window.open(url, 'map');
}

function getNotifications(){
    console.log('a')
        if( !("Notification" in window)) {
            console.log('Navegador não suporta notificações');
        } else if ( Notification.permission === "granted") {
            const notify = new Notification('Olá, bem vindo(a) de volta!');
        } else if ( Notification.permission !== "denied") {
            Notification.requestPermission( function(permission){
                if(permission === "granted"){
                    const notify = new Notification('Olá, bem vindo(a)!');
                }
            })
        }
    
    } 