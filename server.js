const express = require("express");
const bodyParser = require("body-parser");
const app = express();
//const cors = require("cors");
const port = process.env.PORT || 5000;

//app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/customers", (req, res) => {
  res.send([
    {
      id: 1,
      name: "이민호",
      birthday: "990409",
      gender: "남자",
      job: "대학생",
    },
    {
      id: 2,
      name: "김민수",
      birthday: "960409",
      gender: "남자",
      job: "회사원",
    },
    {
      id: 3,

      name: "주현영",
      birthday: "980309",
      gender: "여자",
      job: "대학생",
    },
  ]);
});

app.listen(port, () => console.log(`Listening on port - ${port}`));
