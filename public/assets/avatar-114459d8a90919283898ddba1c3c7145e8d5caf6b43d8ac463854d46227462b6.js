var profile_color=function(){for(var a=document.querySelectorAll(".avatar"),o=0,r=a.length;o<r;o++){var c,l=$(a[o]),s=l.text().trim(),d=s.charCodeAt(0)-65;switch(d%10){case 0:l.addClass("avatar-colour-0"),c="#56B949",$(".avatar-colour-0").css("background-color",c);break;case 1:l.addClass("avatar-colour-1"),c="#4DB4D7",$(".avatar-colour-1").css("background-color",c);break;case 2:l.addClass("avatar-colour-2"),c="#377BBF",$(".avatar-colour-2").css("background-color",c);break;case 3:l.addClass("avatar-colour-3"),c="#314A9D",$(".avatar-colour-3").css("background-color",c);break;case 4:l.addClass("avatar-colour-4"),c="#844D9E",$(".avatar-colour-4").css("background-color",c);break;case 5:l.addClass("avatar-colour-5"),c="#EC4A94",$(".avatar-colour-5").css("background-color",c);break;case 6:l.addClass("avatar-colour-6"),c="#EE4035",$(".avatar-colour-6").css("background-color",c);break;case 7:l.addClass("avatar-colour-7"),c="#EE4035",$(".avatar-colour-7").css("background-color",c);break;case 8:l.addClass("avatar-colour-8"),c="#EE7C2E",$(".avatar-colour-8").css("background-color",c);break;case 9:l.addClass("avatar-colour-9"),c="#F3A530",$(".avatar-colour-9").css("background-color",c)}}};$(document).ready(profile_color),$(document).on("turbolinks:load",profile_color);