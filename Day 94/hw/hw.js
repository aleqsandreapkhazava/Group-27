const colorses = [
    'red', 'blue', 'green', 'orange', 'purple', 'pink', 'yellow', 'cyan', 'magenta'
];
const parents = document.querySelector('.parent');
const children = parents.querySelectorAll('.child');
children.forEach((child, index) => {
    child.style.backgroundColor = colors[index % colors.length];
});