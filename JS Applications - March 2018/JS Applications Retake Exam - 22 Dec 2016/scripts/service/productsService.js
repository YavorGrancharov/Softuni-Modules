let productsService = (() => {
    function products() {
        const endpoint = 'products';

        return remoteService.get('appdata', endpoint, 'kinvey');
    }

    function cart(userId) {
        const endpoint = `${userId}`;

        return remoteService.get('user', endpoint, 'kinvey');
    }

    function getProductById(id) {
        const endpoint = `products/${id}`;

        return remoteService.get('appdata', endpoint, 'kinvey')
    }

    function updateUser(body) {
        let userId = sessionStorage.getItem('userId');
        const endpoint = `${userId}`;

        return remoteService.update('user', endpoint, 'kinvey', body);
    }

    function discard(id) {
        const endpoint = `products/${id}`;

        return remoteService.remove('user', endpoint, 'kinvey');
    }

    return {
        products,
        cart,
        getProductById,
        updateUser,
        discard
    }
})();