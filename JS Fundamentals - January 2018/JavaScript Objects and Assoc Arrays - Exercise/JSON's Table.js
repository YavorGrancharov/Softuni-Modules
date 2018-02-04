function jsonTable(arr) {
    let html = '<table>\n';
    for (let i = 0; i < arr.length; i++) {
        html += '\t<tr>\n';
        let splitted = arr[i].split(/[^a-zA-Z0-9-_ ]/).filter(a => a !== '');
        for (let j = 1; j < splitted.length; j+=2) {
            html += `\t\t<td>${splitted[j]}</td>\n`
        }
        html += '\t<tr>\n';
    }
    html += '</table>';

    console.log(html);
}

function jsonsTable (inputData) {
    let html = '<table>\n';
    for(let row of inputData){
        let parsed = JSON.parse(row);
        html += '  <tr>\n';
        html += '     <td>' + parsed.name + '</td>\n';
        html += '     <td>' + parsed.position + '</td>\n';
        html += '     <td>' + parsed.salary + '</td>\n';
        html += '  <tr>\n'
    }
    html += '</table>';
    return html
}

jsonTable(['{"name:"Pesho","position":"Promenliva","salary":"100000"}',
    '{"name":"Teo","position":"Lecturer","salary":"1000"}',
    '{"name":"Georgi","position":"Lecturer","salary":"1000"}']);

jsonsTable(['{"name:"Pesho","position":"Promenliva","salary":"100000"}',
    '{"name":"Teo","position":"Lecturer","salary":"1000"}',
    '{"name":"Georgi","position":"Lecturer","salary":"1000"}']);