// funcão recursiva
function recursiva(max) {
    console.log(max);
    if (max >= 10) return;
    max++;
    console.log(max);
    recursiva(max); // se chama de novo
}

recursiva(0);