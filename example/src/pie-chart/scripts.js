export const basePie = `
(function(){
    var map = {
        '芳华': '40%',
        '妖猫传': '20%',
        '机器之血': '18%',
        '心理罪': '15%',
        '寻梦环游记': '5%',
        '其他': '2%'
      };
      var data = [{
        name: '芳华',
        percent: 0.4,
        a: '1'
      }, {
        name: '妖猫传',
        percent: 0.2,
        a: '1'
      }, {
        name: '机器之血',
        percent: 0.18,
        a: '1'
      }, {
        name: '心理罪',
        percent: 0.15,
        a: '1'
      }, {
        name: '寻梦环游记',
        percent: 0.05,
        a: '1'
      }, {
        name: '其他',
        percent: 0.02,
        a: '1'
      }];
       chart = new F2.Chart({
        id: 'chart',
        pixelRatio: window.devicePixelRatio
      });
      chart.source(data, {
        percent: {
          formatter: function formatter(val) {
            return val * 100 + '%';
          }
        }
      });
      chart.legend({
        position: 'right',
        itemFormatter: function itemFormatter(val) {
          return val + '  ' + map[val];
        }
      });
      chart.tooltip(false);
      chart.coord('polar', {
        transposed: true,
        innerRadius: 0.4,
        radius: 0.85
      });
      chart.axis(false);
      chart.interval().position('a*percent').color('name', ['#1890FF', '#13C2C2', '#2FC25B', '#FACC14', '#F04864', '#8543E0']).adjust('stack').style({
        lineWidth: 1,
        stroke: '#fff',
        lineJoin: 'round',
        lineCap: 'round'
      }).animate({
        appear: {
          duration: 1200,
          easing: 'bounceOut'
        }
      });
    
      chart.pieLabel({
        activeShape: true,
        lineStyle:{
            opacity:0
        },
        anchorStyle:{
            opacity:0
        }
      });
      chart.render();
      var frontPlot = chart.get('frontPlot');
      var coord = chart.get('coord'); // 获取坐标系对象
      frontPlot.addShape('sector', {
        attrs: {
          x: coord.center.x,
          y: coord.center.y,
          r: coord.circleRadius * coord.innerRadius * 1.2, // 全半径
          r0: coord.circleRadius * coord.innerRadius,
          fill: '#000',
          opacity: 0.15
        }
      });
      chart.get('canvas').draw();
})();
`;

export const labelPie = `
(function(){
  var data = [{
  amount: 20,
  ratio: 0.1,
  memo: '学习',
  const: 'const'
}, {
  amount: 100,
  ratio: 0.5,
  memo: '睡觉',
  const: 'const'
}, {
  amount: 10,
  ratio: 0.05,
  memo: '吃饭',
  const: 'const'
}, {
  amount: 30,
  ratio: 0.15,
  memo: '讲礼貌',
  const: 'const'
}, {
  amount: 10,
  ratio: 0.05,
  memo: '其他',
  const: 'const'
}, {
  amount: 20,
  ratio: 0.1,
  memo: '运动',
  const: 'const'
}, {
  amount: 10,
  ratio: 0.05,
  memo: '暂无备注',
  const: 'const'
}];

 chart = new F2.Chart({
  id: 'chart',
  pixelRatio: window.devicePixelRatio
});

chart.source(data);
chart.coord('polar', {
  transposed: true,
  innerRadius: 0.4,
  radius: 0.75
});
chart.axis(false);
chart.legend({
  position: 'bottom',
  align: 'center'
});
chart.tooltip(false);
chart.guide().html({
  position: ['50%', '50%'],
  html: '<div style="width: 100px;height: 20px;text-align: center;line-height: 20px;" id="textContent"></div>'
});
// 配置文本饼图
chart.pieLabel({
  activeShape: true,
  sidePadding: 35,
  label2OffsetY: 2,
  label1OffsetY: -2,
  label1: function label1(data) {
    return {
      text: data.memo,
      fill: '#808080'
    };
  },
  label2: function label2(data) {
    return {
      fill: '#000000',
      text: '$' + data.amount.toFixed(2),
      fontWeight: 500,
      fontSize: 10
    };
  }
});
chart.interval().position('const*ratio').color('memo', ['#1890FF', '#13C2C2', '#2FC25B', '#FACC14', '#F04864', '#8543E0', '#3436C7', '#223273']).adjust('stack');
chart.render();

// 绘制内阴影
var frontPlot = chart.get('frontPlot');
var coord = chart.get('coord'); // 获取坐标系对象
frontPlot.addShape('sector', {
  attrs: {
    x: coord.center.x,
    y: coord.center.y,
    r: coord.circleRadius * coord.innerRadius * 1.2, // 全半径
    r0: coord.circleRadius * coord.innerRadius,
    fill: '#000',
    opacity: 0.15
  }
});
chart.get('canvas').draw();
})();
`;
