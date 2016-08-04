// open方式用于指定HTTP动词、请求的网址、是否异步
// xhr.open('GET', '～/then.js', true);

// 发送HTTP请求
// xhr.send(null);//  http://www.w3school.com.cn/jquery/test1.txt
// http://apis.baidu.com/apistore/mobilenumber/mobilenumber
fetch('http://www.w3school.com.cn/jquery/test1.txt',
{
  method: 'POST',
  mode: 'no-cors'
})
.then(function(res) {
 console.log(res);
 return res.text()
})
.then(json => console.log(json)).catch(e => console.error('error'));

// function get(url, ){
//
// }
//
// get()
