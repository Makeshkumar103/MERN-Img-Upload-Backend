const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
// const cloudinary = require("cloudinary").v2
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(cors({ origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  })
);


app.get('/', (req,res) =>{
    res.send("Welcome on this page")
})

// Multer Storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Ensure this folder exists in your root
    // cb(null, './public/Images')
  },
  filename: (req, file, cb) => {
    // Save with a unique name using the current timestamp
    // cb(null, Date.now() + path.extname(file.originalname)); 
    cb(null, `${Date.now()}_${file.originalname}`)
  }
});
const upload = multer({ storage });

// Route
// for multiple file use "array" or "fields" instead of single

app.post("/upload", upload.single("image"), async (req, res) => {
  // console.log(req.body)
  console.log(req.file);
  console.log(req.file.filename);
  console.log(req.file.path);

  //  console.log(res.json.message);
  // console.log(res.json.filepath);
  // console.log(res.json.imageUrl);
  try {
     if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded",
      });
    }
    // const result = await cloudinary.uploader.upload(req.file.path);
    res.json({
      message: "Image uploaded successfully",
      filepath: `/uploads/${req.file.filename}`
    });

    res.status(200).json({
      success: true,
      imageUrl: result.secure_url,
    });

    // console.log(res.json.message);
    // console.log(res.json.filepath);
    // console.log(res.json.imageUrl);
    

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Image upload failed",
    });
    console.log(error);
  }
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  
});