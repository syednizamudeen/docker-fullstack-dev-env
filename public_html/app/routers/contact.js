const express = require("express");
const contactController = require("../controllers/contactController");
const auth = require("../middleware/auth");

const router = express.Router();

router
  .route("/contacts")
  .get(auth, contactController.index)
  .post(auth, contactController.new);
router
  .route("/contacts/:contact_id")
  .get(auth, contactController.view)
  .patch(auth, contactController.update)
  .put(auth, contactController.update)
  .delete(auth, contactController.delete);

module.exports = router;
