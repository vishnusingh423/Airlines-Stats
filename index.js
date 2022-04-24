var data = [
  { data: ["song", "dance"], title: "vishnu" },
  { data: ["song", "sport"], title: "ramneek" },
  { data: ["cricket", "food"], title: "vikas" },
  { data: ["food", "dance"], title: "priya" },
  { data: ["dance", "music"], title: "gaurav" },
  { data: ["dance", "song"], title: "sant" },
  { data: ["song", "carrom"], title: "bob" },
  { data: ["music", "dance"], title: "david" },
  { data: ["video game", "sport"], title: "happy" },
  { data: ["song", "dance"], title: "akhand" },
  { data: ["dance", "music"], title: "farik" },
];
var x =[];
var set = new Set([]);
var result  = data.map((e) => e.data[0] )
var result1  = data.map((e) =>  e.data[1])

var finReslt = result.concat(result1)
// set.add(finReslt)
var re = [...new Set(finReslt)]
 var user = [{"id": 3, "name": "dance"}, {"id": 4, "name": "music"}];
function funCall(a){
  var r = data.filter(e=>  e.data[0] ===a || e.data[1]===a )
  return r;
}
// var t = [{name:'vishnu', title:'singh'}]
// console.log(t.concat([{name1:'garima',data:['song','sport']}]))
//  console.log(data.slice(0,2))
// var r = data.findIndex(e=>e.title ==='sant')
var global=[]
var global1=[]

for (var t1 of user){
  var fd = funCall(t1.name)
  var cvv= fd.map((xl) => global.push(xl.title))
  // global.concat(cvv)

}
var htr = [...new Set(global)]
htr.map((e,i)=> global1.push({data:[] , title:e}))
console.log('ter', global1)
// user.forEach((r)=> console.log(funCall(r))

// console.log(r);














// var t = [];

// let data1 = [
//   { id: 1, name: "Mike", city: "philps", state: "New York" },
//   { id: 2, name: "Steve", city: "Square", state: "Chicago" },
//   { id: 3, name: "Jhon", city: "market", state: "New York" },
//   { id: 4, name: "philps", city: "booket", state: "Texas" },
//   { id: 5, name: "smith", city: "brookfield", state: "Florida" },
//   { id: 6, name: "Broom", city: "old street", state: "Florida" },
// ];

// const filterDataSelected = (param) => {
//   var t = [];
//   console.log("param getting", typeof param);
//   t = data
//     .filter(function (item) {
//       return item.data[0] === param || item.data[1] === param;
//     })
//     .map(function ({ data, title }) {
//       return { data, title };
//     });
//   return t;
// };
// console.log(data111("food"));

// // var list1 = [
// //     {var1: "value1", var2: "value2", var3: "value3"},
// //     {var1: "value4", var2: "value5", var3: "value6"},
// //     {var1: "value4", var2: "value3", var3: "value2"},
// //     {var1: "value2", var2: "value2", var3: "value6"},
// //     {var1: "value1", var2: "value7", var3: "value7"},
// //     {var1: "value1", var2: "value6", var3: "value2"},
// // ];
// // const mySet1 = new Set()

// // mySet1.add("vishnu")           // Set [ 1 ]
// // mySet1.add("fagirm")           // Set [ 1, 5 ]
// // mySet1.add("Vishnu")
// // var t= mySet1;
// // console.log( t)
// // var searchString = "vishnu";

// // var newList = list.filter(element => {
// //     for (var property in element) {
// //         if (element.hasOwnProperty(property)) {
// //             if(element[property] == searchString) {
// //                 return true;
// //             }
// //         }
// //     }
// // });

// // console.log(newList);
// // let entries = Object.entries(qw);

// // for(let [index, [key, value]] of entries.entries()){
// //       var eachData = value.data
// //       for(let iq of user){

// //         console.log(iq)
// //       }

// // }
