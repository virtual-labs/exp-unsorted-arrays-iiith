var searchArt;
class SearchExerciseArtefact {
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

    searchArt = new SearchExerciseArtefact();
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
        searchArt.arrayElements[i].addEventListener("click", function () {
            checkAnswer(eval(this.value));
        });
    }
    init();
}
function writeInstructionMessage(message) {
    document.getElementById("ins").innerHTML = message;
}

function init() {
    document.getElementById("query").onkeyup = function() {
        manage(this);
    }
    document.getElementById("reset").disabled = true;
    document.getElementById("reset").onclick = function () {
        this.innerHTML = "Reset";
        searchArt.queryElement = Number(document.getElementById("query").value);
        document.getElementById("reset").disabled = true;
        getBinarySearchOrder(searchArt.randomNumberArray, searchArt.queryElement);
        writeInstructionMessage(`Current Start Index = ${searchArt.start} and Current End Index = ${searchArt.end}. Click on the Middle element of this Array window to go to check if it matches with the query element!`);
        this.onclick = function () {
            reload();
        };
    }
    writeInstructionMessage("Enter a query element to be searched in the array and press start to begin binary searching on the elements!");
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
function checkAnswer(val) {
    if (val == searchArt.midElementIndexOrder[0]) {
        searchArt.mid = searchArt.midElementIndexOrder[0];
        if (searchArt.midElementIndexOrder.length > 1) {
            if (searchArt.midElementIndexOrder[1] < searchArt.midElementIndexOrder[0]) {
                for (var i = searchArt.mid; i <= searchArt.end; ++i) {
                    searchArt.arrayElements[i].style.backgroundColor = "grey";
                }

                // Updating the end pointer
                searchArt.end = searchArt.mid - 1;
                writeInstructionMessage(`Good Job! Since ${searchArt.randomNumberArray[searchArt.mid]} is greater than ${searchArt.queryElement}, we ignore the right half of the current window. Current Start Index = ${searchArt.start} and Current End Index = ${searchArt.end}. Pick the middle element of this window.`);
            } else {
                for (var i = searchArt.start; i <= searchArt.mid; ++i) {
                    searchArt.arrayElements[i].style.backgroundColor = "grey";
                }

                // Updating the start pointer
                searchArt.start = searchArt.mid + 1;
                writeInstructionMessage(`Good Job! Since ${searchArt.randomNumberArray[searchArt.mid]} is lesser than ${searchArt.queryElement}, we ignore the left half of the current window. Current Start Index = ${searchArt.start} and Current End Index = ${searchArt.end}. Pick the middle element of this window.`);
            }
        } else {
            // last element could result in match found or match not found
            if (searchArt.randomNumberArray[searchArt.mid] == searchArt.queryElement) {
                // Element found in the array
                writeInstructionMessage(`${searchArt.queryElement} was found in the array at position ${searchArt.mid}. Binary Search Complete. Great Work!`);
                searchArt.arrayElements[searchArt.mid].style.backgroundColor = "black";
            } else {
                for (var i = 0; i < 10; ++i) {
                    searchArt.arrayElements[i].style.backgroundColor = "crimson";
                }
                writeInstructionMessage(`${searchArt.queryElement} was not found in the array. Binary Search Complete. Great Work!`);
            }
            document.getElementById("reset").disabled = false;
        }
        searchArt.midElementIndexOrder.shift();
    } else {
        writeInstructionMessage(`Wrong Element picked. Current Start Index = ${searchArt.start} and Current End Index = ${searchArt.end}. Pick the middle element of this window.`);
        searchArt.arrayElements[val].style.backgroundColor = "crimson";
        setTimeout(() => {
            searchArt.arrayElements[val].style.backgroundColor = "#288ec8";
          }, 500)
    }
}
function manage(txt) {
    var bt = document.getElementById("reset");
    if (txt.value != '') {
        bt.disabled = false;
        if(isNaN(txt.value)) {
            window.alert("Please enter an Integer only!");
            txt.value = '';
        }
    }
    else {
        bt.disabled = true;
    }
}
