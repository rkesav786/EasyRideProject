const AB = require("../Models/ABM");

module.exports = (req, res) => {
    const { From, To, Date } = req.body;
    console.log("Received query parameters:", { From, To, Date });

    AB.find({ From:From,
         To:To,
          Date:Date })
        .then((buses) => {
            res.status(200).json(buses); // Send the data as JSON response with 200 status code
            console.log("Data retrieved:", buses); // Improved log message
        })
        .catch((error) => {
            res.status(500).json({ message: "Error retrieving data from the database", error: error.message }); // Send error message as JSON
            console.log("Error retrieving data from database:", error); // Improved log message
        });
};
