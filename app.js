const Container = document.querySelector('#container');
const btn = document.querySelector('button');

function addDiv() {
    const newDiv = document.createElement('div');
    newDiv.style.cssText = 'width: 100px; height: 100px; cursor: pointer;';
    Container.appendChild(newDiv);
}

for (let i = 0; i < 16; i++) {
    addDiv();
}


function removeAllChildNodes(parentNode) {
    while (parentNode.hasChildNodes()) {
        parentNode.removeChild(parentNode.firstChild);
    }
}

function addDivOfSize(squarePerSide) {
    let squareLength = 400 / squarePerSide;
    const newDiv = document.createElement('div');
    newDiv.style.cssText = `width: ${squareLength}px; height: ${squareLength}px; cursor: pointer;`;
    Container.appendChild(newDiv);
}

btn.addEventListener('click', () => {
    removeAllChildNodes(Container);
    let userInput = Number(prompt("What is the no of squares per side for the new grid"));
    // Check for user errors using while loop
    while (userInput == NaN) {
        userInput = Number(prompt("Enter a valid number"));
    }
    while (userInput > 100) {
        userInput = Number(prompt("Your Input should not be more than 100"));
    }
    while (userInput < 1) {
        userInput = Number(prompt("Your Input should be more than zero"));
    }
    let totalSquares = Math.pow(userInput, 2);

    for (let i = 0; i < totalSquares; i++) {
        addDivOfSize(userInput);
    }    
})

const containerChild = Container.children;
for (let i = 0; i < containerChild.length; i++) {
    containerChild[i].addEventListener('mouseover', () => {
    containerChild[i].style.backgroundColor = 'green';
    })
}
