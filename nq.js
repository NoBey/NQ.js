(function (window) {

  // 增加基础的工具类

  function isDom (object){
    return object && typeof object === 'object' && object.nodeType === 1 && typeof object.nodeName === 'string' || isDocument(object);
  }

  function isArray (object){
    return Object.prototype.toString.call(object) === '[object Array]';
  }

  function isFunction (object){
    return Object.prototype.toString.call(object) === '[object Function]';
  }

  function isString (object){
    return Object.prototype.toString.call(object) === '[object String]';
  }

  function isNumber (object){
    return Object.prototype.toString.call(object) === '[object Number]';
  }

  function isUndefined (object){
    return Object.prototype.toString.call(object) === '[object Undefined]';
  }

  function isBoolean (object){
    return Object.prototype.toString.call(object) === '[object Boolean]';
  }

  function isNull (object){
    return Object.prototype.toString.call(object) === '[object Null]';
  }

  function isNodeList (object){
    return Object.prototype.toString.call(object) === '[object NodeList]';
  }

  function isDocument (object){
    return Object.prototype.toString.call(object) === '[object HTMLDocument]';
  }

  function each (array, callback){
    return Array.prototype.forEach.call(array, callback)
  }

  function map (array, callback){
    return Array.prototype.map.call(array, callback)
  }

  function noteToArray (nodeList){
    var arg = []
    for (var i = 0; i < nodeList.length; i++) {
      arg.push(nodeList[i])
    }
    return arg
  }

  function isnq (NQ){
    return NQ instanceof nq
  }

  function qS (Dom, select){
   return Document.prototype.querySelector.call(Dom, select)
  }

  function qSall (Dom, select){
    return Document.prototype.querySelectorAll.call(Dom, select)
  }

  function q (Dom, select) {
    var arg = []
    if (isDom(Dom)) arg = qSall(Dom, select)

    if (isArray(Dom)) {
      map(Dom, function(nodeList) {
        console.log(nodeList.querySelectorAll(select));
        map(nodeList.querySelectorAll(select), function(dom) {
          arg.push(dom)
        })
      })
    }

    return arg
  }

  function length (object){
    var cout = 0
    for (var key in object) {
      cout++
    }
    return cout
  }

  // nq对象原型
  function nq (dom){
    this.dom = dom
    this.length = length(dom)
  }

  // 初始化nq对象
  function init (dom, select){
    var NQ,
        dom = dom
    if (isNodeList(dom)){
      dom = noteToArray(dom)
    }
    if (isDocument(dom)){
      dom = [dom]
    }
    NQ = new nq(dom)
    if (select){
      NQ.select = select
    }
    return NQ
  }

  // 获取dom节点  selectors是选择组 这里是对外部的信息进行处理分类
  function select (selectors, dom){
    var dom = dom
    if (isUndefined(dom)) dom = document

    // if(isArray(dom) && isDom(dom[0])) return init(doms, selectors)
    if (!selectors) return null
    if (isDom(selectors)) return init(selectors)
    if (isString(selectors)) return init(q(dom, selectors), selectors)

    return
  }

  // 拓展nq对象
  nq.fn = {
    map : function (callback){
      for (var index = 0; index < this.dom.length; index++) {
        callback(this.dom[index],index)
      }
    },

    clone : function (){
      var tmp = []
      this.map(function(dom){
        return tmp.push(dom.cloneNode().innerHTML = dom.innerHTML)
      })
      return init(tmp)
    },

    size : function (){
      return this.dom.length
    },

    get : function (index){
      return this.dom[index]
    },

    index : function (select){
      var index
      this.map(function(dom, index){
        if(dom == select) return Index = index
      })
      return index
    },

    eq : function (index){
      return init(this.dom[index])
    },

    find : function (selectors){
      return select(selectors, this.dom)
    },

    extend : function (object){
      for (var key in object) {
        nq.fn[key] = object[key]
      }
    }

  }


  window.$  = select

  var $ = select
  $.a = 11
  $.fn = nq.fn
  $.extend = function (object){
    for (var key in object) {
      select.prototype[key] = object[key]
    }
  }
  nq.prototype = nq.fn

})(window)
