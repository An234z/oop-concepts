class Student {
    #name;  
    #id;    
    #status; 
  
    constructor(name, id) {
      this.#name = name;    
      this.#id = id;        
      this.#status = "Active"; 
    }
  
    // Meetod id väärtuse tagastamiseks
    getId() {
      return this.#id;
    }
  
    // Meetod nime muutmiseks
    setName(name) {
      this.#name = name;
    }
  
    // Meetod nime tagastamiseks
    getName() {
      return this.#name;
    }
  
    // Meetod staatuse muutmiseks vaid kindla väärtuse juhul
    setStatus(status) {
      const validStatuses = ["Active", "Expelled", "Finished", "Inactive"];
      if (validStatuses.includes(status)) {
        this.#status = status;
      }
    }
  
    // Meetod staatuse tagastamiseks
    getStatus() {
      return this.#status;
    }
  }
  
 
  const student1 = new Student("Anni", 12345);
  console.log(student1.getId());      
  console.log(student1.getName());   
  console.log(student1.getStatus());       
 
  
  
  