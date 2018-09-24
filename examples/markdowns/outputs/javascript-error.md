# This would run a javascript file with error
```javascript
const x = 3;
const y = 7;
console.log('trying to reassign variable x');
x = x + y;
```


 --- 
 #### Runtime output  

* 2018-09-24T23:17:28.755Z

 ```
trying to reassign variable x

``` 
* <span style="color: red">stderr </span>2018-09-24T23:17:28.756Z

 ```
evalmachine.<anonymous>:5
x = x + y;
  ^

TypeError: Assignment to constant variable.
    at evalmachine.<anonymous>:5:3
    at ContextifyScript.Script.runInContext (vm.js:59:29)
    at Object.runInContext (vm.js:120:6)
    at NodeJSProcess._init (C:\git\impactwrap-project\exec2markdown\lib\nodejs-process.js:45:10)
    at Timeout.setTimeout [as _onTimeout] (C:\git\impactwrap-project\exec2markdown\lib\nodejs-process.js:71:57)
    at ontimeout (timers.js:475:11)
    at tryOnTimeout (timers.js:310:5)
    at Timer.listOnTimeout (timers.js:270:5)

``` 

 > <span style='color:orange'>Process exited with status code 1</span> (duration 0 seconds)