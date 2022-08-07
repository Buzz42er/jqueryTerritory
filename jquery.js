//change attr
$(function () {
    $(".replace a").attr("href", "https://www.sololearn.com")
})

//remove attr
$(function () {
    $(".remove a").removeAttr("href")
})

//get content - html, plane text
$(function () {
    var p = $(".getContent p").html();
    var span = $(".getContent span").text();
    console.log(p, span)
})

//change content
$(function () {
    $(".changeContent p").text("Ahoj! This text was changed with jQuery");
})

//outputing value
$(function () {
    var val = $(".val input").val();
    $(".val p").text(val);
})

//adding content
$(function () {
    var name = $(".add input").val();
    $(".add p").append(name);
}) // after, before, preppend

//----------------------------------------------------------------Next chapter, Manipulating CSS

// adding and removing classes
$(function () {
    $(".addCSS").addClass("redCSSadd");
    $(".removeCSS").removeClass("redCSSadd")
})

//toggle class
$(function () {
    $("#toggleClassButton").click(function () {
        $(".toggleClass").toggleClass("redCSSadd")
    })
})

//experiment
$(function () {
    $(".experiment").click(function () {
        $(".experiment").toggleClass("redCSSadd")     //This is what I will use most
    })
})

//CSS properties - doesn't change bg color on click...
//$(function() {
//    $(".addingProperties").click(function() {
//        $(".addingProperties").css("background-color, blue")
//    })
//})

$(function () {  //this one should work 
    $(".addingProperties").css("background-color", "blue")
    $(".addingProperties").css("color", "white")

});

//multiple css properties
$(function () {
    $(".multipleProps").css({ "color": "red", "font-size": "20px" }) //this is JSON syntax

})

//dimensions
$(function () {
    $(".dimensions").css({ 
        "background-color": "red",
        'color': 'white' })
    $(".dimensions").width(200)
    $(".dimensions").height(200)
    $(".dimensions").outerHeight(10) //margin
    $(".dimensions").innerWidth(10) //padding
})

//----------------------------------------------Manipulating DOM (document object model)

//Traversing
$(function () {
    var e = $(".traversing p").parent() //parents - for every parent of that child trough the tree
    e.css("border", "2px solid red")
    //eq() - for getting specific element if there is multiple same ones
})

//Removing Elements
$(function () {
    $(".removeElem p").eq(1).remove()
})

//Empty Element
$(function () {
    $(".emptyElem").empty()
})

//----------------------------------------------------------------Events

//Handling events
$(function () {
    $(".eventHandle").click(function () { //this is a event handler, it is a function
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
$(function () {
    $("#eventText").keydown(function () {
        $(".commonEvents p").html($("#eventText").val())
    })
})

//on() method
$(function () {
    $(".onMethod").on("click", function () {
        $(".onMethod").text("Clicked!")
    })
})

//off method - removes event handler
$(function () {
    $(".offMethod").on("click", function () {
        $(".offMethod").text("This was clicked, if you click it again it will turn back")
    })
    $(".offMethod").off("click")

})

/*
Every event handling function can receive an event object, which contains properties and methods related to the event:
pageX, pageY the mouse position (X & Y coordinates) at the time the event occurred, relative to the top left of the page.
type the type of the event (e.g. "click").
which the button or key that was pressed.
data any data that was passed in when the event was bound.
target the DOM element that initiated the event.
preventDefault() prevent the default action of the event (e.g., following a link).
stopPropagation() Stop the event from bubbling up to other elements.
*/

//The Event Object, prevent
$(function () {
    $(".eventObject a").click(function (event) {
        alert("this click will not work, because we prevented default and, your mouse is on this coordinates on the page: " + event.pageX + " and " + event.pageY)
        event.preventDefault()
    })
})

//which - what key was pressed
$(function () {
    $("#alertPressedKey").keydown(function (event) {
        alert(event.which)
    })
})

//trigger()
$(function () {
    $(".trigger").click(function () {
        $(".trigger").toggleClass("redCSSadd")
    })
    $(".trigger").trigger("click")
})

//to do list
$(function () {
    $("#add").on("click", function () {
        var val = $(".toDoList input").val();
        if (val !== '') {
            var elem = $("<li></li>").text(val);
            $(elem).append("<button class='deleteTask'>X</button>");
            $("#mylist").append(elem);
            $("input").val(""); //clear the input

            $(".deleteTask").on("click", function() {
                $(this).parent().remove() //this presents current object, of what function is working
            })
        }
    })
    
})

//-----------------------------------------------Effects

//toggle, show, hide
$(function() {
    $(".effectToggle p").click(function() {
        $(".effectToggle div").toggle(1000)
    })
})

/**
 * Just like toggle(), fadeToggle() takes two optional parameters: speed and callback.
 * Another method used for fading is fadeTo(), which allows fading to a given opacity (value between 0 and 1). For example: $("div").fadeTo(1500, 0.7);
 */

//fade
$(function() {
    $(".effectFade p").click(function() {
        $(".effectFade div").fadeToggle(1000)
    })
})

//slide
$(function() {
    $(".effectSlide p").click(function() {
        $(".effectSlide div").slideToggle(1000)
    })
})

// You can animate any CSS property using the above mentioned syntax, but there is one important thing to remember: all property names must be camel-cased when used with the animate() method (camelCase is the practice of writing compound words or phrases such that each word or abbreviation begins with a capital letter with the first word in lowercase).
// You will need to write ***paddingLeft*** instead of padding-left, marginRight instead of margin-right, and so on.

//animate()
$(function() {
    $(".animate div").click(function() {
        $(".animate div").animate({
            width: '300px' 
     }, 1000);  // ("key":"value" pairs)
    });
})

$(function() {
    $(".animateMulti div").click(function() { 
        $(".animateMulti div").animate({
            width: '300px', //neradi
            height: '250px',
            backgroundColor: 'red' //ne radi
        }, 1000)
    })
})


$(function() {
    $(".animateOfOriginal div").click(function() {
        $(".animateOfOriginal div").animate({
            height: '-=50px'
        }, 1000)
    })
})


//To stop an animation before it is finished, jQuery provides the stop() method

$(function() {
    $('.animateObject').click(function() {
        var div = $(".animateObject div");
        div.animate({opacity: 1});
        div.animate({height: '+=10px', width: '+=10px', top: '+=30px'}, 500);
        div.animate({height: '-=10px', width: '-=10px', left: '+=30px'}, 500);
        div.animate({height: '+=10px', width: '+=10px', top: '-=30px'}, 500);
        div.animate({height: '-=10px', width: '-=10px', left: '-=30px'}, 500);
        div.animate({opacity: 0.5});
    })
    
}); 

// Each animate() method call will run one after another.
// Remember, to manipulate the position of elements, you need to set the CSS position property of the element to relative, fixed, or absolute.

// The animate() method, just like the hide/show/fade/slide methods, can take an optional callback function as its parameter, which is executed after the current effect is finished.


// By default, jQuery comes with queue functionality for animations.
// This means that if you write multiple animate() calls one after another, jQuery creates an "internal" queue for these method calls. Then it runs the animate calls one-by-one.

// Drop Down menu
$(function() {
    var button = $('.ddButton')
    var divUl = $('.dropDownMenu ul')
    
    

    button.click(function() {
        divUl.slideToggle(1000)
    })
})

//I belive that's all folks!