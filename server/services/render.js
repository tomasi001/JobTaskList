const axios = require("axios");

exports.homeRoutes = (req, res) => {
  // make get request to users api
  axios
    .get("http://localhost:3000/api/jobs")
    .then(function (response) {
      res.render("index", { jobs: response.data });
    })
    .catch((error) => {
      res.send(error);
    });
};

exports.sortRoute = (req, res) => {
  // make get request to users api
  axios
    .get("http://localhost:3000/api/jobs/status")
    .then(function (response) {
      // console.log(response.data);
      res.render("sort_status", { jobs: response.data });
    })
    .catch((error) => {
      res.send(error);
    });
};

exports.showArchive = (req, res) => {
  // make get request to users api
  axios
    .get("http://localhost:3000/api/jobs/archive")
    .then(function (response) {
      res.render("archive", { jobs: response.data });
    })
    .catch((error) => {
      res.send(error);
    });
};

exports.add_job = (req, res) => {
  res.render("add_job");
};

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
