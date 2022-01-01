
window.onload = ()=>{
    if(localStorage.getItem("CodeRunBefore") === null)
    {
        let Deprt_arr = [];
        localStorage.setItem("total_Deprt_array", JSON.stringify(Deprt_arr));
        localStorage.setItem("CodeRunBefore", true);
    
    }
  }

  //*****************************************AddData*********************************************************************** ************->

  function addData(){
    var Department_Id = document.getElementById("deprtid").value;
    var Department_Name = document.getElementById("deprtname").value;
  
    if(Department_Id !== null && Department_Name!== null){
        let DEPARTMENT_INFO = {
            id : Department_Id , name :Department_Name
        };
    
    
        let total_Deprt_array = JSON.parse(localStorage.getItem("total_Deprt_array")|| "[]");
        total_Deprt_array.push(DEPARTMENT_INFO);
        localStorage.setItem("total_Deprt_array", JSON.stringify(total_Deprt_array));
    }
  }

  // *****************************************ResetForm****************************************************************************************************>
  
  const resetForm = () => {
    document.getElementById("deprtid").value = "";
    document.getElementById("deprtname").value = "";
  };

  // ********************************Fetching UpdateData*******************************************************************************************************>
 
  var Edit= JSON.parse(localStorage.getItem("Edit"));
  if(Edit){
      let currObj = JSON.parse(localStorage.getItem("currObj"));
      document.getElementById("deprtid").value = currObj.id;
      document.getElementById("deprtname").value = currObj.name;

      
      localStorage.setItem("Edit", JSON.stringify(false));
  }  

  //**************************************************************************************************************************************** */