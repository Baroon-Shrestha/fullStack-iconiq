const express = require("express");

const {
  getAllMessages,
  getMessagesBySession,
  getAllSessions,
} = require("../Controllers/ChatController");
const { verifyAdmin } = require("../MIddlewares/verifyAdmin");

const router = express.Router();

router.get("/messages", verifyAdmin, getAllMessages);
router.get("/session/:sessionId", getMessagesBySession);
router.get("/users", verifyAdmin, getAllSessions);

module.exports = router;
