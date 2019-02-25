const lineUpdate = `
F2.Animate.registerAnimation('lineUpdate', function(updateShape, animateCfg) {
    var cacheShape = updateShape.get('cacheShape'); // 该动画 shape 的前一个状态
    var cacheAttrs = cacheShape.attrs; // 上一个 shape 属性
    var geomType = cacheShape.geomType; // 图形类型

    var oldPoints = cacheAttrs.points; // 上一个状态的关键点
    var newPoints = updateShape.attr('points'); // 当前 shape 的关键点

    var oldLength = oldPoints.length;
    var newLength = newPoints.length;
    var deltaLength = geomType === 'area' ? (oldLength - newLength) / 2 : oldLength - newLength;

    if (deltaLength > 0) {
      var firstPoint = newPoints[0];
      var lastPoint = newPoints[newPoints.length - 1];

      for (var i = 0; i < deltaLength; i++) {
        newPoints.splice(0, 0, firstPoint);
      }

      if (geomType === 'area') {
        for (var j = 0; j < deltaLength; j++) {
          newPoints.push(lastPoint);
        }
      }
    } else {
      deltaLength = Math.abs(deltaLength);
      var firstPoint1 = oldPoints[0];
      var lastPoint1 = oldPoints[oldPoints.length - 1];

      for (var k = 0; k < deltaLength; k++) {
        oldPoints.splice(0, 0, firstPoint1);
      }

      if (geomType === 'area') {
        for (var p = 0; p < deltaLength; p++) {
          oldPoints.push(lastPoint1);
        }
      }

      cacheAttrs.points = oldPoints;
    }
    updateShape.attr(cacheAttrs);
    updateShape.animate().to({
      attrs: {
        points: newPoints
      },
      duration: 800,
      easing: animateCfg.easing
    });
  });
`;

const base = data => `
chart =  new F2.Chart({
    id: 'chart',
    pixelRatio: window.devicePixelRatio,
  });
chart.source(${JSON.stringify(data)}, {
value: {
  tickCount: 5,
  min: 0
},
date: {
  type: 'timeCat',
  range: [0, 1],
  tickCount: 3
}
});
chart.tooltip({
custom: true,
showXTip: true,
showYTip: true,
snap: true,
onChange: function(obj) {
    window.ReactNativeWebView.postMessage(stringify(obj))
},
crosshairsType: 'xy',
crosshairsStyle: {
  lineDash: [2]
}
});
chart.axis('date', {
label: function label(text, index, total) {
  var textCfg = {};
  if (index === 0) {
    textCfg.textAlign = 'left';
  } else if (index === total - 1) {
    textCfg.textAlign = 'right';
  }
  return textCfg;
}
});
`;
export const baseChart = data => `(function(){
    ${base(data)}
  chart.line().position('date*value');
  chart.render();
})();
`;

export const dynamicChart = data => `
(function(){
    ${lineUpdate}
    ${base(data)}
      chart.line({
        sortable: false
      }).position('date*value').shape('smooth').animate({
        update: {
          animation: 'lineUpdate'
        }
      });
      chart.area({
        sortable: false
      }).position('date*value').shape('smooth').animate({
        update: {
          animation: 'lineUpdate'
        }
      });
      chart.render();

})();
`;
