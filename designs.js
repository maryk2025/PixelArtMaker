// Select color input
const colorPicker = document.getElementById('colorPicker');
// variables for elements representing height, width, grid and submit button
const heightElement = document.querySelectorAll('input')[0];
const widthElement = document.querySelectorAll('input')[1];
const tableGrid = document.getElementById('pixelCanvas');
const submitButton = document.querySelectorAll('input')[2];

// function for making the grid
function makeGrid(){
tableGrid.innerHTML = "";
var height = heightElement.value;
var width = widthElement.value;
for (i = 1; i<=height; i=i+1) {
  const newRow = document.createElement('tr');
  tableGrid.appendChild(newRow);
  for (j = 1; j<=width; j=j+1) {
    const newCell = document.createElement('td');
    newCell.addEventListener('click', function clickResponse() {
      newCell.style.backgroundColor = colorPicker.value;
    });
    newRow.appendChild(newCell);
  }
}
}
// code for making a cleared out grid upon click of submit button
submitButton.addEventListener('click', function (eventSubmit) {
  eventSubmit.preventDefault();
  makeGrid();
});
