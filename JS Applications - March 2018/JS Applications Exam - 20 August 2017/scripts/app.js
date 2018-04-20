$(() => {
    const app = Sammy('#container', function () {
        this.use('Handlebars', 'hbs');

        this.get('index.html', displayHomePage);
        this.get('#/home', displayHomePage);

        //GET register
        this.get('#/register', (ctx) => {
            ctx.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs'
            }).then(function () {
                this.partial('./templates/forms/registerForm.hbs');
            })
        });

        //POST register
        this.post('#/register', (ctx) => {
            let username = ctx.params.username;
            let password = ctx.params.password;
            let repeatPass = ctx.params.repeatPass;

            if (!/^[A-Za-z]{3,}$/.test(username)) {
                notify.showError('Username should be at least 3 characters long and contains only english alphabet letters!');
            } else if (!/^[A-Za-z\d]{6,}$/.test(password)) {
                notify.showError('Password should be at least 6 characters long and contains english alphabet letters and digits!');
            } else if (password !== repeatPass) {
                notify.showError('Both passwords should match!');
            } else {
                auth.register(username, password, repeatPass).then((userData) => {
                    auth.saveSession(userData);
                    notify.showInfo('Your registration was successful!');
                    ctx.redirect('#/catalog')
                }).catch(notify.handleError)
            }
        });

        //GET login page
        this.get('#/login', (ctx) => {
            ctx.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs'
            }).then(function () {
                this.partial('./templates/forms/loginForm.hbs');
            })
        });

        //POST login page
        this.post('#/login', (ctx) => {
            let username = ctx.params.username;
            let password = ctx.params.password;

            if (username === '' || password === '') {
                notify.showError('All fields must be non-empty!');
            } else {
                auth.login(username, password).then((userData) => {
                    auth.saveSession(userData);
                    notify.showInfo('Login successful!');
                    ctx.redirect('#/catalog');
                }).catch(notify.handleError)
            }
        });

        //GET logout
        this.get('#/logout', (ctx) => {
            let authtoken = sessionStorage.getItem('authtoken');

            auth.logout(authtoken).then((userData) => {
                sessionStorage.clear(userData);
                notify.showInfo('You have successfully logged out!');
                ctx.redirect('#/home')
            }).catch(notify.handleError)
        });

        this.get('#/catalog', (ctx) => {
            if (!auth.isAuth()) {
                ctx.redirect('#/home');
                return;
            }

            posts.getPosts().then((posts) => {
                posts.forEach((post, index) => {
                    post.rank = index + 1;
                    post.date = entityCreationTime(post._kmd.ect);
                    post.isAuthor = post._acl.creator === sessionStorage.getItem('userId')
                });

                ctx.isAuth = auth.isAuth();
                ctx.username = sessionStorage.getItem('username');
                ctx.posts = posts;

                ctx.loadPartials({
                    header: './templates/common/header.hbs',
                    footer: './templates/common/footer.hbs',
                    navigation: './templates/common/navigation.hbs',
                    postsList: './templates/posts/postsList.hbs',
                    post: './templates/posts/post.hbs'
                }).then(function () {
                    this.partial('./templates/posts/catalog.hbs');
                })
            }).catch(notify.handleError)
        });

        this.get('#/create/post', (ctx) => {
            if (!auth.isAuth()) {
                ctx.redirect('#/home');
                return;
            }

            ctx.isAuth = auth.isAuth();
            ctx.username = sessionStorage.getItem('username');

            ctx.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
                navigation: './templates/common/navigation.hbs'
            }).then(function () {
                this.partial('./templates/posts/createPost.hbs')
            })
        });

        this.post('#/create/post', (ctx) => {
            if (!auth.isAuth()) {
                ctx.redirect('#/home');
                return;
            }

            let author = ctx.params.username;
            let url = ctx.params.url;
            let title = ctx.params.title;
            let imageUrl = ctx.params.imageUrl;
            let description = ctx.params.description;

            if (validPost(title, url)) {
                posts.createPost(author, title, description, url, imageUrl).then(() => {
                    notify.showInfo('Post was successfully created.');
                    ctx.redirect('#/catalog');
                }).catch(notify.handleError)
            }
        });

        this.get('#/edit/post/:postId', (ctx) => {
            if (!auth.isAuth()) {
                ctx.redirect('#/home');
                return;
            }

            let postId = ctx.params.postId;

            posts.getPostDetails(postId).then((post) => {
                ctx.isAuth = auth.isAuth();
                ctx.username = sessionStorage.getItem('username');
                ctx.post = post;

                ctx.loadPartials({
                    header: './templates/common/header.hbs',
                    footer: './templates/common/footer.hbs',
                    navigation: './templates/common/navigation.hbs'
                }).then(function () {
                    this.partial('./templates/posts/editPost.hbs')
                })
            })
        });

        this.post('#/edit/post', (ctx) => {
            let postId = ctx.params.postId;
            let author = sessionStorage.getItem('username');
            let url = ctx.params.url;
            let title = ctx.params.title;
            let imageUrl = ctx.params.imageUrl;
            let description = ctx.params.description;

            if (validPost(title, url)) {
                posts.editPost(postId, author, title, description, url, imageUrl).then(() => {
                    notify.showInfo(`Post ${title} was successfully updated.`);
                    ctx.redirect('#/catalog');
                }).catch(notify.handleError)
            }
        });

        this.get('#/delete/post/:postId', (ctx) => {
            if (!auth.isAuth()) {
                ctx.redirect('#/home');
                return;
            }

            let postId = ctx.params.postId;

            posts.deletePost(postId).then(() => {
                notify.showInfo('Post deleted.');
                ctx.redirect('#/catalog');
            }).catch(notify.handleError)
        });

        this.get('#/posts', (ctx) => {
            if (!auth.isAuth()) {
                ctx.redirect('#/home');
                return;
            }

            let username = sessionStorage.getItem('username');

            posts.getUserPosts(username).then((posts) => {
                posts.forEach((post, index) => {
                    post.rank = index + 1;
                    post.date = entityCreationTime(post._kmd.ect);
                    post.isAuthor = post._acl.creator === sessionStorage.getItem('userId')
                });

                ctx.isAuth = auth.isAuth();
                ctx.username = sessionStorage.getItem('username');
                ctx.posts = posts;

                ctx.loadPartials({
                    header: './templates/common/header.hbs',
                    footer: './templates/common/footer.hbs',
                    navigation: './templates/common/navigation.hbs',
                    postsList: './templates/posts/postsList.hbs',
                    post: './templates/posts/post.hbs'
                }).then(function () {
                    this.partial('./templates/posts/userPosts.hbs');
                })
            })
        });

        this.get('#/details/:postId', (ctx) => {
            let postId = ctx.params.postId;

            const postPromise = posts.getPostDetails(postId);
            const allCommentsPromise = comments.getPostComments(postId);

            Promise.all([postPromise, allCommentsPromise]).then(([post, comments]) => {
                post.date = entityCreationTime(post._kmd.ect);
                post.isAuthor = post._acl.creator === sessionStorage.getItem('userId');
                comments.forEach((comment) => {
                    comment.date = entityCreationTime(comment._kmd.ect);
                    comment.commentAuthor = comment._acl.creator === sessionStorage.getItem('userId');
                });

                ctx.isAuth = auth.isAuth();
                ctx.username = sessionStorage.getItem('username');
                ctx.post = post;
                ctx.comments = comments;

                ctx.loadPartials({
                    header: './templates/common/header.hbs',
                    footer: './templates/common/footer.hbs',
                    navigation: './templates/common/navigation.hbs',
                    postDetails: './templates/details/postDetails.hbs',
                    comments: './templates/details/comments.hbs'
                }).then(function () {
                    this.partial('./templates/details/postDetailsPage.hbs')
                })
            })
        });

        this.post('#/create/comment', (ctx) => {
            let author = sessionStorage.getItem('username');
            let content = ctx.params.content;
            let postId = ctx.params.postId;

            if (content === '') {
                notify.showError('Cannot add empty comment.');
                return;
            }

            comments.createComment(postId, content, author).then(() => {
                notify.showInfo('Comment created.');
                ctx.redirect(`#/details/${postId}`);
            }).catch(notify.showError)
        });

        function entityCreationTime(dateIsoFormat) {
            let diff = new Date - (new Date(dateIsoFormat));
            diff = Math.floor(diff / 60000);
            if (diff < 1) return 'less than a minute';
            if (diff < 60) return diff + ' minute' + pluralize(diff);
            diff = Math.floor(diff / 60);
            if (diff < 24) return diff + ' hour' + pluralize(diff);
            diff = Math.floor(diff / 24);
            if (diff < 30) return diff + ' day' + pluralize(diff);
            diff = Math.floor(diff / 30);
            if (diff < 12) return diff + ' month' + pluralize(diff);
            diff = Math.floor(diff / 12);
            return diff + ' year' + pluralize(diff);

            function pluralize(value) {
                if (value !== 1) return 's';
                else return '';
            }
        }

        function validPost(title, url) {
            if (title === '') {
                notify.showError('Title is required!')
            } else if (url === '') {
                notify.showError('URL is required!');
            } else if (!url.startsWith('http')) {
                notify.showError('URL must be a valid link!');
            } else {
                return true;
            }

            return false;
        }

        function displayHomePage(ctx) {
            if (!auth.isAuth()) {
                ctx.loadPartials({
                    header: './templates/common/header.hbs',
                    footer: './templates/common/footer.hbs',
                    loginForm: './templates/forms/loginForm.hbs',
                    registerForm: './templates/forms/registerForm.hbs',
                }).then(function () {
                    this.partial('./templates/anonymous.hbs');
                })
            } else {
                ctx.redirect('#/catalog');
            }
        }
    });

    app.run()
})