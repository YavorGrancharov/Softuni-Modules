$(() => {
   const app = Sammy('#app', function () {
       this.use('Handlebars', 'hbs');

       this.get('/index.html', homeController.displayHome);
       this.get('#/home', homeController.displayHome);
       this.get('#/profile', homeController.displayHome);

       this.get('#/register', userController.handleRegisterGet);
       this.post('#/register', userController.handleRegisterPost);

       this.get('#/login', userController.handleLoginGet);
       this.post('#/login', userController.handleLoginPost);

       this.get('#/logout', userController.handleLogout);

       this.get('#/messages', messagesController.getRecipientMessages);
       this.get('#/archive', messagesController.getSenderMessages);

       this.get('#/create', messagesController.listAllUsers);
       this.post('#/create', messagesController.sendMessage);

       this.get('#/delete/:id', messagesController.deleteMessage);
   });

    app.run()
});