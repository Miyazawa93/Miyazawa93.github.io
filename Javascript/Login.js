$("#submit").click(function() {
  var email = $("#email").val();
  var password = $("#password").val();
  var hashed = CryptoJS.MD5(password).toString();

  var selectedCompany = document.getElementById("companyID");
  var uploadCompany = selectedCompany.options[selectedCompany.selectedIndex].value;

  console.log(email);
  console.log(password);
  console.log(hashed);
  console.log(uploadCompany);

//   $(document).ajaxError(function(e, jqxhr, settings, exception) {
//   if (jqxhr.readyState == 0 || jqxhr.status == 0) {
//     return; //Skip this error
//   }
//   });
  $.when (
  $.ajax({
    url: "https://34.209.228.122/api/login/staff",
    type: "POST",
    dataType: 'json',
    cache: false,
    crossOrigin: true,
    headers: {'Content-Type': 'application/json'},
    useDefaultXhrHeader: false,
    beforeSend: function(xhr) {
      xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest"); 
      xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
      xhr.setRequestHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
      xhr.setRequestHeader('Access-Control-Allow-Headers', 'Content-Type, Content-Range, Content-Disposition, Content-Description');
    },
    jsonData: {
      "companyid": uploadCompany,
      "email": email,
      "passwordhash": hashed
    },
    success: function(response) {
//       open("MainPage.html","_self");
      console.log('Successfully retrieved ' + response);
    },
    error: function(e, jqxhr, settings, exception) {
  if (jqxhr.readyState == 0 || jqxhr.status == 0) {
    return;
      }
  }
  })).then(function(data, textStatus, jqXHR){
    alert(jqXHR.status); 
  }); 
});


//     function(xhr, ajaxOptions, thrownError) {
//        alert(xhr.status);             
//        alert(thrownError); 
//       console.log(response); 
//       console.log('Failed ' + response.status + ' ' + response.statusText);
