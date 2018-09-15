// let getNombre = async() => 'Naira';

let getNombre = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Yorch');
        }, 3000);
    });
};

let saludo = async() => {
    let nombre = await getNombre();

    return `Hello there ${nombre}`;
}


saludo().then(mensaje => {
    console.log(mensaje);
});