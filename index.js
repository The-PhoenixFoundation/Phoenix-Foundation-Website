"use strict";
                    
function user(username, password) {
    fetch('./data.json')
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data){
        if (username == data['username']['username']) {
            if (password == data['username']['password']) {
                
                console.log(username, password)
            }
        }
    });
}
                    