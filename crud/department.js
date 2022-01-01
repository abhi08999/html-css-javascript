window.onload = () => {
    if( JSON.parse(localStorage.getItem("page2"))==null){
          localStorage.setItem("page2",JSON.stringify(1));
    }
    
    load();
  
  };
  
  
// <!--********************************Display****************************************************************-->
  
  function ShowData() {
    let data = JSON.parse(localStorage.getItem("deprt_array") || "[]");
    //console.log(localStorage.getItem("data"));
    let output = document.getElementById("showResult");
    let html = ``;
    for (let dep of data) {
      html += `<tr >
          <td >${dep.id}</td>
          <td >${dep.name}</td>
        
    <td><input id="change" type='Submit' onclick='update(this);' class='btn btn-danger' value='Update'/></td>
    <td><input id="change" type='Submit' onclick='deleteRow(this);' class='btn btn-danger' value='Delete'/></td>
      </tr>
    `;
    }
    output.innerHTML = html;
    
  }

  //<************************************************update***************************************************----->
  
  function update(obj) {
    var deprt_id = obj.parentNode.parentNode.children[0].innerText;
    var deprt_name = obj.parentNode.parentNode.children[1].innerText;
  
    localStorage.setItem(
      "currObj",
      JSON.stringify({
        id: deprt_id,
        name: deprt_name,
      
      })
    );
  
    localStorage.setItem("Edit", JSON.stringify(true));
    window.location.href = "./Department_form.html";
  
    let total_deprt_arr = JSON.parse(localStorage.getItem("total_Deprt_array") || "[]");
    let filtered_arr = total_deprt_arr.filter((obj) => obj.id !== deprt_id);
    localStorage.setItem("total_Deprt_array", JSON.stringify(filtered_arr));
  }
  
  // <****************************************Delete*************************************************************************--->
 
  function deleteRow(obj) {
    var confirmed = confirm("Are You Sure To Delete The Record?");
    if (confirmed) {
      var deprt_id = obj.parentNode.parentNode.children[0].innerText;
      let deprt_arr = JSON.parse(localStorage.getItem("total_Deprt_array") || "[]");
      let filtered_arr = deprt_arr.filter((obj) => obj.id !== deprt_id);
      localStorage.setItem("total_Deprt_array", JSON.stringify(filtered_arr));
    }
    load();
    ShowData();
  }

  
  //<*******************************************search ***********************************************************************--->
  
  function search() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchbar");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  // <**********************************************sorting *******************************************************************>
  
  function sortedData(order, data, columnName) {
    return data.sort((a, b) => {
      var textA = a[columnName].toUpperCase();
      var textB = b[columnName].toUpperCase();
      if (order) {
        if (textA < textB) {
          return -1;
        } else if (textA > textB) {
          return 1;
        }
        return 0;
      } else {
        if (textA > textB) {
          return -1;
        } else if (textA < textB) {
          return 1; 
        }
        return 0;
      }
    });
  }
  let order = true;
  function sort(columnName) {
    let data = JSON.parse(localStorage.getItem("deprt_array") || "[]");
  
    data = sortedData(order, data, columnName);
    localStorage.setItem("deprt_array", JSON.stringify(data));
    order = !order;
    ShowData();
  }
  
  //<*********************************************pagination***********************************************************************(***>
  
  var data = new Array();
  var pageList1 = new Array();
  var currentPage = JSON.parse(localStorage.getItem("page2"));
  var numberPerPage = 3;
  var numberOfPages = 0;
  
  function makeList() {
  data=JSON.parse(localStorage.getItem("total_Deprt_array") || "[]");
  numberOfPages = getNumberOfPages();
  }
  
  function getNumberOfPages() {
  return Math.ceil(data.length / numberPerPage);
  }
  
  function nextPage() {
  currentPage += 1;
  localStorage.setItem("page2",JSON.stringify(currentPage));
  loadList();
  }
  
  function previousPage() {
  currentPage -= 1;
  localStorage.setItem("page2",JSON.stringify(currentPage));
  loadList();
  }
  
  function firstPage() {
  currentPage = 1;
  localStorage.setItem("page2",JSON.stringify(currentPage));
  loadList();
  }
  
  function lastPage() {
  currentPage = numberOfPages;
  localStorage.setItem("page2",JSON.stringify(currentPage));
  loadList();
  }
  
  function loadList() {
  var begin = ((currentPage - 1) * numberPerPage);
  var end = begin + numberPerPage;
  
  pageList1 = data.slice(begin, end);
  localStorage.setItem("deprt_array",JSON.stringify(pageList1));
  ShowData();
  check();
  }
  
  function check() {
  document.getElementById("next").disabled = currentPage == numberOfPages ? true : false;
  document.getElementById("previous").disabled = currentPage == 1 ? true : false;
  document.getElementById("first").disabled = currentPage == 1 ? true : false;
  document.getElementById("last").disabled = currentPage == numberOfPages ? true : false;
  }
  
  function load() {
  makeList();
  loadList();
  }
 
 //*******************************____________END_________******************************************************************>
 
  
  