const multer = require("multer")
var path = require("path")
const { dirname } = require("path")
const appDir = dirname(require.main.filename)

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "/temp/public")
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9)
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    )
  },
})

const upload = multer({ storage: storage })
module.exports = upload
