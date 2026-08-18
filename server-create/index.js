let http = require("http");

let server = http.createServer((req, res) => {
  if (req.url == "/") {
    let obj = {
      status: false,
      msg: "server start",
    };
    res.end(JSON.stringify(obj)); //String
  }
  if (req.url == "/news") {
    let obj = {
      status: true,
      data: [
        {
          title: "First News",
          desc: "First News",
        },
        {
          title: "Second News",
          desc: "Second News",
        },
      ],
    };
    res.end(JSON.stringify(obj))
  }
  if (req.url == "/product") {
    let obj = {
      status: true,
      data: [
        {
          title: "First Product",
          desc: "First Product",
        },
        {
          title: "Second Product",
          desc: "Second Product",
        },
      ],
    };
    res.end(JSON.stringify(obj))
  }
});

//server start

server.listen("8000"); //Base Url--http://localhost:8000/

//http://localhost:8000
