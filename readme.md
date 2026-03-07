1. What is the difference between var, let, and const?

var, let, এবং const JavaScript এ variable declare করার জন্য ব্যবহার করা হয়, কিন্তু এদের behavior আলাদা।

var পুরোনো ধরনের variable declaration। এটি reassign এবং redeclare করা যায়। এটি function scoped, তাই যদি কোনো variable function এর ভিতরে declare করা হয় তাহলে সেটা শুধু ওই function এর ভিতরেই কাজ করবে।

let modern JavaScript এ ব্যবহার করা হয়। এটি redeclare করা যায় না, কিন্তু reassign করা যায়। let block scoped, তাই { } block এর ভিতরে declare করলে সেটি শুধু ওই block এর ভিতরেই ব্যবহার করা যায়।

const ও block scoped, কিন্তু এটি reassign বা redeclare করা যায় না। সাধারণত এমন variable এর জন্য const ব্যবহার করা হয় যার value পরিবর্তন করার দরকার নেই।

2. What is the spread operator (...)?

Spread operator (...) JavaScript এ array বা object এর elements বা properties কে expand করার জন্য ব্যবহার করা হয়।

এটি সাধারণত array copy করা, array merge করা, বা object copy করার জন্য ব্যবহার করা হয়।

Spread operator ব্যবহার করলে সহজভাবে একটি array বা object থেকে আরেকটিতে data নেওয়া যায়।

উদাহরণ হিসেবে, একটি array এর সব element অন্য একটি array এর মধ্যে যোগ করার জন্য spread operator ব্যবহার করা যায়।

3. What is the difference between map(), filter(), and forEach()?

এই তিনটি method array এর উপর কাজ করার জন্য ব্যবহার করা হয়, কিন্তু তাদের কাজ আলাদা।

map() ব্যবহার করা হয় যখন array এর প্রতিটি element এর উপর কিছু operation করে একটি নতুন array তৈরি করতে চাই।
এটি সব element এর উপর কাজ করে এবং একটি নতুন array return করে।

filter() ব্যবহার করা হয় যখন কোনো condition অনুযায়ী কিছু element select করে একটি নতুন array তৈরি করতে চাই।
যে element condition match করবে শুধু সেগুলো নতুন array তে থাকবে।

forEach() ব্যবহার করা হয় array এর প্রতিটি element এর উপর কোনো কাজ করার জন্য, কিন্তু এটি নতুন কোনো array return করে না।
সাধারণত logging বা side effect এর জন্য এটি ব্যবহার করা হয়।

4. What is an arrow function?

Arrow function হলো JavaScript এ function লেখার একটি ছোট এবং modern syntax।

এটি function keyword ব্যবহার না করে => চিহ্ন ব্যবহার করে লেখা হয়।

Arrow function সাধারণত ছোট function লেখার জন্য ব্যবহার করা হয় এবং code কে আরো clean ও readable করে।

5. What are template literals?

Template literals JavaScript এ string লেখার একটি modern পদ্ধতি।

এতে backtick ` ব্যবহার করা হয়।

Template literals ব্যবহার করলে সহজে string এর ভিতরে variable বা expression যোগ করা যায় ${ } এর মাধ্যমে।

এছাড়াও এটি multi-line string লেখার সুবিধা দেয়।

উদাহরণ হিসেবে, কোনো variable এর value সহজে string এর ভিতরে দেখানোর জন্য template literals ব্যবহার করা হয়।
