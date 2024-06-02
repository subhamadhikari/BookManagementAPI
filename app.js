const express = require("express")
const app = express()


app.use(express.json())
// Middleware to Log the details of the request
app.use((req, res, next) => {
    const { method, url } = req;
  
    // When req-res cycle is finished then print details
    res.on('finish', () => {
      console.log("The request method used: "+method)
      console.log("The requested url: "+url)
      console.log("The status code of response: "+res.statusCode)
    });
  
    next();
  });

// API Routes
const bookRoutes = require("./routes/bookRoute")
app.use("/bookAPI",bookRoutes)


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
  });

app.use((req, res) => {
    res.status(404).json({
        message: "Route not found. Follow bookAPI/books/ url pattern "
    });
  });

// Starting SERVER
const port = 5050

const start = async () => {
    try {
        app.listen(port,console.log(`Server connected at port:${port}`))
    } catch (error) {
        console.log(error)
    }
}

start()




