$ => {


}($)






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
