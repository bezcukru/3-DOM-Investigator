const addElement = (e, node, txt, attr, val) => {
    e.preventDefault();
    const newElement = document.createElement(node);

    if (txt) {
        const newText = document.createTextNode(txt);
        newElement.appendChild(newText);
    }
    
    if (attr) {
       newElement.setAttribute(attr, val); 
    }
    
    document.querySelector('.content').appendChild(newElement);
}

const searchElement = (e, element) => {
    e.preventDefault();
    const infoBox = document.querySelector('.result');
    infoBox.textContent = ' ';
    const elements = document.querySelectorAll(element);
    console.log(elements);
    if (elements.length > 1) {
        infoBox.innerHTML = `<p class="result_info"> There are ${elements.length} <strong>${element}</strong> elements in this document:</p>`;
        showInfo(elements, infoBox);
    } else if (elements.length = 1){
        infoBox.innerHTML = `<p class="result_info"> There is 1  <strong>${element}</strong> element in this document:</p>`;
        showInfo(elements, infoBox);
    } else {
        infoBox.innerHTML = `<p class="result_info"> There are no <strong>${element}</strong> elements in this document.</p>`;
        return;
    }
}

const showInfo = (elements, infoBox) => {
    elements.forEach( element => {
        const item = document.createElement('div');
        item.className = 'element_info';
        item.innerHTML = `
        <div>${element.nodeName}</div>
        <div>Class: ${element.className}</div>
        <div>Height: ${element.offsetHeight}</div>
        <div>Width: ${element.offsetWidth}</div>
        <div>Distance from top: ${element.offsetTop}</div>
        <div>Number of child elements: ${element.childElementCount}</div>
        
        `
        infoBox.appendChild(item);
       })
    
};

// event listeners

const addForm = document.querySelector('.form--add');
addForm.addEventListener('submit', (e) => addElement(
    e, 
    addForm.elements.node.value,
    addForm.elements.txt.value,
    addForm.elements.attr.value,
    addForm.elements.val.value
    ));
 
const searchForm = document.querySelector('.form--search');
searchForm.addEventListener('submit', (e) => searchElement(e, (searchForm.elements['element-query'].value)));