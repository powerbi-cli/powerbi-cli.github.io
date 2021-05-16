$(document).ready(function () {
    const globalPath = $("meta[property='docfx\\:globalrel']").attr("content");
    if (!globalPath) return
    $.get(globalPath, function (data) {
        const snippet = $(data).find("#_content>ul");
        snippet.first(":first-child").attr("class", "hidden");
        snippet.appendTo(".global-parameters");
        $(".global-parameters").on("click", function (event) {
            event.preventDefault();
            $(this).find("ul").toggleClass("hidden");
            $(this).toggleClass("expanded");
        })
    });
});