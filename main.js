console.log(document)
let znaki = document.getElementsByClassName('znaki')[0]
let str = document.getElementsByClassName('stroka')[0]

let numb = null;
let znak = null;
const znach = (event) => {
    if (event.target.classList.contains('men')) {
        if (str.innerText === '0') {
            str.innerText = event.target.innerText
        }
        else {
            str.innerText = str.innerText + event.target.innerText
        }
    }
    if(event.target.id==='ravno'){
        switch(znak){
            case '+':
                str.innerText=Number(numb)+Number(str.innerText)
            break;
            case '-':
                str.innerText=Number(numb)-Number(str.innerText)
            break;
            case 'x':
                str.innerText=Number(numb)*Number(str.innerText)
            break;
            case ':':
                str.innerText=Number(numb)/Number(str.innerText)
            break;
        }
        return
    }
    if (event.target.classList.contains('zh')) {
        numb = str.innerText
        str.innerText = null;
        znak = event.target.innerText;
    }
}
for (child of znaki.children) {
    child.addEventListener('click', znach);
}