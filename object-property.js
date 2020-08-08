const student = [
  { id: 14, name: "Aubameyang" },
  { id: 34, name: "Xhaka" },
  { id: 19, name: "Nicolas" },
  { id: 10, name: "Mesut Ozil" },
];

const names = student.map((s) => s.name);
console.log(names);

const ids = student.map((s) => s.id);
console.log(ids);

const bigger = student.filter((s) => s.id > 15);
console.log(bigger);

const bigger1 = student.find((s) => s.id > 15);
console.log(bigger1);
