/**
 * Created by liach on 2017-03-19.
 */



function stopShow() {
    $('#bubble').css('display','none');
    $('#bubble2').css('display','none');
}

function showChat(){
    $.ajax({
        url : "/stopConversation",
        type : "get",
    });
    $('#bubble').css('display','inline');
    $('#bubble2').css('display','block');
}
;
