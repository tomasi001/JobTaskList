var jobDB = require("../model/model");

// create and save new job
exports.create = (req, res) => {
  // validate request
  if (!req.body) {
    res.status(400).send({ message: "Content cannot be empty" });
    return;
  }
  // new job
  const job = new jobDB({
    job: req.body.job,
    description: req.body.description,
    location: req.body.location,
    priority: req.body.priority,
    status: req.body.status,
    archived: req.body.archived,
  });
  // save job in database
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

// retrieve and return all jobs/ single job

exports.findByDate = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;
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

let status = {
  Submitted: 1,
  "In Progress": 2,
  Complete: 3,
};

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

// update job by id
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "Update Data cannot be empty" });
  }

  const id = req.params.id;
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

// delete job by id
exports.delete = (req, res) => {
  const id = req.params.id;

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
