let receiptController = (() => {
    function getActiveReceipt(ctx) {
        if (!authService.isAuth()) {
            ctx.redirect('#/home');
            return;
        }

        ctx.username = sessionStorage.getItem('username');
        let userId = sessionStorage.getItem('userId');
        receiptService.getActiveReceipt(userId).then((receipt) => {
            let temp;
            let total = 0;
            if (receipt) {
                for (let index in receipt) {
                    if (receipt.hasOwnProperty(index)) {
                        receiptService.getEntriesByReceiptID(receipt[index]._id).then((entries) => {
                            for (let index in entries) {
                                if (entries.hasOwnProperty(index)) {
                                    ctx.hasEntries = true;
                                    ctx.entries = entries;
                                    temp = Number(entries[index].qty) * Number(entries[index].price);
                                    total = total + temp;
                                    ctx.total = total.toFixed(2);

                                    ctx.loadPartials({
                                        header: './templates/common/header.hbs',
                                        footer: './templates/common/footer.hbs',
                                    }).then(function () {
                                        this.partial('./templates/receipt/create.hbs');
                                    })
                                }
                            }
                        })
                    }
                }
            }
            ctx.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
            }).then(function () {
                this.partial('./templates/receipt/create.hbs');
            })
        })
    }

    function addNewEntry(ctx) {
        if (!authService.isAuth()) {
            ctx.redirect('#/home');
            return;
        }

        let userId = sessionStorage.getItem('userId');
        receiptService.getActiveReceipt(userId).then((receipt) => {
            let price = document.getElementsByName('price')[0].value;
            let qty = document.getElementsByName('qty')[0].value;
            let type = document.getElementsByName('type')[0].value;

            if (Number.isSafeInteger(price)) {
                notifyService.showError('Invalid input. Price must be a number.');
                return;
            } else if (Number.isSafeInteger(qty)) {
                notifyService.showError('Invalid input. Quantity must be a number.');
                return;
            } else if (typeof type !== 'string' || type === '') {
                notifyService.showError('Invalid input. Type must be a non empty string.');
                return;
            } else {
                for (let index in receipt) {
                    if (receipt.hasOwnProperty(index)) {
                        let receiptId = receipt[index]._id;
                        receiptService.addEntry(type, qty, price, receiptId).then(() => {
                            notifyService.showInfo('Entry added successfuly!');
                            ctx.redirect('#/edit');
                        })
                    }
                }
            }
        })
    }

    function deleteEntry(ctx) {
        if (!authService.isAuth()) {
            ctx.redirect('#/home');
            return;
        }

        let userId = sessionStorage.getItem('userId');
        let entryId = ctx.params.entryId;
        receiptService.deleteEntry(entryId).then(() => {
            notifyService.showInfo('Entry deleted successfuly!');
            ctx.redirect('#/edit');
        });
    }

    function getUserReceipts(ctx) {
        if (!authService.isAuth()) {
            ctx.redirect('#/home');
            return;
        }

        ctx.username = sessionStorage.getItem('username');
        let userId = sessionStorage.getItem('userId');
        receiptService.getAllReceipts(userId).then((receipts) => {
            let grandTotal = 0;
            for (let index in receipts) {
                if (receipts.hasOwnProperty(index)) {
                    ctx.receipts = receipts;
                    grandTotal += Number(receipts[index].total);
                    ctx.grandTotal = grandTotal.toFixed(2);
                    ctx.loadPartials({
                        header: './templates/common/header.hbs',
                        footer: './templates/common/footer.hbs',
                    }).then(function () {
                        this.partial('./templates/receipt/all.hbs');
                    })
                }
            }
        })
    }

    function commitReceipt(ctx) {
        if (!authService.isAuth()) {
            ctx.redirect('#/home');
            return;
        }

        ctx.username = sessionStorage.getItem('username');
        let userId = sessionStorage.getItem('userId');
        receiptService.getActiveReceipt(userId).then((receipt) => {
            if (isEmpty(receipt)) {
                receiptService.createReceipt().then(() => {
                    notifyService.showInfo('Receipt created successfuly!');
                    ctx.redirect('#/edit');
                })
            } else {
                for (let index in receipt) {
                    if (receipt.hasOwnProperty(index)) {
                        receiptService.getEntriesByReceiptID(receipt[0]._id).then((entries) => {
                            let temp = 0;
                            let total = 0;
                            for (let index in entries) {
                                if (entries.hasOwnProperty(index)) {
                                    temp = Number(entries[index].price) * Number(entries[index].qty);
                                }
                                total += temp.toFixed(2);
                            }
                            receiptService.commitReceipt(receipt[0]._id, total, entries.length, "false").then(() => {
                                notifyService.showInfo('Receipt checked out');
                                ctx.redirect('#/edit');
                            })
                        })
                    }
                }
            }
        })
    }

    function getReceiptDetails(ctx) {
        if (!authService.isAuth()) {
            ctx.redirect('#/home');
            return;
        }

        ctx.username = sessionStorage.getItem('username');
        let receiptId = ctx.params.receiptId;
        receiptService.getEntriesByReceiptID(receiptId).then((entries) => {
            for (let index in entries) {
                if (entries.hasOwnProperty(index)) {
                    ctx.entries = entries;

                    ctx.loadPartials({
                        header: './templates/common/header.hbs',
                        footer: './templates/common/footer.hbs',
                    }).then(function () {
                        this.partial('./templates/receipt/details.hbs');
                    })
                }
            }
        })
    }

    function isEmpty(obj) {
        for (let key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }

    return {
        getActiveReceipt,
        addNewEntry,
        deleteEntry,
        getUserReceipts,
        commitReceipt,
        getReceiptDetails
    }
})();