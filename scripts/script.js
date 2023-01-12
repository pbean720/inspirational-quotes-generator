//////////////// TO DO LIST //////////////////////

var pageTitle = document.getElementById("pageTitle")
var quote = document.getElementById("quote")
var author = document.getElementById("author")
var cremeBg = document.getElementById("quoteBg")
var spanLines = document.getElementsByTagName("span")
var btns = document.getElementsByClassName("material-symbols-outlined")
var savebtn = document.getElementById("savebtn")

var backgrounds = 
            [// [bg img,         quote font,                       h1 and author font,               function]
                ["imgs/1.png",   "'Noto Serif Display', serif",    "'Lato', sans-serif",             bgOne], 
                ["imgs/2.png",   "'Fraunces', serif",              "Arial, Helvetica, sans-serif",   bgTwo], 
                ["imgs/3.png",   "'Charm', cursive",               "'Cardo', serif",                 bgThree],
                ["imgs/4.png",   "'Cormorant Garamond', serif",    "'Cormorant Garamond', serif",    bgFour], 
                ["imgs/5.jpg",   "'Playfair Display', serif",      "Arial, Helvetica, sans-seri",    bgFive]
            ]

var lastBg = 0
var max = backgrounds.length;
console.log(max)

// PRODUCES A RANDOM INTEGER FOR THE LENGTH OF THE NUMBER OF BACKGROUNDS THERE ARE
function getRandomInt(max) {
    var randInt = (Math.floor(Math.random() * max))
    return randInt
}

// EVERYTIME THE REFRESH BUTTON IS CLICKED, A RANDOM INT IS TAKEN IN OF THE LENGTH OF BACKGROUND AND CHANGES THE STYLE ELEMENTS ON THE PAGE
// AND THE TEXT TO PRODUCE A NEW QUOTE AND QUOTE AUTHOR ON CLICK
document.getElementById("refreshbtn").addEventListener("click", function () {
    bgIndex = getRandomInt(max)

    // THE SAME BACKGROUND IMAGE WILL NEVER REAPPEAR TWICE IN A ROW
    while (bgIndex == lastBg) {
        bgIndex = getRandomInt(max)
    }

    lastBg = bgIndex

    // RESETS THE STYLE ELEMENTS THAT WERE CHANGED IN THE UNIQUE BACKGROUND FUNCTIONS
    cremeBg.style.backgroundColor = ""
    quote.style.fontStyle = "";
    quote.style.fontWeight = ""
    pageTitle.style.fontWeight = ""
    author.style.fontWeight = ""
    pageTitle.style.color = ""
    quote.style.color = "";
    author.style.color = ""

    // MAKES THE BORDER/ SPAN LINES IN THE BACKGROUNDS OF BG 1 WHITE, THE LINES IN THE BACKGROUND OF BG 3 BLACK,
    // AND TRANSPARENT IN THE BACKGROUND OF BGS 2, 4, AND 5
    lines(bgIndex)

    // CHANGES THE COLOR OF THE GOOGLE ICONS/ BUTTONS FOR EACH BACKGROUND
    btnColor(bgIndex)

    // USES THE IMAGE LINKS AND FONTS LISTED IN THE BACKGROUNDS ARRAY TO CHANGE THE BACKGROUND AND FONTS ON THE PAGE EVERYTIME THE REFRESH BUTTON IS CLICKED
    document.body.style.backgroundImage = "url('" + backgrounds[bgIndex][0] + "')";
    pageTitle.style.fontFamily = backgrounds[bgIndex][2];
    quote.style.fontFamily = backgrounds[bgIndex][1];
    author.style.fontFamily = backgrounds[bgIndex][2];

    // MAKES THE BORDER/ SPAN LINES IN THE BACKGROUND OF BACKGROUND 1 WHITE, THE LINES IN THE BACKGROUND OF BACKGROUND 3 BLACK,
    // AND TRANSPARENT IN THE BACKGROUND OF BACKGROUNDS 2, 4, AND 5
    backgrounds[bgIndex][3]()

    // CALLS FETCHQUOTE() FUNCTION SO THAT EVERYTIME THE REFRESH BUTTON IS CLICKED, A NEW RANDOM QUOTE WILL BE DISPLAYED ON THE SCREEN
    fetchQuote()
})


