const MIN_ANIMATION_SPEED = 100;
const MAX_ANIMATION_SPEED = 2600;
class SearchArtefact {
    constructor(searchType) {
        this.searchType = searchType;
        this.interval = 0;
        this.arrayElements = [];
        this.arrayLength = 0;
        this.finished = false;
        this.action = 0;
        this.elementFound = false;
        this.indexElementFound = -1;
        this.currentIndex = -1;
        this.queryElement = -9999;
        this.randomNumberArray = new Array();
        for (var i = 0; i < 10; ++i) {
            this.randomNumberArray[i] = 0;
        }
        this.start;
        this.end;
        this.mid;
    }
};
var searchArt;

function randomise(searchType) {

    // adding the card elements into the html page dynamically
    // for(var i=0; i<10;++i)
    // {
    //    var node = document.createElement("div");
    //    node.classList.add("card");
    //    document.getElementById("cards")..appendChild(node);
    // }
    
    init(searchType);

    for (var i = 0; i < 10; ++i) {
        searchArt.randomNumberArray[i] = Math.floor(Math.random() * 90 + 10);
    }
    searchArt.arrayElements = document.querySelectorAll('.card');
    if (searchArt.searchType == 1) {
        searchArt.randomNumberArray.sort();
    }
    for (var i = 0; i < 10; ++i) {
        searchArt.arrayElements[i].innerHTML = searchArt.randomNumberArray[i];
        searchArt.arrayElements[i].value = searchArt.randomNumberArray[i];
        searchArt.arrayElements[i].style.fontStyle = "normal";
        searchArt.arrayElements[i].style.color = "white";
    }
    document.getElementById("next").onclick = function () {
        startSearch();
    };
}

