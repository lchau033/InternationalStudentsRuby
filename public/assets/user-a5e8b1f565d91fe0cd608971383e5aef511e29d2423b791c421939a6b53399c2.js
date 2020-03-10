var count = 0;

var ready = function () {
    /**
     * When the send message link on our home page is clicked
     * send an ajax request to our rails app with the sender_id and
     * recipient_id
     */

    $('.start-conversation').click(function (e) {
        e.preventDefault();

        var conversation_id = $(this).data('cid');
        var admin = $(this).data('admin');

        if(!admin){
            stopShow();
        }

        chatBox.chatWith(conversation_id);

        // $.post("/conversations", { sender_id: sender_id, recipient_id: recipient_id }, function (data) {
        //     chatBox.chatWith(data.conversation_id);
        // });
    });

    /**
     * Used to minimize the chatbox
     */

    $(document).on('click', '.toggleChatBox', function (e) {
        e.preventDefault();
        count++;
        var id = $(this).data('cid');
        if(count%2==0) {
            if ($('#chatbox_' + id + ' .chatboxcontent').css('display') != 'none') {
                $('#chatbox_' + id + ' .chatboxcontent').css('display', 'none');
                $('#chatbox_' + id + ' .chatboxinput').css('display', 'none');
            } else {
                $('#chatbox_' + id + ' .chatboxcontent').css('display', 'block');
                $('#chatbox_' + id + ' .chatboxinput').css('display', 'block');
                $("#chatbox_" + id + " .chatboxcontent").scrollTop($("#chatbox_" + id + " .chatboxcontent")[0].scrollHeight);
            }
        }
    });

    /**
     * Used to close the chatbox
     */

    $(document).on('click', '.closeChat', function (e) {
        e.preventDefault();

        var id = $(this).data('cid');
        chatBox.close(id);
        showChat();
    });


    /**
     * Listen on keypress' in our chat textarea and call the
     * chatInputKey in chat.js for inspection
     */

    $(document).on('keydown', '.chatboxtextarea', function (event) {

        var id = $(this).data('cid');
        chatBox.checkInputKey(event, $(this), id);
    });

    /**
     * When a conversation link is clicked show up the respective
     * conversation chatbox
     */

    $('a.conversation').click(function (e) {
        e.preventDefault();

        var conversation_id = $(this).data('cid');
        chatBox.chatWith(conversation_id);
    });


}

$(document).ready(ready);
$(document).on("page:load", ready);
$(document).on('turbolinks:load', ready);
