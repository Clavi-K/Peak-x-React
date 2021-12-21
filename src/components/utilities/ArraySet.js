const prom = new Promise((resolve) => {

    setTimeout(() => {

        const prods = require('../data/Products.json');

        resolve(prods);

    }, 2000);

});

export default prom;

