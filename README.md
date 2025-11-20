1.What are some differences between interfaces and types in TypeScript?
  *interface  ডিক্লেয়ার করে নতুন property যোগ করা যায়।
  *type একবার ডিক্লেয়ার হলে পরে আর বাড়ানো যায় না |
  *interface সাধারণত object structure এবং class এর shape ডিফাইন করতে বেশি ব্যবহৃত হয় |
  *type বেশি flexible — union, intersection, tuple, primitive — সবকিছু represent করতে পারে।
  *interface → extends দিয়ে extend করা যায়।
  *type → intersection (&) দিয়ে merge করা হয়

  2.Provide an example of using union and intersection types in TypeScript.
   union:
   type User=string;
   type Admin=boolean;
   type UserOrAdmin=string|boolean;
   let example:UserOrAdmin;
    example="hello"  ঠিক আছে
    example=true  ঠিক আছে
    example=123 ভুল

    intersection:
 
    type Student={
        id:number;
        name:string;
    }

    type Teacher={
        profession:string;
        salary:number
    }

    type CombineStudentAndTeacher=Student & Teacher;

    const example2:CombineStudentAndTeacher={
        id:123,
        name:"Mr.Y",
        profession:"teacher",
        salary:25000
    }


    