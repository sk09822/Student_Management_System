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


const map = new Map()

    map.set(1, { name:'Aditya', rollNo: '23', address:'Pune', physicsMarks: 45, chemistryMarks:64,mathMarks:54});
    map.set(1, { name:'Shubham', rollNo: '54', address:'Pune', physicsMarks: 65, chemistryMarks:76,mathMarks:67});
    map.set(1, { name:'Rahul', rollNo: '33', address:'Pune', physicsMarks: 76, chemistryMarks:45,mathMarks:78});
    map.set(1, { name:'Niranjan', rollNo: '12', address:'Pune', physicsMarks: 44, chemistryMarks:98,mathMarks:55});
    
    console.log(map);

  
