document.getElementById('blog-btn').addEventListener('click',function(){
    window.location.href = 'QnA.html';
})

function getInputValueById(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldString = inputField.value;
    const inputValue = parseFloat(inputFieldString);
    return inputValue;
}

function displayData(itemName,Area){
    const container = document.getElementById('table-container')

    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${1}.</td>
    <td>${itemName}</td>
    <td>${Area} cm<sup>2</sup></td>
    <td><button class="btn btn-primary">convert m<sup>2</sup></button></p></td>
    `;
    container.appendChild(tr);
}


document.getElementById('triangle-btn').addEventListener('click',function(){
    const inputOne = getInputValueById('triangle-base');
    const inputTwo = getInputValueById('triangle-height');

    if(inputOne === Number & inputTwo === Number){
    const itemName = document.getElementById('first-item-name').innerText;

    const AreaValue = inputOne * inputTwo * 0.5;
    const Area = AreaValue.toFixed(2);

    displayData(itemName,Area);
    }
    else
    alert('plz enter valid integers');
    
})
document.getElementById('rectangle-btn').addEventListener('click',function(){
    const inputOne = getInputValueById('rectangle-length');
    const inputTwo = getInputValueById('rectangle-width');

    if(inputOne === Number & inputTwo === Number){
    
    const itemName = document.getElementById('second-item-name').innerText;

    const AreaValue = inputOne * inputTwo;
    const Area = AreaValue.toFixed(2);

    displayData(itemName,Area);
}
else
alert('plz enter valid integers');
    
})
document.getElementById('parallelogram-btn').addEventListener('click',function(){
    const inputOne = getInputValueById('parallelogram-base');
    const inputTwo = getInputValueById('parallelogram-height');


   
if(inputOne === Number & inputTwo === Number)
{
const itemName = document.getElementById('third-item-name').innerText;
const AreaValue = inputOne * inputTwo;
const Area = AreaValue.toFixed(2);

displayData(itemName,Area);}
        
    
    
    else
    alert('plz enter valid integers');
    })

