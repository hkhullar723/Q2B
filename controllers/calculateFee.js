const CalculateFee = (req, res) => {
    try {
      const data = req.body;
      let fee = null;
      if (data.status === "student") fee = 10;
      else if (data.status === "staff") fee = 50;
      else if (data.status === "volunteer") fee=0;
      console.log(data.status)
      data.fee = fee;
      
      //send fee
      res.send(data);
    } catch (er) {
      console.log(er)
      res.status(500)
      res.send(`Error occured: ${er}`);
    }
  };
  
  module.exports = CalculateFee;