//disqus
(function () { // DON'T EDIT BELOW THIS LINE
    var d = document,
        s = d.createElement('script');
    s.src = 'https://http-sungmin415-dothome-co-kr-portfolio-index-html.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
})();


// lightgallery
$('#gallery').lightGallery({
    selector: ".poster"

});
$('#gallery2').lightGallery({
    selector: ".poster"

});



// swiper slide
var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    slidesPerColumn: 2,
    spaceBetween: 30,
    autoplay: false,
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },


});

//portfolio 메뉴텝
var pfBtn = $(".pf_title > ul > li");
var pfCont = $(".pf_chart > div");

pfCont.hide().eq(0).show();

pfBtn.click(function (e) {
    e.preventDefault();
    var target = $(this);
    var index = target.index();

    pfBtn.removeClass("active");
    target.addClass("active");
    pfCont.css("display", "none");
    pfCont.eq(index).css("display", "block");
});


// 스킬
$(document).ready(function () {
    $(".html").percircle({
        percent: 90,
        text: 'HTML 90%'
    });
    $(".css").percircle({
        percent: 90,
        text: 'CSS 90%'
    });
    $(".js").percircle({
        percent: 90,
        text: 'Jquery 70%'
    });
    $(".photoshop").percircle({
        percent: 90,
        text: 'PhotoShop 70%'
    });
    $(".illustrator").percircle({
        percent: 90,
        text: 'Illustrator 70%'
    });
});



// main typing text
var typingBool = false;
var typingIdx = 0;
var typingTxt = $(".typing_text").text();
typingTxt = typingTxt.split("");
if (typingBool == false) {
    typingBool = true;

    var tyInt = setInterval(typing, 100);
}

function typing() {
    if (typingIdx < typingTxt.length) {
        $(".typing").append(typingTxt[typingIdx]);
        typingIdx++;
    } else {
        clearInterval(tyInt);
    }
}

//모바일메뉴 
$('#menu_checkbox').click(function () {
    $(".menu_li_area").toggleClass("display", "block");
    $(".menu_li_area").slideToggle();
});

// about horizon effect
$(window).ready(function () {
    $('.horizon').horizon();
});


