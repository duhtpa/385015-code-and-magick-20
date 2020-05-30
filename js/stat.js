'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var COLUMN_GAP = 40;
var HEADER_HEIGHT = 50;
var BAR_WIDTH = 40;
var barHeight = 150;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
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

function randomInteger(min, max) {
  var rand = min + Math.random() * (max - min + 1);
  return Math.round(rand);
}

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    var barTime = (barHeight * times[i]) / maxTime;

    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + COLUMN_GAP + (BAR_WIDTH + COLUMN_GAP + GAP) * i, CLOUD_Y + GAP * 2 + HEADER_HEIGHT + barHeight + GAP + FONT_GAP);

    ctx.fillStyle = 'hsl(240, ' + randomInteger(1, 100) + '%, 70%)';

    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }

    ctx.fillRect(CLOUD_X + COLUMN_GAP + (BAR_WIDTH + COLUMN_GAP + GAP) * i, CLOUD_Y + GAP * 2.5 + HEADER_HEIGHT + barHeight, BAR_WIDTH, -barTime);

    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), CLOUD_X + COLUMN_GAP + (BAR_WIDTH + COLUMN_GAP + GAP) * i, CLOUD_Y + HEADER_HEIGHT + (barHeight - barTime + GAP * 0.5) + FONT_GAP);
  }

  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP * 2, CLOUD_Y + GAP * 2 + FONT_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP * 2, CLOUD_Y + GAP * 2 + FONT_GAP + FONT_GAP);
};
