class ValidationError extends Error { //class untuk kostum error catch
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

let json = '{ "age": 30 }';
 
try {
  let user = JSON.parse(json);
 
  if (!user.name) { //akan error karena tidak ada properti name di json tersebut 
    throw new ValidationError("'name' is required.");
  }
 
  console.log(user.name);
  console.log(user.age);
} catch (error) {
  if (error instanceof ValidationError) {
    console.log(`JSON Error: ${error.message}`);
  } else if (error instanceof ReferenceError) {
    console.log(error.message);
  } else {
    console.log(error.stack);
  }
}