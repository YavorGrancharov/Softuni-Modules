function jsonToHTML(arrIn) {
    let arr = JSON.parse(arrIn);
    let str = '<table>\n';
    str += '    <tr>';
    let keys = Object.keys(arr[0]);
    for (let key of keys) {
        str += `<th>${key}</th>`;
    }
    str += '</tr>\n';
    for (let obj of arr) {
        str += '    <tr>';
        for (let i = 0; i < keys.length; i++) {
            str += `<td>${escapeChars(obj[keys[i]] + '')}</td>`;
        }
        str += '</tr>\n';
    }
    str += '</table>';
    console.log(str);
    function escapeChars(input) {
        return input.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
}
jsonToHTML('[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]');

//<table>
//  <tr><th>Name</th><th>Price</th></tr>
//  <tr><td>Tomatoes &amp; Chips</td><td>2.35</td></tr>
//  <tr><td>J&amp;B Chocolate</td><td>0.96</td></tr>
//</table>
