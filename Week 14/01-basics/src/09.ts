interface Employee {
    name: string;
    startDate: Date;
  };
  
  interface Manager {
    name: string;
    department: string;
  };
  
  type TeamLead = Employee & Manager;
  
  const teamLead: TeamLead = {
    name: "fsfds",
    startDate: new Date(),
    department: "Software developer"
  };

// ts can sum num + num 
// ts can sum string + string
// ts can sum string  + num 
// ts cannot sum (string | num) + (string | num)