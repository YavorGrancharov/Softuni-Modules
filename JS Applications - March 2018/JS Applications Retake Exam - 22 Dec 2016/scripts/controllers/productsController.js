let productsController = (() => {
    function getAllProducts(ctx) {
        if (!authService.isAuth()) {
            ctx.redirect('#/home');
            return;
        }

        let username = sessionStorage.getItem('username');

        productsService.products().then((products) => {
            if (products.length === 0) {
                ctx.empty = true;
            } else {
                ctx.products = products;

                for (let product of products) {
                    ctx.name = product.name;
                    ctx.description = product.description;
                    ctx.price = Number(product.price).toFixed(2);

                    ctx.loadPartials({
                        header: './templates/common/header.hbs',
                        footer: './templates/common/footer.hbs',
                        product: './templates/products/product.hbs'
                    }).then(function () {
                        this.partial('./templates/products/productsPage.hbs')
                    })
                }
            }
        })
    }

    function getUserCart(ctx) {
        if (!authService.isAuth()) {
            ctx.redirect('#/home');
            return;
        }

        let userId = sessionStorage.getItem('userId');
        let username = sessionStorage.getItem('username');

        productsService.cart(userId).then((user) => {
            if (user.cart === undefined) {
                ctx.empty = true;
            } else {
                let products = [];
                for (let productId in user.cart) {
                    if (user.cart.hasOwnProperty(productId)) {

                        let currentProduct = {
                            id: productId,
                            quantity: Number(user.cart[productId].quantity),
                            name: user.cart[productId].product.name,
                            description: user.cart[productId].product.description,
                            price: user.cart[productId].product.price,
                            total: (Number(user.cart[productId].product.price) * Number(user.cart[productId].quantity)).toFixed(2)
                        };

                        products.push(currentProduct);
                    }
                }

                ctx.products = products;

                ctx.loadPartials({
                    header: './templates/common/header.hbs',
                    footer: './templates/common/footer.hbs',
                    cart: './templates/products/cart.hbs'
                }).then(function () {
                    this.partial('./templates/products/cartPage.hbs');
                });
            }
        })
    }

    function purchaseProduct(ctx) {
        if (!authService.isAuth()) {
            ctx.redirect('#/home');
            return;
        }

        let username = sessionStorage.getItem('username');
        let userId = sessionStorage.getItem('userId');
        let productId = ctx.params.id.substr(1);

        productsService.getProductById(productId).then((product) => {
            productsService.cart(userId).then((userInfo) => {
                userInfo.cart = userInfo.cart || {};

                if (userInfo.cart.hasOwnProperty(productId)) {
                    userInfo.cart[productId].quantity = Number(userInfo.cart[productId].quantity) + 1;
                } else {
                    userInfo.cart[productId] = {
                        quantity: 1,
                        product: {
                            name: product.name,
                            description: product.description,
                            price: product.price
                        }
                    }
                }

                productsService.updateUser(userInfo).then(() => {
                    notifyService.showInfo('Product purchased.');
                    ctx.redirect('#/cart')
                })
            })
        })
    }

    function discardProduct(ctx) {
        if (!authService.isAuth()) {
            ctx.redirect('#/home');
            return;
        }

        let userId = sessionStorage.getItem('userId');
        let productId = ctx.params.id.substr(1);

        productsService.cart(userId).then((userInfo) => {
            let cart = userInfo.cart;

            cart[productId].quantity--;
            if (Number(cart[productId].quantity) === 0) {
                delete cart[productId];
            }

            userInfo.cart = cart;

            productsService.updateUser(userInfo).then(() => {
                notifyService.showInfo('Product discarded.');
                ctx.redirect('#/cart');
            })
        })

    }

    return {
        getAllProducts,
        getUserCart,
        purchaseProduct,
        discardProduct
    }
})();