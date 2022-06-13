const express = require("express");
const router = express.Router();
const BM_service = require("../service/BM_service");

router.post("/", async (req, res) => {
  const reqobj = req.body;
  const DataToBeSave = await BM_service.addnewBM(reqobj);
  res.status(200).send({ message: "new BM is added" });
});

module.exports = router;
