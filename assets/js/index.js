$("#add_job").submit(function (event) {
  alert("Data Inserted Successfully!");
});

$("#update_job").submit(function (event) {
  event.preventDefault();

  // this refers to "#update_user"
  var unindexed_array = $("#update_job").serializeArray();
  var data = {};

  $.map(unindexed_array, (n, i) => {
    data[n["name"]] = n["value"];
  });

  var request = {
    url: `http://localhost:3000/api/jobs/${data.id}`,
    method: "PUT",
    data: data,
  };

  $.ajax(request).done((response) => {
    alert("Data Updated Successfully");
  });
});

$("#update_status").submit(function (event) {
  event.preventDefault();

  var unindexed_array = $("#update_status").serializeArray();

  for (var i = 0; i < unindexed_array.length; i += 2) {
    var data = {
      id: unindexed_array[i].value,
      status: unindexed_array[i + 1].value,
    };
    var request = {
      url: `http://localhost:3000/api/jobs/${data.id}`,
      method: "PATCH",
      data: data,
    };
    $.ajax(request).done((response) => {});
  }
  alert("Data Updated Successfully");
});

if (
  window.location.pathname == "/" ||
  window.location.pathname == "/archive" ||
  window.location.pathname == "/sort-status"
) {
  $onDelete = $(".table tbody td a.delete");
  // $tableRows = $( "tr" );
  $onDelete.click(function () {
    var id = $(this).attr("data-id");
    alert(`ID: ${id}`);

    var request = {
      url: `http://localhost:3000/api/jobs/${id}`,
      method: "DELETE",
    };

    if (confirm("Do you really want to delete this Record?")) {
      $.ajax(request).done(function (response) {
        alert("Data Deleted Successfully");
        location.reload();
      });
    }
  });
}
