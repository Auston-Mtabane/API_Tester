export function strJsonToPrittyHtml(str: string): string {
    let finalstr: string = "<pre><code>";
    for (let index = 0; index < str.length; index++) {

        switch (str[index]) {
            case '}':
            case '{':
            case '(':
            case ')':
                finalstr += '<span id="gray">';
                finalstr += str[index];
                finalstr += '</span><p></p>';
                break;
            // case ',':
            //     finalstr += str[index];
            //     finalstr += '<p></p>';
            //     break;
            default:
                finalstr += str[index];

        }

    }

    return finalstr +"</code></pre>";
}

export function insert(insertStr: string, index: number, base: string): string {


    return base.slice(0, index) + insertStr + base.slice(index);
}

// console.log();