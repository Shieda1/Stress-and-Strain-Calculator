// https://calculator.swiftutors.com/stress-and-strain-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const stressRadio = document.getElementById('stressRadio');
const forceRadio = document.getElementById('forceRadio');
const areaRadio = document.getElementById('areaRadio');

let stress;
let force = v1;
let area = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

stressRadio.addEventListener('click', function() {
  variable1.textContent = 'Force (N)';
  variable2.textContent = 'Area (m²)';
  force = v1;
  area = v2;
  result.textContent = '';
});

forceRadio.addEventListener('click', function() {
  variable1.textContent = 'Stress (Pa)';
  variable2.textContent = 'Area (m²)';
  stress = v1;
  area = v2;
  result.textContent = '';
});

areaRadio.addEventListener('click', function() {
  variable1.textContent = 'Stress (Pa)';
  variable2.textContent = 'Force (N)';
  stress = v1;
  force = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(stressRadio.checked)
    result.textContent = `Stress = ${computeStress().toFixed(2)} Pa`;

  else if(forceRadio.checked)
    result.textContent = `Force = ${computeForce().toFixed(2)} M`;

  else if(areaRadio.checked)
    result.textContent = `Area = ${computeArea().toFixed(2)} m²`;
})

// calculation

function computeStress() {
  return Number(force.value) / Number(area.value);
}

function computeForce() {
  return Number(stress.value) * Number(area.value);
}

function computeArea() {
  return Number(force.value) / Number(stress.value);
}