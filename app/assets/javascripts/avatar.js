var profile_color = function () {

    var all = document.querySelectorAll(".avatar");
    for (var i=0, max=all.length; i < max; i++) {
        var elem = $(all[i]);
        var char = elem.text().trim();
        var num = char.charCodeAt(0)-65;
        var color;
        switch (num % 10) {
            case 0:
                elem.addClass("avatar-colour-0");
                color = '#56B949';
                $( ".avatar-colour-0" ).css( "background-color", color );
                break;
            case 1:
                elem.addClass("avatar-colour-1");
                color = '#4DB4D7';
                $( ".avatar-colour-1" ).css( "background-color", color );
                break;
            case 2:
                elem.addClass("avatar-colour-2");
                color = '#377BBF';
                $( ".avatar-colour-2" ).css( "background-color", color );
                break;
            case 3:
                elem.addClass("avatar-colour-3");
                color = '#314A9D';
                $( ".avatar-colour-3" ).css( "background-color", color );
                break;
            case 4:
                elem.addClass("avatar-colour-4");
                color = '#844D9E';
                $( ".avatar-colour-4" ).css( "background-color", color );
                break;
            case 5:
                elem.addClass("avatar-colour-5");
                color = '#EC4A94';
                $( ".avatar-colour-5" ).css( "background-color", color );
                break;
            case 6:
                elem.addClass("avatar-colour-6");
                color = '#EE4035';
                $( ".avatar-colour-6" ).css( "background-color", color );
                break;
            case 7:
                elem.addClass("avatar-colour-7");
                color = '#EE4035';
                $( ".avatar-colour-7" ).css( "background-color", color );
                break;
            case 8:
                elem.addClass("avatar-colour-8");
                color = '#EE7C2E';
                $( ".avatar-colour-8" ).css( "background-color", color );
                break;
            case 9:
                elem.addClass("avatar-colour-9");
                color = '#F3A530';
                $( ".avatar-colour-9" ).css( "background-color", color );
                break;
        }
    }
}

$(document).ready(profile_color);
$(document).on('turbolinks:load', profile_color);