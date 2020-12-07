import React from "react";

const FullName = () => {
    let firstName = "Safa";
    let lastName = "Jemaiel";
    return (
     <div>
      <form> 
      <label>First Name:</label>
      <input type="text" value={firstName}/>
      <br/>
      <label>Last Name:</label>
      <input type="text" value={lastName} />
      <br/>
      </form>
      </div>
    );
   }
export default FullName ;