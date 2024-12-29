let lastFiveCalculations = [];

function appendValue(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function calculate() {
  const display = document.getElementById('display');
  try {
    const result = eval(display.value);
    if (result !== undefined) {
      const calculation = `${display.value} = ${result}`;
      updateHistory(calculation);
      display.value = result;
    }
  } catch (error) {
    display.value = 'Error';
  }
}

function updateHistory(calculation) {
  lastFiveCalculations.unshift(calculation); 
  if (lastFiveCalculations.length > 5) {
    lastFiveCalculations.pop(); 
  }
  renderHistory();
}

function renderHistory() {
  const historyList = document.getElementById('history');
  historyList.innerHTML = '';
  lastFiveCalculations.forEach(calc => {
    const li = document.createElement('li');
    li.textContent = calc;
    historyList.appendChild(li);
  });
}
function toggleHistory() {
  const historyContainer = document.getElementById('history-container');
  
  if (historyContainer.style.display === 'none') {
    historyContainer.style.display = 'block'; 
  } else {
    historyContainer.style.display = 'none'; 
  }
}
