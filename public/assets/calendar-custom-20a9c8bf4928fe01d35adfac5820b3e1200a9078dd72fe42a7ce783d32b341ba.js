var Script=function(){$("#external-events div.external-event").each(function(){var e={title:$.trim($(this).text())};$(this).data("eventObject",e),$(this).draggable({zIndex:999,revert:!0,revertDuration:0})});var e=new Date,t=e.getDate(),a=e.getMonth(),n=e.getFullYear();$("#calendar").fullCalendar({header:{left:"prev,next today",center:"title",right:"month,basicWeek,basicDay"},editable:!0,droppable:!0,drop:function(e,t){var a=$(this).data("eventObject"),n=$.extend({},a);n.start=e,n.allDay=t,$("#calendar").fullCalendar("renderEvent",n,!0),$("#drop-remove").is(":checked")&&$(this).remove()},events:[{title:"All Day Event",start:new Date(n,a,1)},{title:"Long Event",start:new Date(n,a,t-5),end:new Date(n,a,t-2)},{id:999,title:"Repeating Event",start:new Date(n,a,t-3,16,0),allDay:!1},{id:999,title:"Repeating Event",start:new Date(n,a,t+4,16,0),allDay:!1},{title:"Meeting",start:new Date(n,a,t,10,30),allDay:!1},{title:"Lunch",start:new Date(n,a,t,12,0),end:new Date(n,a,t,14,0),allDay:!1},{title:"Birthday Party",start:new Date(n,a,t+1,19,0),end:new Date(n,a,t+1,22,30),allDay:!1},{title:"Click for Google",start:new Date(n,a,28),end:new Date(n,a,29),url:"http://google.com/"}]})}();