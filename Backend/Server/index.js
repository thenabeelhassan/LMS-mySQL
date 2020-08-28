const http = require("http"); // Server Module
const fs = require("fs"); // Filesystem Module
const url = require("url"); //URL Module
const formidable = require("formidable"); //Email Module
const path = require("path");

const express = require("express");

const multer = require("multer");

const ejs = require("ejs");

const app = express();

const port = 2000;

app.listen(port, () =>
  console.log(`
    Server started on port:${port}
`)
);
