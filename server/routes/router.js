const express = require("express");
const route = express.Router();

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
 * @description Sort By Status Root
 * @method GET /sort-status
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
 * @description update job Route
 * @method GET /update-job
 */
route.get("/status-update", services.status_update);

/**
 * @description update job Route
 * @method GET /update-job
 */
route.get("/filter-Complete", services.filter_complete);

/**
 * @description update job Route
 * @method GET /update-job
 */
route.get("/filter-Submitted", services.filter_submitted);

/**
 * @description update job Route
 * @method GET /update-job
 */
route.get("/filter-InProgress", services.filter_inProgress);

// API ROUTES
route.post("/api/jobs", controller.create);
route.get("/api/jobs", controller.findByDate);
route.get("/api/jobs/status", controller.findByStatus);
route.get("/api/jobs/archive", controller.findAll);
route.put("/api/jobs/:id", controller.update);
route.patch("/api/jobs/:id", controller.update);
route.delete("/api/jobs/:id", controller.delete);

module.exports = route;
