document.addEventListener('DOMContentLoaded', () => {
    const flexContainer = document.querySelector('.flex-container');
    const gapInput = document.getElementById('gap');
    const buttons = document.querySelectorAll('button[data-flex-direction], button[data-justify-content], button[data-align-items], button[data-grow]');
    const resetFlexboxBtn = document.getElementById('reset-flexbox');
    const setGapBtn = document.getElementById('set-gap');
    const growAllBtn = document.getElementById('grow-all');
    const resetGrowBtn = document.getElementById('reset-grow');
    const growInputs = document.querySelectorAll('input[type="number"]');
    
    setGapBtn.addEventListener('click', () => {
    flexContainer.style.gap = `${gapInput.value}px`;
    });
    
    resetFlexboxBtn.addEventListener('click', () => {
    flexContainer.style.flexDirection = 'row';
    flexContainer.style.justifyContent = 'flex-start';
    flexContainer.style.alignItems = 'flex-start';
    flexContainer.style.gap = '0px';
    gapInput.value = 0;
    growInputs.forEach(input => input.value = 0);
    document.querySelectorAll('.flex-item').forEach(item => item.style.flexGrow = 0);
    });
    
    buttons.forEach(button => {
    button.addEventListener('click', (event) => {
    const { flexDirection, justifyContent, alignItems, grow } = event.target.dataset;
    if (flexDirection) flexContainer.style.flexDirection = flexDirection;
    if (justifyContent) flexContainer.style.justifyContent = justifyContent;
    if (alignItems) flexContainer.style.alignItems = alignItems;
    if (grow) {
    const growInput = document.getElementById(`grow-${grow}`);
    const flexItem = document.getElementById(`item-${grow}`);
    flexItem.style.flexGrow = growInput.value;
    }
    });
    });
    
    growAllBtn.addEventListener('click', () => {
    document.querySelectorAll('.flex-item').forEach(item => item.style.flexGrow = 1);
    growInputs.forEach(input => input.value = 1);
    });
    
    resetGrowBtn.addEventListener('click', () => {
    document.querySelectorAll('.flex-item').forEach(item => item.style.flexGrow = 0);
    growInputs.forEach(input => input.value = 0);
    });
    });
