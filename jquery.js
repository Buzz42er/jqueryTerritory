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
})