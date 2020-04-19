console.log('sthththt');

const addElement = (e, node, txt, attr, val) => {
    e.preventDefault();
    const newElement = document.createElement(node);
    const newText = document.createTextNode(txt);
    newElement.appendChild(newText);
    newElement.setAttribute(attr, val);
    document.body.appendChild(newElement);
}

const addForm = document.querySelector('.form--add');
addForm.addEventListener('submit', (e) => addElement(
    e, 
    addForm.elements.node.value,
    addForm.elements.txt.value,
    addForm.elements.attr.value,
    addForm.elements.val.value
    ));