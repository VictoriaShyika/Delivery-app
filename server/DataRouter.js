const express = require("express");
const DataRouter = express.Router();

const Data = require("./Data");

DataRouter.route("/data").get( async function (req, res) {
  try {
    const deliveryData = await Data.find();

    return res.status(200).json({
      success: true,
      count: deliveryData.length,
      deliveryData: deliveryData,
  })} catch(err) {
      console.log(err);
      res.status(500).json({ error: 'server error' });
    }
  })
// router.get('/ads', async (req,res,next)=>{
//   try{
//     const ads = await Ads.find();

//     return res.status(200).json({
//       success: true,
//       count: ads.length,
//       data: ads,
//     });
//   } catch(err) {
//     console.log(err);
//     res.status(500).json({ error: 'server error' });
//   }
// });


module.exports = DataRouter;
