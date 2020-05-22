const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images")
    },
    filename: (req, file, cb) => {
        console.log(file.filename)
        console.log(file.originalname);
        cb(null, Date.now() + file.originalname)
    }
});

const fileFilter = (req, file, cb) => {
    if ((file.mimetype =="image/png") || (file.mimetype =="image/jpg")|| (file.mimetype =="image/jpeg")) {
        cd(null, true)
    } else {
        cd(null, false)
    }
}

module.exports = multer({storage:storage});