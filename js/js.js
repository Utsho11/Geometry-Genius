document.getElementById('blog-btn').addEventListener('click',function(){
    window.location.href = "QnA.html"
})

function getInputValueById(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldString = inputField.value;
    const inputValue = parseFloat(inputFieldString);
    inputField.value = "";
    return inputValue;
}
let serial = 0;
function displayData(itemName,area){
    const container = document.getElementById('table-container')

    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${serial}.</td>
    <td>${itemName}</td>
    <td>${area} cm<sup>2</sup></td>
    <td><button class="btn btn-primary">convert m<sup>2</sup></button></p></td>
    `;
    container.appendChild(tr);
}

document.getElementById('triangle-btn').addEventListener('click',function(){
    const inputOne = getInputValueById('triangle-base');
    const inputTwo = getInputValueById('triangle-height');
    serial += 1;

    if(isNaN(inputOne) || isNaN(inputTwo)){
        alert('plz enter valid integer');
    }
    else{
    const areaTotal = 0.5 * inputOne * inputTwo;
    const area = areaTotal.toFixed(2);
    
    const itemName = document.getElementById('first-item-name').innerText;

    displayData(itemName,area);
    }

})
document.getElementById('rectangle-btn').addEventListener('click',function(){
    const inputOne = getInputValueById('rectangle-length');
    const inputTwo = getInputValueById('rectangle-width');
    serial += 1;

    if(isNaN(inputOne) || isNaN(inputTwo)){
        alert('plz enter valid integer');
    }
    else{
    const areaTotal = inputOne * inputTwo;
    const area = areaTotal.toFixed(2);
    
    const itemName = document.getElementById('second-item-name').innerText;

    displayData(itemName,area);
    }

})
document.getElementById('parallelogram-btn').addEventListener('click',function(){
    const inputOne = getInputValueById('parallelogram-height');
    const inputTwo = getInputValueById('parallelogram-base');
    serial += 1;

    if(isNaN(inputOne) || isNaN(inputTwo)){
        alert('plz enter valid integer');
    }
    else{
    const areaTotal = inputOne * inputTwo;
    const area = areaTotal.toFixed(2);
    
    const itemName = document.getElementById('third-item-name').innerText;

    displayData(itemName,area);
    }

})
document.getElementById('rhombus-btn').addEventListener('click',function(){
    const inputOne = getInputValueById('rhombus-d1');
    const inputTwo = getInputValueById('rhombus-d2');
    serial += 1;

    if(isNaN(inputOne) || isNaN(inputTwo)){
        alert('plz enter valid integer');
    }
    else{
    const areaTotal = 0.5 * inputOne * inputTwo;
    const area = areaTotal.toFixed(2);
    
    const itemName = document.getElementById('forth-item-name').innerText;

    displayData(itemName,area);
    }

})
document.getElementById('pentagon-btn').addEventListener('click',function(){
    const inputOne = getInputValueById('pentagon-p');
    const inputTwo = getInputValueById('pentagon-b');
    serial += 1;

    if(isNaN(inputOne) || isNaN(inputTwo)){
        alert('plz enter valid integer');
    }
    else{
    const areaTotal = 0.5 * inputOne * inputTwo;
    const area = areaTotal.toFixed(2);
    
    const itemName = document.getElementById('fifth-item-name').innerText;

    displayData(itemName,area);
    }

})
document.getElementById('ellipse-btn').addEventListener('click',function(){
    const inputOne = getInputValueById('ellipse-a');
    const inputTwo = getInputValueById('ellipse-b');
    serial += 1;

    if(isNaN(inputOne) || isNaN(inputTwo)){
        alert('plz enter valid integer');
    }
    else{
    const areaTotal = 3.1416 * inputOne * inputTwo;
    const area = areaTotal.toFixed(2);
    
    const itemName = document.getElementById('sixth-item-name').innerText;

    displayData(itemName,area);
    }

})
