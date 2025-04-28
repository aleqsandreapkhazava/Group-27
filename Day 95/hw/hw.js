  const button = document.getElementById('addButton')
    button.addEventListener('click', () => {
        const newDiv = document.createElement('div');

        newDiv.classList.add('new-div');
        newDiv.textContent = 'New Div';
        document.body.appendChild(newDiv);
    });
// smth like this ?
