//  请求css
getCSS.onclick = () => {
    const request = new XMLHttpRequest();
    console.log(request)
    request.open("GET", "/style.css");
    request.onload = () => {
        const style = document.createElement('style')
        style.innerHTML = request.response;
        document.head.appendChild(style)
    }
    request.onerror = () => {
        console.log('请求css文件失败！')
    };
    request.send()
}

// 请求js
getJS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "/1.js")
        // 成功
    request.onload = () => {
        // 创建 script 标签
        const script = document.createElement("script");
        // 填写 script 内容
        script.innerHTML = request.response;
        // 插到身体里
        document.body.appendChild(script);
    };
    // 失败
    request.onerror = () => {};
    // 发送出去
    request.send();
};

// 请求HTML
getHTML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', "./2.html");
    request.onload = () => {
        const div = document.createElement('div');
        div.innerHTML = request.response;
        document.body.appendChild(div)
    }
    request.error = () => {};
    request.send();
}

// 请求XML
getXML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', "./3.xml")
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const dom = request.responseXML;
            const text = dom.getElementsByTagName("warning")[0].textContent;
            console.log(text.trim())
        }
    }
    request.send()
}