

const formatValue=(value:number|string|boolean)=>{
  if (typeof value==="string") {
         return value.toUpperCase()
  } else if(typeof value==="number") {
     return value*10
  }
  else{
    return !value
  }
}


 type ArrayType<T>=Array<T>
const getLength=(value:string|ArrayType<string|number|boolean>): number=>{
     if (typeof value==="string") {
         return value.length;
     } else if(Array.isArray(value)) {
          return value.length;
     }
     return 0
}

class Person{
    name:string;
    age:number;

    constructor(name:string,age:number){
       this.name=name;
       this.age=age;
    }
    getDetails(){
        return `'Name: ${this.name}, Age: ${this.age}'`;
    }

}
const person1 = new Person('John Doe', 30);
const person2 = new Person('Alice', 25);


type BookName={
    title:string;
    rating:number
}
const filterByRating=(value:BookName[]):BookName[]=>{
     const heightRatedBooks=value.filter(book=>book.rating>=4.0);
     return heightRatedBooks;
 
}
 


type User={
    id: 1;
    name: 'string'; 
    email: 'string';
    isActive: boolean
}
const  filterActiveUsers =(users:User[]):User[]=>{
    const activeUsers=users.filter(user=>user.isActive===true);
    return activeUsers
}

interface Book{
    title:string;
    author:string;
    publishedYear: number;
    isAvailable :boolean
}
const printBookDetails=(obj:Book):string=>{
    return `Title: ${obj.title}, Author: ${obj.author}, Published Year: ${obj.publishedYear}, Available: ${obj.isAvailable?"Yes":"No"}`;
}



type UniqueArray<T>=Array<T>
const getUniqueValues=(arr1:UniqueArray<number|string>,arr2:UniqueArray<number|string>):UniqueArray<number|string>=>{
    
    const combinedArray=[...arr1,...arr2];
    const newArray:(number|string)[]=[]
    if(Array.isArray(combinedArray)){
         for(const item of combinedArray){
            newArray.includes(item)? null : newArray.push(item)
         }
    }
    return newArray
}


type Product={
    name:string;
    price:number;
    quantity:number;
    discount?:number
}
const calculateTotalPrice=(products:Product[]):number=>{
    let totalPrice:number=0
    for(const product of products){
        const total=product.price*product.quantity;
        if(product.discount){
            const discountAmount=total*(product.discount)/100;
            const individual= total-discountAmount;
            totalPrice+=individual
        }
        else{
            totalPrice+=total;
        }
    }
    return totalPrice;
}

