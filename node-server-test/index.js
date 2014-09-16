var server = require("./server");
var router = require("./router");
var controller = require("./controller");

var map = {};
map["/"] = controller.home;
map["/home"] = controller.home;
map["/capitalize"] = controller.capitalize;
map["/overflow"] = controller.overflow;

server.start(router.route, map);