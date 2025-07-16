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