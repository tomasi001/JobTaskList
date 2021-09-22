// create variable to store axios as requirement
const axios = require("axios");

// export home route function
// make an axios get request
// render index page and send jobData to page
// catch any errors
exports.homeRoutes = (req, res) => {
  axios
    .get("http://localhost:3000/api/jobs")
    .then(function (response) {
      res.render("index", { jobs: response.data });
    })
    .catch((error) => {
      res.send(error);
    });
};

// export sort route function
// make an axios get request
// render sort_status page and send jobData to page
// catch any errors
exports.sortRoute = (req, res) => {
  axios
    .get("http://localhost:3000/api/jobs/status")
    .then(function (response) {
      res.render("sort_status", { jobs: response.data });
    })
    .catch((error) => {
      res.send(error);
    });
};

// export showArchive function
// make an axios get request
// render archive page and send jobData to page
// catch any errors
exports.showArchive = (req, res) => {
  axios
    .get("http://localhost:3000/api/jobs/archive")
    .then(function (response) {
      res.render("archive", { jobs: response.data });
    })
    .catch((error) => {
      res.send(error);
    });
};

// export add_job function
// render add_job page
exports.add_job = (req, res) => {
  res.render("add_job");
};

// export update_job function
// make an axios get request with an id as a parameter
// render update_job page and send jobData to page
// catch any errors
exports.update_job = (req, res) => {
  axios
    .get("http://localhost:3000/api/jobs", {
      params: { id: req.query.id },
    })
    .then(function (jobData) {
      res.render("update_job", { job: jobData.data });
    })
    .catch((error) => {
      res.send(error);
    });
};

// export status_update function
// make an axios get request
// render status_update page and send jobData to page
// catch any errors
exports.status_update = (req, res) => {
  axios
    .get("http://localhost:3000/api/jobs/archive")
    .then(function (jobData) {
      res.render("status_update", { job: jobData.data });
    })
    .catch((error) => {
      res.send(error);
    });
};

// export filter_complete function
// make an axios get request
// render filter_Complete page and send jobData to page
// catch any errors
exports.filter_complete = (req, res) => {
  axios
    .get("http://localhost:3000/api/jobs/archive")
    .then(function (jobData) {
      res.render("filter_Complete", { job: jobData.data });
    })
    .catch((error) => {
      res.send(error);
    });
};

// export filter_submitted function
// make an axios get request
// render filter_Submitted page and send jobData to page
// catch any errors
exports.filter_submitted = (req, res) => {
  axios
    .get("http://localhost:3000/api/jobs/archive")
    .then(function (jobData) {
      res.render("filter_Submitted", { job: jobData.data });
    })
    .catch((error) => {
      res.send(error);
    });
};

// export filter_inProgress function
// make an axios get request
// render filter_InProgress page and send jobData to page
// catch any errors
exports.filter_inProgress = (req, res) => {
  axios
    .get("http://localhost:3000/api/jobs/archive")
    .then(function (jobData) {
      res.render("filter_InProgress", { job: jobData.data });
    })
    .catch((error) => {
      res.send(error);
    });
};
