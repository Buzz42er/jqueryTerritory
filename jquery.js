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
        $(".experiment").toggleClass("redCSSadd")     //This is what I will use most
    })
})

//CSS properties - doesn't change bg color on click...
//$(function() {
//    $(".addingProperties").click(function() {
//        $(".addingProperties").css("background-color, blue")
//    })
//})

$(function() {  //this one should work 
    $(".addingProperties").css("background-color", "blue")
    $(".addingProperties").css("color", "white")

});

//multiple css properties
$(function() {
    $(".multipleProps").css({"color" : "red", "font-size" : "20px"}) //this is JSON syntax

})

//dimensions
$(function() {
    $(".dimensions").css({"background-color" : "red"})
    $(".dimensions").width(200)
    $(".dimensions").height(200)
    $(".dimensions").outerheight(10) //margin
    $(".dimensions").inerwidth(10) //padding
})

//----------------------------------------------Manipulating DOM (document object model)

//Traversing
$(function() {
    var e = $(".traversing p").parent() //parents - for every parent of that child trough the tree
    e.css("border", "2px solid red")
        //eq() - for getting specific element if there is multiple same ones
})

//Removing Elements
$(function() {
    $(".removeElem p").eq(1).remove()
})

//Empty Element
$(function() {
    $(".emptyElem").empty()
})

//----------------------------------------------------------------Events

//Handling events
$(function() {
    $(".eventHandle").click(function() { //this is a event handler, it is a function
        $(".eventHandle").html(Date())
    })
})

/*
The following are the most commonly used events:
Mouse Events:
click occurs when an element is clicked.
dblclick occurs when an element is double-clicked.
mouseenter occurs when the mouse pointer is over (enters) the selected element.
mouseleave occurs when the mouse pointer leaves the selected element.
mouseover occurs when the mouse pointer is over the selected element.

Keyboard Events:
keydown occurs when a keyboard key is pressed down.
keyup occurs when a keyboard key is released.

Form Events:
submit occurs when a form is submitted.
change occurs when the value of an element has been changed.
focus occurs when an element gets focus.
blur occurs when an element loses focus.

Document Events:
ready occurs when the DOM has been loaded.
resize occurs when the browser window changes size.
scroll occurs when the user scrolls in the specified element.
*/

//Common events
$(function() {
    $("#eventText").keydown(function() {
        $(".commonEvents p").html($("#eventText").val())
    })
})

//on() method
$(function() {
    $(".onMethod").on("click", function() {
        $(".onMethod").text("Clicked!")
    })
})

//off method
$(function() {
    $(".offMethod").on("click", function() {
        $(".offMethod").text("This was clicked, if you click it again it will turn back")
    })
    $(".offMethod").off("click")

})

/*
type the type of the event (e.g. "click").
which the button or key that was pressed.
data any data that was passed in when the event was bound.
target the DOM element that initiated the event.
preventDefault() prevent the default action of the event (e.g., following a link).
stopPropagation() Stop the event from bubbling up to other elements.
*/

//The Event Object


