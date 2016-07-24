// 事件的
(function ($){

var event = {
 ready : function (callback){
  //  if (this.dom[0] == document]) {
     document.addEventListener('DOMContentLoaded', callback, false)
  //
   return $.init(this.dom)
 },

 on : function (events, fn){
   this.map(function (dom){
    return dom.addEventListener(events, fn, false)
   })
   return $.init(this.dom)
 },

 one : function (events, fn){
   this.map(function (dom){
     var handle = function (e){
       fn(e)
       return dom.removeEventListener(events, handle, false)
     }
    return dom.addEventListener(events, handle, false)
   })
   return $.init(this.dom)
 },

 off : function (events, fn){
   this.map(function (dom){
    return dom.removeEventListener(events, fn, false)
   })
   return $.init(this.dom)
 },

 bub : function (events, select, fn){
  this.map(function (dom){
     var handle = function (e){
       if($(e.currentTarget).find(select).index(e.target) > -1) return fn(e)
       return
     }
       return dom.addEventListener(events, handle, false)
   })
   return $.init(this.dom)
 },

 trigger : function (event){
   this.map(function (dom){
     var e = new Event(event);
     dom.dispatchEvent(e)
   })
   return $.init(this.dom)
 }

}

$.fn.extend(event)

;('focusin focusout focus blur load resize scroll unload click dblclick '+
  'mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave '+
  'change select keydown keypress keyup error').split(' ').forEach(function(event) {
    $.fn[event] = function(callback) {
      return (0 in arguments) ?
        this.on(event, callback) :
        this.trigger(event)
    }
  })


})($)
