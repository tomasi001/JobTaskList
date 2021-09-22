// select add job id
// on submit alert user
$("#add_job").submit(function (event) {
  alert("Data Inserted Successfully!");
});

// select update job id
$("#update_job").submit(function (event) {
  event.preventDefault();

  // on submit store information from form in unindexed array
  var unindexed_array = $("#update_job").serializeArray();

  // create empty object to store data
  var data = {};

  // map through the array and store
  // the name and value pairs
  // in the data object
  $.map(unindexed_array, (n, i) => {
    data[n["name"]] = n["value"];
  });

  // make a request object
  var request = {
    url: `http://localhost:3000/api/jobs/${data.id}`,
    method: "PUT",
    data: data,
  };

  // make an ajax request
  // alert user when done
  $.ajax(request).done((response) => {
    alert("Data Updated Successfully");
  });
});

// select update status id
$("#update_status").submit(function (event) {
  event.preventDefault();

  // on submit store information from form in unindexed array
  var unindexed_array = $("#update_status").serializeArray();

  // for the array length
  for (var i = 0; i < unindexed_array.length; i += 2) {
    // store id and status in data object
    var data = {
      id: unindexed_array[i].value,
      status: unindexed_array[i + 1].value,
    };

    // create request object
    var request = {
      url: `http://localhost:3000/api/jobs/${data.id}`,
      method: "PATCH",
      data: data,
    };
    // create ajax request
    $.ajax(request).done((response) => {});
  }
  // alert user when done
  alert("Data Updated Successfully");
});

// check pathname
if (
  window.location.pathname == "/" ||
  window.location.pathname == "/archive" ||
  window.location.pathname == "/sort-status"
) {
  // create on delete variable
  $onDelete = $(".table tbody td a.delete");

  // create on click funciton
  $onDelete.click(function () {
    // get id from delete button
    var id = $(this).attr("data-id");

    // create request object
    var request = {
      url: `http://localhost:3000/api/jobs/${id}`,
      method: "DELETE",
    };

    // ask for users permission to delete current record
    if (confirm("Do you really want to delete this Record?")) {
      // make ajax request
      // alert user when done
      $.ajax(request).done(function (response) {
        alert("Data Deleted Successfully");
        // reload page
        location.reload();
      });
    }
  });
}
