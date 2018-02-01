function escapeHTML(arr) {
    let result = '<ul>\n';
    for (let str of arr) {
        result += ' <li>' + escape(str) + '</li>\n';
    }
    result += '</ul>';
    console.log(result);
    function escape(str) {
        return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    }
}
escapeHTML(['<b>unescaped text</b>b>', 'normal text']);