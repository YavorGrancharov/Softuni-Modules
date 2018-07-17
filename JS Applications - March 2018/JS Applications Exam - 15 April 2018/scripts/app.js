$(() => {
    const app = Sammy('#container', function () {
        this.use('Handlebars', 'hbs');

        this.get('index.html', homeController.displayHome);
        this.get('#/home', homeController.displayHome);

        this.post('#/register', userController.handleRegister);
        this.post('#/login', userController.handleLogin);
        this.get('#/logout', userController.handleLogout);

        this.post('#/add', receiptController.addNewEntry);
        this.get('#/all', receiptController.getUserReceipts);
        this.get('#/edit', receiptController.getActiveReceipt);

        this.post('#/commit', receiptController.commitReceipt);

        this.get('#/delete/:entryId', receiptController.deleteEntry);
        this.get('#/details/:receiptId', receiptController.getReceiptDetails);
    });

    app.run()
});