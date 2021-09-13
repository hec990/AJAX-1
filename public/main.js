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







getCSS.onclick = () => {
   const request = new XMLHttpRequest();
   console.log(request)
   request.open("GET","/style.css");
   request.onload=()=>{
	   const style = document.createElement('style')
	   style.innerHTML = request.response;
	   document.head.appendChild(style)
   }
   request.onerror=()=>{
	   console.log('请求css文件失败！')
   };
   request.send()
}

