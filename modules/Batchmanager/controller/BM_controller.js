const express = require("express");
const router = express.Router();
const BM_service = require("../service/BM_service");

router.post("/", async (req, res) => {
  const reqobj = req.body;
  const DataToBeSave = await BM_service.addnewBM(reqobj);
  res.status(200).send({ message: "new BM is added" });
});

router.get("/", async (req, res) => {
  const findBmData = await BM_service.getBmData();
  res.status(200).send(findBmData);
});

router.patch("/:id", async (req, res) => {
  const reqobj = req.body;
  const updateBmData = await BM_service.updateBmData(reqobj);
  res.status(200).send(updateBmData);
});

router.delete("/:id", async (req, res) => {
  const DataToBeDelete = await BM_service.deleteBmData({
    _id: req.params.id,
  });
  res.status(200).send(DataToBeDelete);
});

module.exports = router;
