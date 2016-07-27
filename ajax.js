($ => {

function ajax(options){
  this.req = new Request(options.url)
  req.method = options.method.toLocaleUpperCase()
  this.method = method => {
    this.req.method = method.toLocaleUpperCase()
    return this
  }

  this.headers = options => {
    Object.keys(options.headers).map(key => this.req.headers.set(key, options.headers[key]))
    return this
  }

  this.success = callback => {
    var err = this.err || null
    return fetch(req).then(callback, err)
  }

  this.catch = err => {
    this.err = err
    return this
  }

  if (Object.keys(options.headers).length > 0) Object.keys(options.headers).map(key => this.req.headers.set(key, options.headers[key]))
  if (options.success) return fetch(req).then(options.success, options.error || null)
  if (options.error) return this.err = options.error

}
ajaxlist = {
  ajax : options => new ajax(options),
  get  : (url, success, err) => {
    var options = {}
    options.url = url
    options.success = success || null
    options.error = err || null
    return new ajax(options)
  },
  post : (url, data, success, err) => {

  }
}

})($)

// function map (array, callback){
//   return Object.keys(array).map(callback)
//
// }
// function isObject (object){
//   return Object.prototype.toString.call(object) === '[object Object]';
// }
//
//
// function JsonToForm(json) {
//   var tmp = {}
//   map(json, val => {
//     if(isObject(val))
//   })
// }
req = new Request('http://127.0.0.1:3000', {
  method: 'POST',
  mode: "cors"
})
req.headers.set("Content-Type","application/x-www-form-urlencoded")
fetch(req)

// fetch('http://127.0.0.1:3000',
// {
//   method: 'POST',
//   mode: 'no-cors'
// })
// .then(function(res) {
//  console.log(res);
//  return res.text()
// })
// .then(json => console.log(json)).catch(e => console.error('error'));
//

// xhr.send(null);//  http://www.w3school.com.cn/jquery/test1.txt
// http://apis.baidu.com/apistore/mobilenumber/mobilenumber
