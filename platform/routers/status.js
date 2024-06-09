const express = require("express");

const { body } = require("express-validator");

const isAuth = require("../middleware/is-auth");

const statusController = require("../controllers/status");

const router = express.Router();

router.get("/getStatus", isAuth, statusController.getStatus);

router.patch(
  "/updateStatus",
  isAuth,
  [body("status").trim().notEmpty()],
  statusController.updateStatus,
);

module.exports = router;
