class student{
  constructor(name,rollNo,address,physicsMarks,chemistryMarks,mathMarks){
    this.name = name;
    this.rollNo = rollNo;
    this.address = address;
    this.physicsMarks = physicsMarks;
    this.chemistryMarks = chemistryMarks;
    this.mathMarks= mathMarks;

  }
 
}
student1 = new student("Aditya",23,"pune",45,64,54);
student2 = new student("Shubham",54,"pune",65,76,67);
console.log(student1);
console.log(student2);
  
