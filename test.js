function dd(){
  this.ok = 1

}

function(a, b) {
  return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
    return $.clone(this, a, b)
  })
}



function oo(){
  var ss = false
  var t=setTimeout("timer(ss)",1000)

  function timer(ss){
    console.log(ss)
    ss = true
  }
  // while (!ss) {
  //   var i = 0
  //   console.log(i++)
  //   console.log(ss)
  // }
  return ss
}
