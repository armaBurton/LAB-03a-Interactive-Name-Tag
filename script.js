const nameInput = document.getElementById(`name-input`);
const nameDisplay = document.getElementById(`name`);
const nameTag = document.getElementById(`wrapper`);
const button = document.getElementById(`button`);
const color = document.getElementById(`colors`);
// const colorValue = color.options[color.selectedIndex].value;
const colorButton = document.getElementById(`color-button`);
const bkgndColor = document.getElementById(`bkgnd-color`);

const updateColor = colorButton.addEventListener('click', () => {
    const colorValue = color.options[color.selectedIndex].value;
    bkgndColor.style.backgroundColor = colorValue;
})

const updateButton = button.addEventListener('click', () => {
    const nameInput = document.getElementById(`name-input`);
    console.log(nameInput.value);
    nameDisplay.textContent = nameInput.value;
})

// nameTag.classList.add(`fadded`);
