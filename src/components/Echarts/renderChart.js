// import shine from './map/shine';
import chinaJson from './map/chinaJson';
import echarts from './echarts.min';
import toString from '../../util/toString';

export default function renderChart(props) {
  const height = `${props.height || 400}px`;
  const width = props.width ? `${props.width}px` : 'auto';
  // var myChart = echarts.init(document.getElementById('main'), ${shine}); // 主题暂时不能设置
  return `
    document.getElementById('main').style.height = "${height}";
    document.getElementById('main').style.width = "${width}";
    echarts.registerMap('china', ${JSON.stringify(chinaJson)});
    var myChart = echarts.init(document.getElementById('main'));
    var postEvent = params => {
      var seen = [];
      var paramsString = JSON.stringify(params, function(key, val) {
        if (val != null && typeof val == "object") {
          if (seen.indexOf(val) >= 0) {
            return;
          }
          seen.push(val);
        }
        return val;
      });
      window.postMessage(paramsString);
    }
    myChart.setOption(${toString(props.option)});
    myChart.on('click', postEvent);
    myChart.on('mapselectchanged', postEvent);
  `
}
