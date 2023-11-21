class ProductManager {
    constructor() {
        this.products = [];
    }

    generateId() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }


    getProducts() {
        return this.products;
    }
    addProduct({ title, description, price, thumbnail, code, stock }) {

        if (this.products.some(product => product.code === code)) {
            throw new Error('El código de producto ya está en uso');
        }
        const productId = this.generateId();

        const newProduct = {
            id: productId,
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        };

        this.products.push(newProduct);

        return productId;
    }

    getProductById(productId) {
        const product = this.products.find(product => product.id === productId);
        if (!product) {
            throw new Error('Not found');
        }

        return product;
    }
}

const productManager = new ProductManager();



const productId = productManager.addProduct({
    title: 'producto prueba',
    description: 'Este es un producto prueba',
    price: 200,
    thumbnail: 'Sin imagen',
    code: 'abc123',
    stock: 25,
});

console.log(productManager.getProducts());

try {
    productManager.addProduct({
        title: 'producto nuevo',
        description: 'Este es un producto nuevo',
        price: 300,
        thumbnail: 'Sin imagen',
        code: 'abc123',
        stock: 20,
    });
} catch (error) {
    console.error(error.message);

}

const foundProduct = productManager.getProductById(productId);
console.log(foundProduct);