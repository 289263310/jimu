var express = require('express');
var swig = require('swig');
var fs = require('fs');
var path = require('path');
var app = express();
var stylus = require('stylus');
var str = fs.readFileSync('./style.styl', 'utf8');

stylus.render(str, function(err, css){
    if (err) throw err;
    fs.writeFileSync('./public/css/style.css', css, 'utf8');
});
app.use('/public', express.static(__dirname + '/public'));
swig.setDefaults({
  cache: false
})
app.set('view cache', false);
app.set('views','./');
app.set('view engine','html');
app.engine('html', swig.renderFile);
app.listen(4000, function() {
    console.log('started!');
});
app.get('/',function(req, res){
    res.render('index',{
        title: '积木盒子jimu.com',
        banner: 'public/images/banner_bf6c459.png',
        logo: 'public/images/logo_d21d145.png',
        headline: '下载积木盒子APP',
        links: [{
            img: 'public/images/protect_cb5274f.png',
            name: '保护私密数据'
        }, {
            img: 'public/images/coupon_a9db8d1.png',
            name: '领券福利'
        }, {
            img: 'public/images/simple_0a206cc.png',
            name: '简约+透明'
        }, {
            img: 'public/images/data_263373d.png',
            name: '数据详实'
        }],
        download: [{
            link: 'https://itunes.apple.com/cn/app/ji-mu-he-zi/id790276804?ls=1&mt=8',
            name: 'iOS 版下载'
        }, {
            link: 'http://app-download.jimubox.com/JimuboxMobile.5.8.4.apk',
            name: 'Android 版下载'
        }]
    })
})