'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var LABEL_X = CLOUD_X + GAP * 2;
var LABEL_Y = CLOUD_Y + GAP * 3;
var HISTOGRAM_X = CLOUD_X + GAP * 3;
var HISTOGRAM_Y = LABEL_Y + GAP * 5;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_GAP = 50;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderText = function (ctx, text, x, y, color, font) {
  ctx.fillStyle = color ? color : '#000000';
  ctx.font = font ? font : '16px PT Mono';
  ctx.fillText(text, x, y);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#ffffff');

  renderText(ctx, 'Ура вы победили!', LABEL_X, LABEL_Y);
  renderText(ctx, 'Список результатов:', LABEL_X, LABEL_Y + GAP * 2);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    var currentBarHeight = (BAR_HEIGHT * times[i]) / maxTime;
    var barMargin = BAR_HEIGHT - currentBarHeight;
    var x = HISTOGRAM_X + ((BAR_GAP + BAR_WIDTH) * i);
    renderText(ctx, Math.floor(times[i]), x, HISTOGRAM_Y + barMargin);
    ctx.fillStyle = names[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'hsl(240,' + Math.floor(Math.random() * 100) + '%, 50%)';
    ctx.fillRect(x, HISTOGRAM_Y + GAP + barMargin, BAR_WIDTH, currentBarHeight);
    renderText(ctx, names[i], x, HISTOGRAM_Y + BAR_HEIGHT + GAP * 3);
  }
};
