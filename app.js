// const max = prompt("Enter the MAx Number");

// const max = prompt("You want to rool the dice: if yes type yes , else type no and to quit the type quit ")
// while(true){
//     if(max=="yes"){
//         const random = Math.floor(Math.random()*6)+1;
//         console.log("Dice number is: ",random);
        
//     }else if(max=="quit"){
//         console.log("you quit the game");
//         break;
//     }else{
        
//     }
// }
//  const random = Math.floor(Math.random()*6)+1;
//         console.log("Dice number is: ",random);
// let car={
//     name:"Mercedes",
//     model:2025,
//     price:1.02202
// }
// console.log(car.name);


// get Greater element then the num
// let arr=[2,3,4,5,2,6,7,8];
// let num = 5;

// function greaterNum(arr,num){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>num){
//             console.log(arr[i]);
            
//         }
//     }
// }
// greaterNum(arr,num);
// let str ="agagsradfhj";
// function uniqueElement(str){
//     let ans ="";
//     for(let i = 0;i<str.length;i++){
//         let currstr = str[i];
//         if (ans.indexOf(currstr)==-1){
//             ans+=currstr;
//         }
//     }
//     return ans;
// }
// console.log(uniqueElement(str));

// let country = ["Australia", "Germany","UK"]
// function largestCoutryName(arr){
//     let ansIdx = 0;
//     for (let i = 0; i < country.length; i++) {
//             let ansLen = country[ansIdx].length;
//             let currLen =country[i].length;
//             if (currLen > ansLen){
//                 ansIdx = i;
//             }
//      }
//      return country[ansIdx];
// }
// console.log(largestCoutryName(country));
// console.log("hi there!");
// setTimeout(()=>{
//     console.log("Apna college");
    
// },4000);
// console.log("Welcome to");
// 6500
// let arr=[2,4].every((el)=>{
//    return el%2===0;
// })
// console.log(arr);

// let print = function(el){
//     console.log(el)
// }
// console.log(arr.forEach(print));

// arr.forEach(function(el){
//     console.log(el);
    
// })
// let double = arr.map((el)=>{
//     return el*2;
// });
// console.log(double);

// let nums = [1,2,3,4,5]
// let finalVal = nums.reduce((res,el )=> res + el);
// console.log(finalVal);

// let num = [10,20]
// let result = num.every((el)=>{
//     return el%10==0;
// })

// console.log(result);

// let num = [10,20,342,1,3,6,6,8]
// let min  = num.reduce((min,el)=>{
//     if(min>el){
//         return el;
//     }else{
//         return min;
//     }
// })
// console.log(min);

// let arr = [1,2,3,4,5,6]

// let square = arr.map((el)=>{
//     return el*el;
// })
// let sum = arr.reduce((sum,el)=>{    
//     return el+sum;
// });

// let avg = sum/arr.length;

// console.log(avg);

// let doubleReturn=(arg,...args)=>[

//     ...arg,
//     ...args.map((v) => [v*2])
// ];
// console.log(doubleReturn([1,3,4,5],4,4,4));

// const mergeObject = (obj1,obj2)=>({...obj1,...obj2});

// console.log(mergeObject({a:1,b:2},{c:3,d:4}));

// let links = document.querySelectorAll('.box a');
// for (let i =0; i<links.length;i++){
//         links[i].style.color = "yellow";
// }

// let para1 = document.createElement("p")
// para1.innerText  = "Hey! I am Red";
// document.querySelector("body").append(para1);

// para1.classList.add("red");

// let h3 = document.createElement("h3")
// h3.innerText = "Hey!, I am blue "
// document.querySelector("body").append(h3)

// h3.classList.add("blue")

// let div = document.createElement("div");
// let h1 = document.createElement("h1");
// let p = document.createElement("p");

// h1.innerText = "I am in a div";
// p.innerText = "Me To!";
// div.append(h1);
// div.append(p);
// div.classList.add("box");


// document.querySelector("body").append(div)

// let button  = document.createElement("button")
// let input = document.createElement("input")
// button.innerText = "Click Me"
// document.querySelector("body").append(input);
// document.querySelector("body").append(button);


// let btns = document.querySelectorAll("button");

// for (btn of btns){
//     btn.onclick = sayHello;
// }
// function sayHello(){
//     console.log("hello");
// }

// let btn = document.querySelector("button");

// btn.addEventListener("click",function(){
//     let h3=document.querySelector("h3");
//     let randomcolor = getRandomColor();
//     h3.innerText = randomcolor;

//     let div=document.querySelector("div");
//     div.style.backgroundColor = randomcolor;

//     console.log("Color Updated");
    
// })
// function getRandomColor(){
//     let red=Math.floor(Math.random()*255)
//     let green=Math.floor(Math.random()*255)
//     let blue=Math.floor(Math.random()*255)

//     let color=`rgb(${red},${green},${blue})`;
//     return color;
// } 

// Random Color Change Game
// let btn = document.querySelector("button");
// btn.addEventListener("click", function() {
//         let h3 = document.querySelector("h3");
//         let randomcolor = getRandomColor();
//         h3.innerText = randomcolor;
//   let div = document.querySelector("div");
//   div.style.backgroundColor = randomcolor;
//         console.log("Color Updated");
//     });

//     function getRandomColor() {
//         let red = Math.floor(Math.random() * 255);
//         let green = Math.floor(Math.random() * 255);
//         let blue = Math.floor(Math.random() * 255);

//       let color = `rgb(${red},${green},${blue})`;
//     return color;
// }

let btn = document.querySelector("button");
// let h3 = document.querySelector("h3");
// let div = document.querySelector("div");

// function colorChange(){
//     console.dir(this.innerText);
//     this.style.backgroundColor="blue";
    
// }
btn.addEventListener("click",function(event){
  console.log(event);
  console.log("Button was clicked");
  
  
})
// h3.addEventListener("click",colorChange)
// div.addEventListener("click",colorChange)