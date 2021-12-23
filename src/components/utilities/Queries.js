export const prom = new Promise((resolve) => {

    const prods = require('../data/Products.json');
    resolve(prods);

});



