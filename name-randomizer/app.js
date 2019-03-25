// const randomized = document.querySelector('.btnLosuj').addEventListener('click', function () {
//     let name = Math.floor(Math.random() * 10);
//     //    console.log(ranName);
//     let randomName = names[name];
//     console.log(randomName);
// });


let names = ['alina', 'kamil', 'justyna', 'judyta', 'andżelika', 'mirek', 'piotrek', 'maciek', 'alojzy', 'ida'];
let p = document.getElementById('paragraph');

const randomized = function () {
    let name = Math.floor(Math.random() * 10);
    let randomName = names[name];
    // console.log(randomName);
    p.textContent = `${randomName}`;
}

document.querySelector('.btnLosuj').addEventListener('click', randomized);