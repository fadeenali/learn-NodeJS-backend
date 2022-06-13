const express = require("express");
const router = express.Router();

const CoachService = require("../service/Coach_service");

router.post("/", async (req, res) => {
  try {
    const reqobj = req.body;
    const newCoachDataWillBe = await CoachService.addenwCoach(reqobj);
    res.status(200).send({ Message: "new Coach Added" });
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/", async (req, res) => {
  const getCoachData = await CoachService.findCoachData();
  res.status(200).send(getCoachData);
});

router.patch("/:id", async (req, res) => {
  const reqobj = req.body;
  const dataToBeUpdate = CoachService.updateCoachData(reqobj);
  res.status(200).send({Message:"update seccessfull"});
});

router.delete("/:id", async (req, res) => {
  try {
    const dataToBeDelete = await CoachService.deleteCoachData({
      id: req.params.id,
    });
    res.status(200).send(dataToBeDelete);
  } catch (error) {

    res.status(400).send(error)
  }
});

module.exports = router;
