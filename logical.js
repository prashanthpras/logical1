//1.program to find the ASCII value of a character

// let string=prompt("enter the letter")
// console.log(`ASCII value of ${string} =`+ string.charCodeAt(0))

//2.arranging the letter in alphabetical order of given string 


// function PassingString(str)
// {
// return str.split("").sort().join("")
// }
// console.log(PassingString("apple"))


//3.Find the Area of a circle

// function circle(radius)
// {
// let area=Math.PI*radius*radius
// console.log(area)
// console.log(Math.round(area)) //to round of the area
// }
// circle(10)

//4.Find the Area of a triangle

// let base=prompt("enter the base of triangle")
// let height=prompt("enter the height of triangle")
// let AreaOfTriangle=(base*height)/2
// console.log(`the area of the given triangle is  ${AreaOfTriangle}`)

//5.Find the number is Armstrong number or not 

// let sum=0;
// let number=prompt("enter the 3 digits")
// let temp=number;
// while(temp>0)
// {
//     let reminder=temp%10
//     sum+=reminder*reminder*reminder;
//     temp=parseInt(temp/10)
// }
// if(sum==number)
// {
//     console.log(`${number} is an Armstrong number`)
// }else{
//     console.log(`${number} is not an Armstrong number`)
// }

//6.How to empty an in javascript
//using swap

// let array1=["a","b","c"]
// let array2=array1
// array1=[]
// console.log(array2)
// console.log(array1)

//7.How to convert array to object

// let emp={
//     name:"prashanth",
//     id:123,
//     sal:30000
// }
// console.log(Object.assign({},emp))
//  console.log({...emp})

//  let arr1=[
//      ["name","prashanth"],
//      ["id","123"],
//      ["profession","develper"],
//  ]
//  console.log(Object.fromEntries(arr1))

//8.Program to sort array in ascending order

// let arr=[10,53,45,23,75,62]
// for(let i=1;i<arr.length;i++)
// {
//     for(let j=0;j<i;j++)
//     {
//         if(arr[i]<arr[j])
//         {
//             let temp=arr[i]
//             arr[i]=arr[j]
//             arr[j]=temp
//         }
//     }
// }
// console.log(arr)

//9.Find the average of an array

// let arr=[10,20,30]
// let sum=0
// let avg;
// for(let i=0;i<arr.length;i++)
// {
//     sum+=arr[i]
// }
// avg=sum/arr.length;
// console.log(avg)

//10.Program for calculator

// let operator=prompt("enter operator(+,-,*,/)")
// let num1=parseFloat(prompt("enter the num1"))
// let num2=parseFloat(prompt("enter the num2"))
// let result;

// if(operator=="+")
// {
//     result=num1+num2
// }
// else if(operator=="-")
// {
//     result=num1-num2
// }
// else if(operator=="*")
// {
//     result=num1*num2
// }
// else if(operator=="/")
// {
//     result=num1/num2
// }
// console.log(`${num1} ${operator} ${num2} = ${result}`)
