const express = require("express");
const router = express.Router();

const Auto = require("../model/auto");

router.get("/listaAutos", async (req, res) => {
  const autos = await Auto.find();
  res.send(autos);
});

router.post("/", async (req, res) => {
  const { marca, modelo, color, precio } = req.body;

  const auto = new Auto({ marca, modelo, color, precio });
  const result = await auto.save();
  res.status(200).send(result);
});

router.put("/:id", async(req, res) => {
  let id = req.params.id;
  const result = await Auto.findByIdAndUpdate(id, req.body, {new: true});
  if(!result){
    return res.status(500).send(result);
  }
  res.status(200).send(result);
})


router.delete("/:id", async(req, res) => {

  let id = req.params.id;
  const result = await Auto.findByIdAndDelete(id);

  if (!result) {
    return res.status(500).send(result);
  }
  res.status(200).send(result);

})
module.exports = router;
