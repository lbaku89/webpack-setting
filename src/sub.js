
//es6 문법
export const f1 = () => {
    let hello = "내가 미칠 듯이 사사랑했던 그 사람 hello hello";
    let tag1 = document.createElement('p')
    tag1.innerText+=hello.replaceAll("hello","안녕하세요");
    document.body.appendChild(tag1);

    let myname ='권현우'
    let tag2 = document.createElement('p')
    //es6 문법
    tag2.innerText+=`내 이름은 ${myname} 입니다`
    document.body.appendChild(tag2);
}

