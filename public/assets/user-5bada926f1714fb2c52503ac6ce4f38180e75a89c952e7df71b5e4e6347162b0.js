var count=0,ready=function(){$(".start-conversation").click(function(t){t.preventDefault();var c=$(this).data("cid"),o=$(this).data("admin");o||stopShow(),chatBox.chatWith(c)}),$(document).on("click",".toggleChatBox",function(t){t.preventDefault(),count++;var c=$(this).data("cid");count%2==0&&("none"!=$("#chatbox_"+c+" .chatboxcontent").css("display")?($("#chatbox_"+c+" .chatboxcontent").css("display","none"),$("#chatbox_"+c+" .chatboxinput").css("display","none")):($("#chatbox_"+c+" .chatboxcontent").css("display","block"),$("#chatbox_"+c+" .chatboxinput").css("display","block"),$("#chatbox_"+c+" .chatboxcontent").scrollTop($("#chatbox_"+c+" .chatboxcontent")[0].scrollHeight)))}),$(document).on("click",".closeChat",function(t){t.preventDefault();var c=$(this).data("cid");chatBox.close(c),showChat()}),$(document).on("keydown",".chatboxtextarea",function(t){var c=$(this).data("cid");chatBox.checkInputKey(t,$(this),c)}),$("a.conversation").click(function(t){t.preventDefault();var c=$(this).data("cid");chatBox.chatWith(c)})};$(document).ready(ready),$(document).on("page:load",ready),$(document).on("turbolinks:load",ready);