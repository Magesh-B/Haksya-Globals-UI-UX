/*function displayAdminLogin()
{
    var element = document.getElementById("buttonAdmin");
    element.classList.add("active");
}
*/
/*
$(document).ready(function(){
    $("#buttonAdmin").click(function(){
      $("#buttonAdmin").addClass("active");
    });
  });
 */
$(document).ready(function(){
    $("#buttonAdmin").click(function(){
      $("#login2").hide();
      $("#login1").show();
    });
  });
  $(document).ready(function(){
    $("#buttonSalesPerson").click(function(){
      $("#login1").hide();
      $("#login2").show();
    });
  });
  
  function shopListDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }
  