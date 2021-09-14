// Example of array
var StudentAge = [15, 52, 14, 15, 16, 17];
console.log(StudentAge);

// Index number in Var
var PeopleAge = [14, 55, 68, 26, 54, 74];
var BulbulAge = PeopleAge[3];
console.log(BulbulAge);

// Update a In Array 505 will change to 888
var StudentMarks = [140, 505, 608, 260, 540, 704];
var BulbulMarks = StudentMarks[2];
StudentMarks[1] = 888;
console.log(StudentMarks);

// Example of Index of
var NumberCollection = [122, 155, 152, 521, 698, 478];
console.log(NumberCollection[1]);

//find The Index from Array
//  কোন এরে তে ইলিমেন্ট আছে কিনা তা এই ভাবে চেকে করা যায়। ইন্ডেক্স পজিশিন নেগেটিভ আসলে বুঝতে হবে এরে এলিমেন্ট নাই।
var studentName = ["bulbul", "habib", "hasan", "sumon", "farhad"];
studentName.indexOf("bulbul");
var position = studentName.indexOf("bulbul");
console.log(position);
