/*jshint esversion: 6 */
stickOrChopsticks=(things,n)=>{
  return things === "stick" ? ( (n % 2) ? -1 : n / 2) : n * 2;
};

console.log(('stickOrChopsticks=(things,n)=>{return things=="stick"?((n%2)?-1:n/2):n*2;};').length);

console.log(stickOrChopsticks("stick",10),5);
console.log(stickOrChopsticks("stick",11),-1);
console.log(stickOrChopsticks("chopstick",5),10);
