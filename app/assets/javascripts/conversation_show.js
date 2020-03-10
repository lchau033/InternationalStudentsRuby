/**
 * Created by liach on 2017-03-25.
 */


var ready = function () {
    var chatbox = $( " .chatboxcontent");
    if(chatbox[0] != undefined){
        chatbox.scrollTop(chatbox[0].scrollHeight);
    }
}

$(document).ready(ready);
$(document).on('turbolinks:load', ready);