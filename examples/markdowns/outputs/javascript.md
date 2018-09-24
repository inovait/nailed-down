# This would run a javascript file
```javascript
function unsafeFloor(a){
  return ~~a;
}
const realNumber = 3.1415926538;
const negativeRealNumber = -0.9;
console.error('Using unsafe floor function');
console.log(`usafeFloor(${realNumber}) = ${unsafeFloor(realNumber)}`);
console.log(`usafeFloor(${negativeRealNumber}) = ${unsafeFloor(negativeRealNumber)}`);
```


 --- 
 #### Runtime output  

* <span style="color: red">stderr </span>2018-09-24T23:17:28.750Z

 ```
Using unsafe floor function

``` 
* 2018-09-24T23:17:28.752Z

 ```
usafeFloor(3.1415926538) = 3

``` 
* 2018-09-24T23:17:28.752Z

 ```
usafeFloor(-0.9) = 0

``` 

 > <span style='color:green'>Process exited with status code 0</span> (duration 0 seconds)