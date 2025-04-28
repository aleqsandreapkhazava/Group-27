const container = document.getElementById('container');


function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
for (let i = 0; i < 10; i++) {
    const div = document.createElement('div');
    div.className = 'box';
    div.textContent = `დივი #${i + 1}`;
    div.style.backgroundColor = getRandomColor(); 
    if (i % 2 === 0) {
        container.prepend(div);  
    } else {
        container.append(div);  
    }
}