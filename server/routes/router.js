// create variables to store requirements
const express = require("express");
const route = express.Router();

// import render handler file
// import controller file
const services = require("../services/render");
const controller = require("../controller/controller");

/**
 * @description Root Route
 * @method GET /
 */
route.get("/", services.homeRoutes);

/**
 * @description Sort By Status Root
 * @method GET /sort-status
 */
route.get("/sort-status", services.sortRoute);

/**
 * @description archive Root
 * @method GET /archive
 */
route.get("/archive", services.showArchive);

/**
 * @description add job Route
 * @method GET /add-job
 */
route.get("/add-job", services.add_job);

/**
 * @description update job Route
 * @method GET /update-job
 */
route.get("/update-job", services.update_job);

/**
 * @description status update Route
 * @method GET /status-update
 */
route.get("/status-update", services.status_update);

/**
 * @description filter complete Route
 * @method GET /filter-Complete
 */
route.get("/filter-Complete", services.filter_complete);

/**
 * @description filter submitted Route
 * @method GET /filter-Submitted
 */
route.get("/filter-Submitted", services.filter_submitted);

/**
 * @description filter In Progress Route
 * @method GET /filter-InProgress
 */
route.get("/filter-InProgress", services.filter_inProgress);

// Create API routes to trigger respective actions in the controller file
route.post("/api/jobs", controller.create);
route.get("/api/jobs", controller.findByDate);
route.get("/api/jobs/status", controller.findByStatus);
route.get("/api/jobs/archive", controller.findAll);
route.put("/api/jobs/:id", controller.update);
route.patch("/api/jobs/:id", controller.update);
route.delete("/api/jobs/:id", controller.delete);

// export module
module.exports = route;
