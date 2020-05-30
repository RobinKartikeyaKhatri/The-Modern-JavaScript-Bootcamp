// Global Scope (name)
  // Local Scope (name)
    // Local Scope
  // Local Scope

let name = "Robin";  
if (true) {
    let name = "Mike";
    if (true) {
        name = "Jen"
        console.log(name);
    }   
}

if (true) {
    console.log(name);   
}