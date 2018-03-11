function tickets(tickets, sortCriteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }

        customSort(sortCriteria, parameter) {
            if (sortCriteria === 'price') {
                return this.price - parameter;
            } else if (sortCriteria === 'destination') {
                return this.destination.localeCompare(parameter);
            } else if (sortCriteria === 'status') {
                return this.status.localeCompare(parameter);
            }
        }
    }

    let result = [];
    for (let ticket of tickets) {
        let tokens = ticket.split('|');
        let destinationName = tokens[0];
        let price = tokens[1];
        let status = tokens[2];
        let newTicket = new Ticket(destinationName, Number(price), status);
        result.push(newTicket);
    }
    result.sort((a, b) => {
        return a.customSort(sortCriteria, b[sortCriteria]);
    });

    return result;
}


console.log(tickets(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'));