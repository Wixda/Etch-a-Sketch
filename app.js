const Container = document.querySelector('#container');

function addDiv() {
    const newDiv = document.createElement('div');
    newDiv.style.cssText = 'padding: 39.7px;'
    Container.appendChild(newDiv);
}

for (let i = 0; i < 16; i++) {
    addDiv();
}