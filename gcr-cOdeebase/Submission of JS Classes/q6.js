// Q6: Employee Management System
class Employee {
  constructor(id,name,department,salary){Object.assign(this,{id,name,department,salary});} // salary is monthly
  getAnnualSalary(){return this.salary*12;}
  applyBonus(percent){if(percent<0)throw new Error("Bonus cannot be negative.");this.salary*=1+percent/100;}
}
const employees=[
 new Employee(1,"Aarav","Engineering",50000),new Employee(2,"Meera","HR",42000),
 new Employee(3,"Kabir","Sales",45000),new Employee(4,"Anaya","Finance",55000),
 new Employee(5,"Rohan","Engineering",60000)
];
employees.forEach(e=>console.log(`${e.name}: Annual salary = ₹${e.getAnnualSalary().toFixed(2)}`));
employees[0].applyBonus(10);
console.log(`After bonus, ${employees[0].name}: ₹${employees[0].getAnnualSalary().toFixed(2)} annually`);
const total=employees.reduce((sum,e)=>sum+e.getAnnualSalary(),0);
console.log(`Total annual company payout = ₹${total.toFixed(2)}`);
