
window.onload = ()=>{
    if(localStorage.getItem("CodeRunBefore") === null)
    {
        let emp_arr = [];
        localStorage.setItem("total_emp_array", JSON.stringify(emp_arr));
        localStorage.setItem("CodeRunBefore", true);
    
    }
  }

  //**************************************************AddData*********************************************************************************************************>
 
  function addData(){
    var empId = document.getElementById("empid").value;
    var empName = document.getElementById("name").value;
    var empAge = document.getElementById("age").value;
  
    if(empId !== null && empName !== null && empName !== null){
        let EMPLOYEE_INFO = {
            id : empId, name : empName, age : empAge
        };
    
        sessionStorage.setItem("curr_item", JSON.stringify(EMPLOYEE_INFO));
    
    
        let emp_arr = JSON.parse(localStorage.getItem("total_emp_array")|| "[]");
        emp_arr.push(EMPLOYEE_INFO);
        localStorage.setItem("total_emp_array", JSON.stringify(emp_arr));
    }
      window.location.href="./Employee.html";
  }

//*****************************************ResetForm************************************************************************************************** */
  
const resetForm = () => {
    document.getElementById("empid").value = "";
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
  };

  // ********************************************Fetching UpdateData******************************************************************************>
  
  var EditRecord= JSON.parse(localStorage.getItem("EditRecord"));
  if(EditRecord){
      let currObj = JSON.parse(localStorage.getItem("currObj"));
      document.getElementById("empid").value = currObj.id;
      document.getElementById("name").value = currObj.name;
      document.getElementById("age").value = currObj.age;
      
      localStorage.setItem("EditRecord", JSON.stringify(false));
  }  


//*************************************************************************************************************************************************************** */
