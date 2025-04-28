const container = document.getElementById('container');
let size = 20;

for (let i = 0; i < 10; i++) {
    const div = document.createElement('div');
    div.className = 'box';
    div.style.width = size + 'px';
    div.textContent = `დივი #${i + 1}`;
    
    if (i % 2 === 0) {
        container.prepend(div);  
    } else {
        container.append(div);  
    }

    size *= 2;
}