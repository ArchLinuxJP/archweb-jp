var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var article = require('./routes/article');
var news = require('./routes/news');
var download = require('./routes/download');
var search = require('./routes/search');
var package = require('./routes/package');
var files = require('./routes/files');
var simple = require('./routes/simple');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

app.use('/news/:news([0-9a-zA-Z\-]+)', article);
app.use('/news', news);

app.use('/download', download);

app.use('/packages/:repo([0-9a-zA-Z\-]+)/:arch([0-9a-zA-Z\_]+)/:pkgname([0-9a-zA-Z\@\.\_\+\-]+)/files', files);
app.use('/packages/:repo([0-9a-zA-Z\-]+)/:arch([0-9a-zA-Z\_]+)/:pkgname([0-9a-zA-Z\@\.\_\+\-]+)', package);
app.use('/packages', search);

app.use('/about', simple);
app.use('/donate', simple);
app.use('/svn', simple);
app.use('/people', simple);
app.use('/art', simple);
app.use('/feeds', simple);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
	app.use(function(err, req, res, next) {
		res.status(err.status || 500);
		if (err.status == 404) {
			var stitle = "404 - Not Found";
		}else{
			var stitle = "500 - Internal Server Error";
		}
		res.render('error', {
			title: stitle,
			error: err
		});
	});
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
	res.status(err.status || 500);
	if (err.status == 404) {
		var stitle = "404 - Not Found";
		err.stack = "申し訳ありません。あなたがリクエストしたページは存在しません。";
	}else{
		var stitle = "500 - Internal Server Error";
	}
	res.render('error', {
		title: stitle,
		error: err
	});
});


module.exports = app;
