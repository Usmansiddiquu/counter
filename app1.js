var date = new Date();
var ramazan = new Date("23-march-2023");

var diff = ramazan - date
var days =Math.floor(diff/(1000*60*60*24)) 
var hours = Math.floor(diff/(1000*60*60))
var minute = Math.floor(diff/(1000*60))
var seconds = Math.floor(diff/(1000))


var hours1 = hours    - (days   *  24 )
var minute1 = minute  - (hours  *  60 )
var second1 = seconds - (minute *  60 )

console.log(days)
console.log(hours1)
console.log(minute1)
console.log(second1)




document.getElementById("ramazan").innerHTML ="Time left = " + days +" days " + hours1+" hours " + minute1 +" minutes " + second1 + " second"