// THE FOLLOWING FIVE FUNCTIONS CHANGE THE PAGES STYLE ELEMENTS TO MAKE EACH OF THE FIVE BACKGROUNDS UNIQUE

// changes style elements for background 1
function bgOne() {
}

// changes style elements for background 2
function bgTwo() {
 quote.style.fontStyle = "italic";
 quote.style.fontWeight = "bold"
 cremeBg.style.backgroundColor = "#faebd7"
 pageTitle.style.color = "#737373"
 quote.style.color = "#737373"
 author.style.color = "#737373"
}

// changes style elements for background 3
function bgThree() {
quote.style.fontWeight = "bold"
 pageTitle.style.color = "#323232"
 quote.style.color = "#323232";
 author.style.color = "#323232"

}

// changes style elements for background 4
function bgFour() {
 cremeBg.style.backgroundColor = "#faebd7"
 pageTitle.style.color = "#896244"
 quote.style.color = "#896244"
 author.style.color = "#896244"
 pageTitle.style.fontWeight = "bold"
 author.style.fontWeight = "bold"

}

// changes style elements for background 5
function bgFive() {
 pageTitle.style.color = "brown"
 quote.style.color = "brown";
 author.style.color = "brown"
cremeBg.style.backgroundColor = "#faebd7"
}

// MAKES THE BORDER/ SPAN LINES IN THE BACKGROUND OF BACKGROUND 1 WHITE, THE LINES IN THE BACKGROUND OF BACKGROUND 3 BLACK,
// AND TRANSPARENT IN THE BACKGROUND OF BACKGROUNDS 2, 4, AND 5
function lines(bgIndex) {

        console.log(spanLines)
        for (var i = 0, max = spanLines.length; i < max; i++) {
            if (bgIndex == 0) {
                console.log("im bg 0ne")
                if (i < 2) {
                    spanLines[i].style.borderTop = "2px solid"
                    spanLines[i].style.color = "white"
                    } else if (i > 1 && i < 4) {
                        spanLines[i].style.borderLeft = "2px solid"
                        spanLines[i].style.color = "white"
                    }
            } else if (bgIndex == 2) {
                console.log("im bg Three")
                if (i < 2) {
                    spanLines[i].style.borderTop = "2px solid"
                    spanLines[i].style.color = "black"
                    } else if (i > 1 && i < 4) {
                        spanLines[i].style.borderLeft = "2px solid"
                        spanLines[i].style.color = "black"
                        console.log("my span border color is now" + spanLines[i].style.color)
                    }
            } else {
                console.log("im bg Not bg One or Three")
                if (i < 2) {
                    spanLines[i].style.borderTop = "2px"
                    spanLines[i].style.color = ""
                    console.log("my span border color is now" + spanLines[i].style.color)
                    } else if (i > 1 && i < 4) {
                        spanLines[i].style.borderLeft = "2px"
                        spanLines[i].style.color = ""
                    }
    }
    }


}

// CHANGES THE COLOR OF THE GOOGLE ICONS/ BUTTONS FOR EACH BACKGROUND
function btnColor(bgIndex) {
    for (var i = 0, max = btns.length; i < max; i++) {
        if (bgIndex == 0) {
            btns[i].style.color = "white"
        }
        else if (bgIndex == 1) {
            btns[i].style.color = "#737373"
        } else if (bgIndex == 2) {
            btns[i].style.color = "#323232"
        } else if (bgIndex == 3) {
            btns[i].style.color = "#896244"
        } else if (bgIndex == 4) {
            btns[i].style.color = "#896244"
        }
    }
}

// FETCHES THE INSPIRATIONAL QUOTES API AND DISPLAYS THE QUOTE AND ITS AUTHOR ON THE PAGE
function fetchQuote() {
    fetch("http://quotable.io/random")
        .then(function (response){
            response.json().then(function (data) {
            quote.innerHTML = '"' + data.content + '"'
            author.innerHTML = "- " + data.author
            savebtn.href = 'mailto:?subject=Check Out This Motivational Quote by ' + data.author + '!&body="' + data.content + '"'

        })
})}
