var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

//this part is sorting students  by name
//this is an eample of anonymous callback function
students.sort(function(a, b) {
  var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  var nameB = b.name.toUpperCase(); // ignore upper and lowercase
     if (nameA < nameB) {
     return -1;
     }
     if (nameA > nameB) {
    return 1;
     }
     if (nameA = nameB) { 
  //here because we have 2 students with the same name we sort by age
        return students.sort(function (a, b) {
        return a.age - b.age;
        });
    
    }
});
console.log(students);
