//dependent module
var request = require('request');
var cheerio = require('cheerio');
var mkdirp = require('mkdirp');

var fs = require('fs');


//destination url
var url = 'http://www.4399dmw.com/huoying/tupian/257114.html';


//directory for downloaded images
var dir = './images';

mkdirp(dir, function(err) {
    if (err) {
        console.log(err);
    }
});


//issue request for image
request(url, function(err, response, body) {
    if ( !err && response.statusCode === 200 ) {
        var $ = cheerio.load(body);

        $('.pic_play_in img').each(function() {
            var src = $(this).attr('src');

            console.log('Downloading ' + src + '...');

            download(src, dir, Math.floor(Math.random()*100000) + src.substr(-4,4));

            console.log('Downloading done!!!');
        });
    }
});

var download = function(url, dir, filename) {
    request(url).pipe(fs.createWriteStream(dir + '/' + filename));
};
