# This would run a javascript file with infinite loop (timeout after 3 seconds)
```javascript TIMEOUT 3
console.log('Evil code incomming!');
while(Math.random() !== -1);
```