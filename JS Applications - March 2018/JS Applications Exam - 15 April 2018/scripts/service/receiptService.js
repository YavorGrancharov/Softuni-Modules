let receiptService = (() => {
    function getActiveReceipt(userId) {
        const endpoint = `receipts?query={"_acl.creator":"${userId}","active": "true"}`;

        return remote.get('appdata', endpoint, 'kinvey');
    };

    function getEntriesByReceiptID(receiptId) {
        const endpoint = `entries?query={"receiptId":"${receiptId}"}`;

        return remote.get('appdata', endpoint, 'kinvey');
    };

    function createReceipt() {
        const endpoint = 'receipts';
        const data = {
            active: "true",
            productCount: 0,
            total: 0
        };

        return remote.post('appdata', endpoint, 'kinvey', data);
    };

    function addEntry(type, qty, price, receiptId) {
        const endpoint = 'entries';
        const data = {
            type: type,
            qty: Number(qty),
            price: Number(price),
            receiptId: receiptId
        };

        return remote.post('appdata', endpoint, 'kinvey', data);
    };
    
    function deleteEntry(entryId) {
        const endpoint = `entries/${entryId}`;

        return remote.remove('appdata', endpoint, 'kinvey');
    };

    function getAllReceipts(userId) {
        const endpoint = `receipts?query={"_acl.creator":"${userId}","active": "false"}`;

        return remote.get('appdata', endpoint, 'kinvey');
    };

    function commitReceipt(receiptId, total, productCount, active) {
        const endpoint = `receipts/${receiptId}`;
        let data = {
            active: active,
            productCount: Number(productCount),
            total: Number(total)
        };

        return remote.update('appdata', endpoint, 'kinvey', data);
    };
    
    function getReceiptDetails(receiptId) {
        const endpoint = `receipts/${receiptId}`;

        return remote.get('appdata', endpoint, 'kinvey');
    }

    return {
        getActiveReceipt,
        getEntriesByReceiptID,
        addEntry,
        createReceipt,
        deleteEntry,
        getAllReceipts,
        commitReceipt,
        getReceiptDetails
    };
})();