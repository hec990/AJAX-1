//  请求css
// getCSS.onclick = () => {
// 	const request = new XMLHttpRequest();
// 	request.open("GET", "/style.css");
// 	request.onload = () => {
// 		const style = document.createElement('style')
// 		style.innerHTML = request.response;
// 		document.head.appendChild(style)
// 	}
// 	request.onerror = () => {
// 		console.log('请求css文件失败！')
// 	};
// 	request.send()
// }

//  请求css
getCSS.onclick = () => {
	// 1. 使用 XMLHttpRequest 构造函数
	const request = new XMLHttpRequest();
	// 2. 请求类型 , 文件路径
	request.open("GET", "./style.css");
	// 3. 监听，判断
	request.onreadystatechange = () => {
		//  如果状态值等于4 或者 状态码等于 200 就说明请求成功了
		if (request.readyState === 4 && request.status === 200) {
			console.log(request.response); // css文件里的内容
			const style = document.createElement('style')
			style.innerHTML = request.response;
			document.head.appendChild(style)
		}
	}
	// 4. 发送请求
	request.send()
}

// 请求js
// getJS.onclick = () => {
// 	const request = new XMLHttpRequest()
// 	request.open("GET", "/1.js")
// 	// 成功
// 	request.onload = () => {
// 		// 创建 script 标签
// 		const script = document.createElement("script");
// 		// 填写 script 内容
// 		script.innerHTML = request.response;
// 		// 插到身体里
// 		document.body.appendChild(script);
// 	};
// 	// 失败
// 	request.onerror = () => {};
// 	// 发送出去
// 	request.send();
// };


// 请求js onreadystatechenge
getJS.onclick = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./1.js");
	request.onreadystatechange = () => {
		if (request.readyState === 4 && request.status === 200) {
			// 创建 script 标签
			const script = document.createElement("script");
			// 填写 script 内容
			script.innerHTML = request.response;
			// 插到身体里
			document.body.appendChild(script);
		}
	}
	request.send();
}

// 请求HTML
// getHTML.onclick = () => {
// 	const request = new XMLHttpRequest();
// 	request.open('GET', "./2.html");
// 	request.onload = () => {
// 		const div = document.createElement('div');
// 		div.innerHTML = request.response;
// 		document.body.appendChild(div)
// 	}
// 	request.error = () => {};
// 	request.send();
// }

// 请求HTML onreadystatechenge
getHTML.onclick = () =>{
	const request = new XMLHttpRequest();
	request.open("GET","./2.html")
	request.onreadystatechange = () => {
		if (request.readyState === 4 && request.status === 200) {
			const div = document.createElement('div');
			div.innerHTML = request.response;
			document.body.appendChild(div)
		}
	}
	request.send();
}

// 请求XML onreadystatechange
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


// 请求JSON onreadystatechange
getJSON.onclick=()=>{
	const request = new XMLHttpRequest();
	request.open("GET","./4.json");
	request.onreadystatechange = () => {
		if (request.readyState === 4 && request.status === 200) {
			console.log(request.response) // 4.json里的内容
			const json = JSON.parse(request.response);
			console.log(json)
		}
	}
	request.send()
}







