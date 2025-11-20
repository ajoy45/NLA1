1.What are some differences between interfaces and types in TypeScript?
  *interface  ডিক্লেয়ার করে নতুন property যোগ করা যায়।
  *type একবার ডিক্লেয়ার হলে পরে আর বাড়ানো যায় না |
  *interface সাধারণত object structure এবং class এর shape ডিফাইন করতে বেশি ব্যবহৃত হয় |
  *type বেশি flexible — union, intersection, tuple, primitive — সবকিছু represent করতে পারে।
  *interface → extends দিয়ে extend করা যায়।
  *type → intersection (&) দিয়ে merge করা হয়