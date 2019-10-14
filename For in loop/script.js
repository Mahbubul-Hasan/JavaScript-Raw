// var myObject =
// {
//   item1 = 'property1',
//   item2 = 'property2',
//   item3 = 'property3'
// };
//
// for(var item in myObject)
// {
//   if(myObject.hasOwnProperty(item))
//   {
//     console.log(myObject[item]);
//   }
// }

var number = [1, 2, 3, 4, 5];

for(var key in number)
{
  document.write(number[key]);
}

var data = [];
data['name'] = 'Mahbubul';
data['home'] = 'Jessore';
data['stydy'] = 'DIU';

for(var key in data){
    document.write('<br/>'+ data[key]);
}