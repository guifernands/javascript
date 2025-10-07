const content = document.querySelector('.content');
const elements = [
    {tag: 'p', texto: 'Frase 1'}, // 0
    {tag: 'div', texto: 'Frase 2'}, // 1
    {tag: 'footer', texto: 'Frase 3'}, // 2
    {tag: 'section', texto: 'Frase 4'} // 3
];

for ( let i = 0; i < elements.length; i++ ) {
    let {tag, texto} = elements[i];
    content.innerHTML += `<${tag}>${texto}</${tag}>`;
}
