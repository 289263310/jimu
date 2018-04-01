var request = require('request');
var location = process.argv[2];
console.log(location);
if(!location) {
  console.log('查询天气请执行 node app [城市名]');
  location = 'beijing';
}
request({
  method: 'GET',
  uri: 'https://api.seniverse.com/v3/weather/now.json',
  qs: {
    key:'cudgqtexcfceqmuh',
    location: location,
    language: 'zh-Hans',
    unit: 'c'
  }
},function (error, response, body) {
  var obj = JSON.parse(body).results[0];
  console.log('城市: '+obj.location.path);
  console.log('天气: '+obj.now.text);
  console.log('温度: '+obj.now.temperature);
  console.log('时间: '+obj.last_update);
});