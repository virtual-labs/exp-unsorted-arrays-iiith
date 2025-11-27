var searchArt;
class SearchPracticeArtefact {
    constructor() {
        this.interval = 0;
        this.arrayElements = [];
        this.arrayLength = 0;
        this.finished = false;
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
        this.midElementIndexOrder = new Array();
    }
};
function randomise() {

    // adding the card elements into the html page dynamically
    // for(var i=0; i<10;++i)
    // {
    //    var node = document.createElement("div");
    //    node.classList.add("card");
    //    document.getElementById("cards")..appendChild(node);
    // }

    searchArt = new SearchPracticeArtefact();
    for (var i = 0; i < 10; ++i) {
        searchArt.randomNumberArray[i] = Math.floor(Math.random() * 90 + 10);
    }
    searchArt.arrayElements = document.querySelectorAll('.card');
    searchArt.randomNumberArray.sort();

    for (var i = 0; i < 10; ++i) {
        searchArt.arrayElements[i].innerHTML = searchArt.randomNumberArray[i];
        searchArt.arrayElements[i].value = Number(i);
        searchArt.arrayElements[i].style.fontStyle = "normal";
        searchArt.arrayElements[i].style.color = "white";
    }
    init();
}
function writeInstructionMessage(message) {
    document.getElementById("ins").innerHTML = "<h4><b></b></h4><h4>" + message;
}
function init() {
    document.getElementById("answer").onkeyup = function () {
        manage(this);
    }
    document.getElementById("submit").disabled = true;
    document.getElementById("submit").onclick = function () {
        checkAnswer();
        this.innerHTML = "Try Another!";
        this.onclick = function () {
            reload();
        }
    }
    document.getElementById("reload").onclick = function () {
        reload();
    }
    writeInstructionMessage("Enter the order of indices (0 based indexing) the elements of the array will be compared in a binary search for the given Query element!");
    chooseQueryElement();
    document.getElementById("query").value = searchArt.queryElement;
}
function reload() {
    location.reload(true);
}
function getBinarySearchOrder() {

    // Set the Global start and end to represent the entire array as window
    searchArt.start = 0
    searchArt.end = searchArt.randomNumberArray.length - 1;

    searchArt.randomNumberArray.sort();
    let start = 0,
        end = searchArt.randomNumberArray.length - 1;
    // Iterate while start not meets end 
    while (start <= end) {

        // Find the mid index 
        let mid = Math.floor((start + end) / 2);
        searchArt.midElementIndexOrder.push(mid);

        // If element is present at mid, return True 
        if (searchArt.randomNumberArray[mid] === searchArt.queryElement) return true;

        // Else look in left or right half accordingly 
        else if (searchArt.randomNumberArray[mid] < searchArt.queryElement)
            start = mid + 1;
        else
            end = mid - 1;
    }
    return false;
}
function manage(txt) {
    var bt = document.getElementById("submit");
    if (txt.value != '') {
        bt.disabled = false;
    } else {
        bt.disabled = true;
    }
}
function checkAnswer() {
    let answer = document.getElementById("answer").value;
    answer = answer.split(/,| /);
    answer = answer.filter(function(element){
        return element != "";
    });
    console.log(answer);
    getBinarySearchOrder();
    for (var i = 0; i < answer.length; ++i) {
        if (answer[i] != searchArt.midElementIndexOrder[i]) {
            var msg = "Wrong Answer, the correct sequence is the following : ";
            for (var j = 0; j < searchArt.midElementIndexOrder.length; ++j) {
                msg += searchArt.midElementIndexOrder[j] + ", ";
            }
            writeInstructionMessage(msg);
            return false;
        }
    }
    writeInstructionMessage("Correct Answer, Great Job!");
}
function chooseQueryElement() {
    if (getRandomInt(5)) {
        searchArt.queryElement = getRandomInt(500);
    } else {
        searchArt.queryElement = searchArt.randomNumberArray[getRandomInt(10)];
    }
}
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
