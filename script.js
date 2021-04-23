$(function () {
    $("#nav-placeholder").load("nav.html");
});

$(document).ready(function () {
    $("#main-container").load("home.html");
});

$(document).on('click', '.nav-link', function (e) {
    e.preventDefault();
    $("#main-container").load(($(this)).attr("data-page") + ".html");
    $('.nav-link').each(function () {
        $(this).removeClass("active");
        $(".sr-only").remove();
    });
    $(this).addClass("active");
    $(this).append("<span class=\"sr-only\">(current)</span>");



});