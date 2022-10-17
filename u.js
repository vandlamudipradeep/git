// var student = {age:22};

// var student_age = function(age){
//  return this.age ; 
// }
// let x  = student_age.call(student);
// console.log(x);
// let a  = student_age.apply(student);
// console.log(a);
// let b = student_age.bind(student);
// console.log(b(student));



// let multiply = function (x,y){
//     console.log(x * y);
// }

//let multiplyByTwo = function (y){
 //   let x = 2 ; 
// console.log(x * y);
//}

let multiply = function (x){
return function(y){
    console.log(x*y);
}
}

let multiplyByTwo = multiply(2) ;
multiplyByTwo(3);



let multiplyByThree = multiply(3);
multiplyByThree(10);
//let multiplyByTwo = multiply.bind(this ,  2) ;// 3 eventually becomes  y and  prints  6  
// multiplyByTwo(5);
// multiplyByTwo(2,3);// 2,3 eventually becomes x , y  and  prints  6 
//multiplyByTwo(3);// 3 eventually becomes  x and multople  with y prints  6 




// let multiplyByThree = multiply.bind(this,3);
// multiplyByThree(5);






    
    
    
    
    
    
    
    
    
    