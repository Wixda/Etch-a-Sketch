const Container = document.querySelector('#container');

function addDiv() {
    const newDiv = document.createElement('div');
    newDiv.style.cssText = 'padding: 39.7px;'
    Container.appendChild(newDiv);
}

for (let i = 0; i < 16; i++) {
    addDiv();
}

const containerChild = Container.children;
for (let i = 0; i < containerChild.length; i++) {
    containerChild[i].addEventListener('mouseover', () => {
    containerChild[i].style.backgroundColor = 'green';
    })
}