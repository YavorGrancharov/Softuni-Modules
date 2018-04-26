$(() => {
   const app = Sammy('#app', function () {
       this.use('Handlebars', 'hbs');

       this.get('index.html', homeController.displayHome);
       this.get('#/home', homeController.displayHome);
       this.get('#/profile', homeController.displayHome);

       this.get('#/register', userController.handleRegisterGet);
       this.post('#/register', userController.handleRegisterPost);

       this.get('#/login', userController.handleLoginGet);
       this.post('#/login', userController.handleLoginPost);

       this.get('#/products', productsController.getAllProducts);

       this.get('#/cart', productsController.getUserCart);
       this.get('#/purchase/:id', productsController.purchaseProduct);
       this.get('#/discard/:id', productsController.discardProduct);

       this.get('#/logout', userController.handleLogout);
   });

    app.run();
});