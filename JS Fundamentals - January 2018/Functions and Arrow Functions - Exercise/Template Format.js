function templateFormat(input) {
    function printQuestion(question) {
        let xml = '\t<question>\n';
        xml += `\t\t${question}\n`;
        xml += '\t</question>\n';

        return xml;
    }

    function printAnswer(answer) {
        let xml = '\t<answer>\n';
        xml += `\t\t${answer}\n`;
        xml += '\t</answer>\n';

        return xml;
    }

    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<quiz>\n';

    for (let i = 0; i < input.length; i++) {
        if (i % 2 == 0) {
            xml += printQuestion(input[i]);
        }
        else {
            xml += printAnswer(input[i]);
        }
    }

    xml += '</quiz>\n';

    console.log(xml);
}
templateFormat("Who was the forty-second president of the U.S.A.?", "William Jefferson Clinton");