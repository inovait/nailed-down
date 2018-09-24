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