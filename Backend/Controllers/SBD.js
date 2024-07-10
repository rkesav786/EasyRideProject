let ABM = require("../Models/ABM");

module.exports = async (req, res) => {
  let { id } = req.params;
  
  await ABM.findById({ _id: id })
    .then((SD) => {
      let Arr = [SD];

      res.send(Arr);
    })
    .catch((e) => {
      console.log("Error To Fetch Single Data!");
      res.send("Error To Fetch Single Data!");
    });
};
