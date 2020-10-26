// When the user scrolls the page, execute myFunction
window.onscroll = function() {showProgress()};

function showProgress() {
var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
var scrolled = (winScroll / height) * 100;
document.getElementById("scrollBar").style.width = scrolled + "%";
};

$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 200) {
        $(".progress-container").addClass("show");
    } else {
        $(".progress-container").removeClass("show");
    }
});

$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 300) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    $('#toTop').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});
