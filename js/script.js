$("[data-scroll]").click(function (event) {
    event.preventDefault(); //отменяем стандартное поведение ссылки

    var blockId = "." + $(this).data("scroll"),
        blockOffset = $(blockId).offset().top;


    $("html, body").animate({
        scrollTop: blockOffset + 20
    }, 600);

});