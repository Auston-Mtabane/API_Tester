export function strJsonToPrittyHtml(str: string): string {
    let finalstr: string = "";
    for (let index = 0; index < str.length; index++) {

        switch (str[index]) {
            case '}':
            case '{':
            case '(':
            case ')':
                finalstr+='<p id="gray">';
                break;
            default :
                finalstr+='</p>';


        }

        finalstr += str[index];

    }

    return "";
}

export function insert(insertStr: string,index:number, base: string): string {


    return base.slice(0,index) + insertStr + base.slice(index);
}

// console.log();