//change attr
$(function() {
    $(".replace a").attr("href", "https://www.sololearn.com")
})

//remove attr
$(function() {
    $(".remove a").removeAttr("href")
})

//get content - html, plane text
$(function(){
    var p = $(".getContent p").html();
    var span = $(".getContent span").text();
    console.log(p, span)
})

//change content
$(function() {
    $(".changeContent p").text("Ahoj! This text was changed with jQuery");
})

//outputing value
$(function() {
    var val = $(".val input").val();
    $(".val p").text(val);
})

//adding content
$(function() {
    var name = $(".add input").val();
    $(".add p").append(name);
}) // after, before, preppend

//----------------------------------------------------------------Next chapter, Manipulating CSS

// adding and removing classes
$(function() {
    $(".addCSS").addClass("redCSSadd");
    $(".removeCSS").removeClass("redCSSadd")
})

//toggle class
$(function() {
    $("#toggleClassButton").click(function() {
        $(".toggleClass").toggleClass("redCSSadd")
    })
})

//experiment
$(function() {
    $(".experiment").click(function() {
        $(".experiment").toggleClass("redCSSadd")
    })
})

//CSS properties - doesn't change bg color on click...
//$(function() {
//    $(".addingProperties").click(function() {
//        $(".addingProperties").css("background-color, blue")
//    })
//})

$(function() {  //this one should work, 
    $(".addingProperties").css("background-color", "blue");
    $(".addingProperties").css("color", "white");

});
