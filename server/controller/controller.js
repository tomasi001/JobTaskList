// import mongoose model
var jobDB = require("../model/model");

// export function to create and save new job
exports.create = (req, res) => {
  // validate request
  if (!req.body) {
    res.status(400).send({ message: "Content cannot be empty" });
    return;
  }
  // create object to store new job
  // information from request body
  const job = new jobDB({
    job: req.body.job,
    description: req.body.description,
    location: req.body.location,
    priority: req.body.priority,
    status: req.body.status,
    archived: req.body.archived,
  });

  // save job in database
  // redirect to /add-job route
  // catch any errors
  job
    .save(job)
    .then((data) => {
      res.redirect("/add-job");
    })
    .catch((error) => {
      res.status(500).send({
        message:
          error.message || "Some error occurred while trying to create a job",
      });
    });
};

// export function to retrieve and return all jobs ordered by date
// or to return a single job
exports.findByDate = (req, res) => {
  // validate request
  if (req.query.id) {
    // store id from req.query
    const id = req.query.id;
    // find job by id
    // send data if it exist else alert user
    // catch errors
    jobDB
      .findById(id)
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: `User with id: ${id} not found.` });
        } else {
          res.send(data);
        }
      })
      .catch((error) => {
        res
          .status(500)
          .send({ message: `Error retrieving job with id: ${id}` });
      });
  } else {
    // find all jobs
    // sort them by date
    // send information to page
    // catch all errors
    jobDB
      .find({})
      .sort({ _id: -1 })
      .then((job) => {
        res.send(job);
      })
      .catch((error) => {
        res.status(500).send({
          message:
            error.message || "Error occurred while retrieving job information",
        });
      });
  }
};

// create object to be used as object organiser
let status = {
  Submitted: 1,
  "In Progress": 2,
  Complete: 3,
};

// export function to find all jobs and
// sort them by the order created in
// status object
// send information to page
// catch all errors
exports.findByStatus = (req, res) => {
  jobDB
    .find()
    .then((jobs) => {
      jobs.sort((a, b) => status[a.status] - status[b.status]);
      res.send(jobs);
    })
    .catch((error) => {
      res.status(500).send({
        message:
          error.message || "Error occurred while retrieving job information",
      });
    });
};

// export function to find all jobs
// send information to page
// catch all errors
exports.findAll = (req, res) => {
  jobDB
    .find()
    .then((jobs) => {
      res.send(jobs);
    })
    .catch((error) => {
      res.status(500).send({
        message:
          error.message || "Error occurred while retrieving job information",
      });
    });
};

// export function to update job by id
exports.update = (req, res) => {
  // validate request
  if (!req.body) {
    return res.status(400).send({ message: "Update Data cannot be empty" });
  }
  // store ID from req.params
  const id = req.params.id;

  // find job by id and update it
  // if data doesn't exist alert user
  // other wise send data to page
  // catch all errors
  jobDB
    .findByIdAndUpdate(id, req.body)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update job with id: ${id}. User may not have been found`,
        });
      } else {
        res.send(data);
      }
    })
    .catch((error) => {
      res
        .status(500)
        .send({ message: "Error occurred while updating job information" });
    });
};

// export function to delete job by id
exports.delete = (req, res) => {
  // store id from req.params
  const id = req.params.id;

  // find job by id and delete it
  // if there is no data alert the user
  // other wise notify user of success
  // catch all errors
  jobDB
    .findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        req.status(404).send({
          message: `Cannot find job with id: ${id}. Check ID and try again`,
        });
      } else {
        res.send({ message: "job was deleted successfully" });
      }
    })
    .catch((error) => {
      res.status(500).send({ message: "Could not Delete User with id: " + id });
    });
};