function resetInterval() {
    if (searchArt.interval != 0) {
        clearInterval(searchArt.interval);
        searchArt.interval = 0;
    }
}
function changeInterval() {
    resetInterval();
    if (document.getElementById("interval").value != MIN_ANIMATION_SPEED) {
        searchArt.interval = setInterval(nextStep, MAX_ANIMATION_SPEED - document.getElementById("interval").value);
        document.getElementById("pause").style.backgroundColor = "#288ec8";
    } else {
        document.getElementById("pause").style.backgroundColor = "grey";
    }
}
function pause() {
    document.getElementById("interval").value = MIN_ANIMATION_SPEED;
    changeInterval();
}
function binarySearch() {
    if (searchArt.action == 1 && !searchArt.finished) {
        console.log("action 1");
        if(!searchArt.elementFound)
        {
            searchArt.mid = Math.floor(searchArt.start + (searchArt.end - searchArt.start) / 2);
            searchArt.arrayElements[searchArt.mid].style.backgroundColor = "#a4c652";
        }
        searchArt.action = 0;
    } else {
        console.log("action 2");
        if (searchArt.start <= searchArt.end) {
            searchArt.mid = Math.floor(searchArt.start + (searchArt.end - searchArt.start) / 2);
            if (eval(searchArt.arrayElements[searchArt.mid].innerHTML) == searchArt.queryElement) {
                searchArt.arrayElements[searchArt.mid].style.backgroundColor = "black";
                searchArt.finished = true;
                searchArt.elementFound = true;
                searchArt.indexElementFound = searchArt.mid;
            } else if (eval(searchArt.arrayElements[searchArt.mid].innerHTML) < searchArt.queryElement) {
                for (var i = searchArt.start; i <= searchArt.mid; ++i) {
                    searchArt.arrayElements[i].style.backgroundColor = "grey";
                }
                searchArt.start = searchArt.mid + 1;
            } else {
                for (var i = searchArt.mid; i <= searchArt.end; ++i) {
                    searchArt.arrayElements[i].style.backgroundColor = "grey";
                }
                searchArt.end = searchArt.mid - 1;
            }
        } else {
            for (var i = 0; i < searchArt.arrayLength; ++i) {
                searchArt.arrayElements[i].style.backgroundColor = "crimson";
                searchArt.finished = true;
            }
            writeInstructionMessage(`<h4> The Element ${searchArt.queryElement} was not found in the array</h4>`);
        }
        searchArt.action = 1;
    }
}
function linearSearch() {
    for (var i = 0; i < searchArt.arrayLength; ++i) {

        if (i == searchArt.currentIndex) {
            searchArt.arrayElements[i].style.backgroundColor = "#a4c652";
        } else {
            searchArt.arrayElements[i].style.backgroundColor = "#288ec8";
        }
    }
    for(var i=0;i<searchArt.currentIndex;++i)
    {
        searchArt.arrayElements[i].style.backgroundColor = "grey";
    }

    if (eval(searchArt.arrayElements[searchArt.currentIndex].innerHTML) == searchArt.queryElement) {
        searchArt.arrayElements[searchArt.currentIndex].style.backgroundColor = "black";
        searchArt.elementFound = true;
        searchArt.indexElementFound = searchArt.currentIndex;
    } else {
        ++searchArt.currentIndex;
    }
}
function nextStep() {
    if (searchArt.elementFound) {
        searchArt.arrayElements[searchArt.indexElementFound].style.backgroundColor = "black";
        writeInstructionMessage(`<h4> The Element ${searchArt.queryElement} was found in the ${searchArt.indexElementFound} position of the array.</h4>`);
        document.getElementById("next").style.backgroundColor = "grey";
        document.getElementById("next").disabled = true;
        pause();
        return;
    }

    if (!searchArt.elementFound && searchArt.currentIndex == (searchArt.arrayElements.length)) {
        writeInstructionMessage(`<h4>The Element ${searchArt.queryElement} was not found in the array.</h4>`);
        document.getElementById("next").style.backgroundColor = "grey";
        document.getElementById("next").disabled = true;
        for (var i = 0; i < searchArt.arrayElements.length; ++i) {
            searchArt.arrayElements[i].style.backgroundColor = "crimson";
        }
        pause();
        return;
    }

    if (searchArt.searchType == 0) {
        writeInstructionMessage(`Current Index being searched = ${searchArt.currentIndex}.`);
        linearSearch();
    } else if (searchArt.searchType == 1) {
        writeInstructionMessage(`Current Start Index = ${searchArt.start} and Current End Index = ${searchArt.end}. The index of middle element to be compared = ${Math.floor(searchArt.start + (searchArt.end - searchArt.start) / 2)}`);
        binarySearch();
    }
}
function startSearch() {
    searchArt.queryElement = Number(document.getElementById("query").value);
    if (isNaN(searchArt.queryElement)) {
        writeInstructionMessage(`<h4>Enter ${searchArt.queryElement} only a Number</h4>`);
        //window.alert("Enter a Number only");
        reload();
    }
    document.getElementById("query").disabled = true;

    resetInterval();

    searchArt.arrayElements = document.querySelectorAll('.card');
    searchArt.action = 1;
    searchArt.finished = false;
    searchArt.elementFound = false;
    searchArt.indexElementFound = -1;
    searchArt.currentIndex = 0;
    searchArt.arrayLength = searchArt.arrayElements.length;
    searchArt.start = 0;
    searchArt.end = searchArt.arrayLength - 1;

    // Method invoked when the Next button pressed
    document.getElementById("next").onclick = function () {
        nextStep();
    }
    document.getElementById("next").value = "Next";
    document.getElementById("next").innerHTML = "Next";

    if (document.getElementById("interval").value == MIN_ANIMATION_SPEED) {
        document.getElementById("next").disabled = false;
        document.getElementById("pause").style.visibility = "hidden";
    } else {
        document.getElementById("pause").style.visibility = "visible";
        if (searchArt.interval == 0) // No interval / timer set yet
        {
            searchArt.interval = setInterval(nextStep, MAX_ANIMATION_SPEED - document.getElementById("interval").value);
        } else {
            // Timer already present, so delete the current timer and reinitialize another timer
            resetInterval();
        }
    }
}
function reload() {
    location.reload(true);
}
function init(searchType) {
    searchArt = new SearchArtefact(searchType);
    document.getElementById("pause").onclick = function () {
        pause();
    }
    document.getElementById("reset").onclick = function () {
        reload();
    }
    document.getElementById("next").onclick = function () {
        startSearch();
    }
    document.getElementById("next").disabled = true;
    document.getElementById("query").onkeyup = function () {
        manage(this);
    }
    if (searchArt.searchType == 0) {
        writeInstructionMessage(`Enter the element to be searched in the Array and click on start to begin Linear Search for the element`);
    } else {
        writeInstructionMessage(`Enter the element to be searched in the Array and click on start to begin Binary Search for the element`);
    }
}
function manage(txt) {
    var bt = document.getElementById("next");
    if (txt.value != '') {
        bt.disabled = false;
    } else {
        bt.disabled = true;
    }
}
function writeInstructionMessage(message) {
    document.getElementById("ins").innerHTML = message;
}
