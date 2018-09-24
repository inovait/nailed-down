# This would run a javascript file with infinite loop (timeout after 3 seconds)
```javascript TIMEOUT 3
console.log('Evil code incomming!');
while(Math.random() !== -1);
```


 --- 
 #### Runtime output  

* 2018-09-24T23:17:28.760Z

 ```
Evil code incomming!

``` 
* <span style="color: red">stderr </span>2018-09-24T23:17:31.761Z

 ```
Error: Script execution timed out.
    at ContextifyScript.Script.runInContext (vm.js:59:29)
    at Object.runInContext (vm.js:120:6)
    at NodeJSProcess._init (C:\git\impactwrap-project\exec2markdown\lib\nodejs-process.js:45:10)
    at Timeout.setTimeout [as _onTimeout] (C:\git\impactwrap-project\exec2markdown\lib\nodejs-process.js:71:57)
    at ontimeout (timers.js:475:11)
    at tryOnTimeout (timers.js:310:5)
    at Timer.listOnTimeout (timers.js:270:5)

``` 

 > <span style='color:red'>Process killed</span> (duration 3 seconds)