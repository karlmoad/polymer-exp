/**
 * Created by moadkj on 10/25/16.
 */
'use strict';

var Http = require('http');
var Express = require('express');
var cors = require('cors');

var App = Express();

var Server = Http.createServer(App);

App.use(cors());
App.options("*",cors());
App.use('/', Express.static(__dirname + '/build/unbundled',{index: 'index.html'}));


Server.listen(32000, function () {
    console.log('Server Listening on %s:%d', this.address().address, this.address().port);
    /* eslint-disable no-console */
});