let getUserById = (id, callback) => {
    let user = {
        id,
        nombre: 'Yorch'
    };

    if (id === 45) {
        callback('usuario no existe')
    } else {
        callback(null, user);
    }
};

getUserById(1, (err, user) => {
    if (err) {
        return;
    }
    console.log('user', user);
});