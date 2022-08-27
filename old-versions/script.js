//////////////// TO DO LIST //////////////////////
// FINISH EDITING EACH FUNCTION TO LOOK LIKE CANVA
// MAKE RESPONSIVE WORK
// ADD SHARE BUTTON FUNCTIONALITY OR GET RID OF IT
// ADD COMMENTS FOR EVERYTHING YOU'VE DONE SO FAR
// CHANGE PADDING TO MARGINS

backgrounds = 
            [// [bg img,        quote font,                 h1 and author font,             function]
                ["1.png",   "'Noto Serif Display', serif",    "'Lato', sans-serif",             bgOne], 
                ["2.png",   "'Fraunces', serif",              "Arial, Helvetica, sans-serif",   bgTwo], 
                ["3.png",   "'Tangerine', cursive",           "'Cardo', serif",                 bgThree], 
                ["4.png",   "'Cormorant Garamond', serif",    "'Cormorant Garamond', serif",    bgFour], 
                ["5.jpg",   "'Playfair Display', serif",      "Arial, Helvetica, sans-seri",    bgFive]
            ]

max = backgrounds.length;
console.log(max)

function getRandomInt(max) {
    var randInt = (Math.floor(Math.random() * max))
    return randInt
}


document.getElementById("refreshbtn").addEventListener("click", function () {
    bgIndex = getRandomInt(max)
    console.log(bgIndex)

    document.body.style.backgroundImage = "url('" + backgrounds[bgIndex][0] + "')";
    console.log(backgrounds[bgIndex][1])
    console.log(backgrounds[bgIndex][2])
    document.getElementById("pageTitle").style.fontFamily = backgrounds[bgIndex][2];
    document.getElementById("quote").style.fontFamily = backgrounds[bgIndex][1];
    document.getElementById("author").style.fontFamily = backgrounds[bgIndex][2];

    backgrounds[bgIndex][3]()
})


function bgOne() {
    console.log(1)
 // insert span lines
 // change background to background 1
 // change quote font to bg 1 font
 // change h1 and author font to bg 1 font
 // maybe add contrast or decrease brightness of bg (its really bright)
}

function bgTwo() {
    console.log(2)
 // if span lines, remove span lines
 // change background to background 2
 // change quote font to bg 2 font
 // italicize quote font
 // change h1 and author font to bg 2 font
}

function bgThree() {
    console.log(3)
 // if span lines, remove span lines
 // change background to background 3
 // change quote font to bg 3 font
 // change h1 and author font to bg 3 font
 // h1 and author line spacing 373
 // h1 and author all letters upper case
 // change button colors to black
}

function bgFour() {
    console.log(4)
 // if span lines, remove span lines
 // change background to background 4
 // change font color to off-black
 // add off-white or creme background
 // change quote font to bg 4 font
 // make quote font italicized
 // change h1 and author font to bg 4 font
 // change h1 and author font color to #896244
 // make h1 and author font bold
}

function bgFive() {
    console.log(5)
 // if span lines, remove span lines
 // change background to background 5
 // change font color to brown
 // add off-white or creme background
 // change quote font to bg 5 font
 // change h1 and author font to bg 5 font
}
