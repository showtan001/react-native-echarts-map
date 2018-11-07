# native-echarts

[![NPM Version](https://img.shields.io/npm/v/native-echarts.svg?style=flat)](https://www.npmjs.org/package/native-echarts)
  [![npm](https://img.shields.io/npm/dm/native-echarts.svg?style=flat)](https://www.npmjs.org/package/native-echarts)
  [![License](http://img.shields.io/npm/l/native-echarts.svg?style=flat)](https://raw.githubusercontent.com/somonus/react-native-echarts/master/LICENSE.md)
  
## install

$ npm install native-echarts --save

## Usage

The Usage is complete consistent with Echarts

component props:

* *option* (object): The option for echarts: [Documentation](http://echarts.baidu.com/option.html#title)。 
* *width* (number): The width of the chart. The default value is the outer container width. 
* *height* (number): The height of the chart. The default value is 400. 


```js
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Echarts from 'native-echarts';

export default class app extends Component {
  render() {
    const option = {
      title: {
          text: 'ECharts demo'
      },
      tooltip: {},
      legend: {
          data:['销量']
      },
      xAxis: {
          data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
      },
      yAxis: {},
      series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
      }]
    };
    return (
      <Echarts option={option} height={300} />
    );
  }
}

AppRegistry.registerComponent('app', () => app);

```

## maps


```js
import React, { Component } from 'react';
import { View } from 'react-native';
import Echarts from 'react-native-echarts-map';

type Props = {};
export default class App extends Component<Props> {
  render() {
    const option = {
      tooltip: {
        trigger: 'item',
        formatter: '{b}'
      },
      series: [{
        name: '中国',
        type: 'map',
        map: 'china',
        selectedMode: 'single',//multiple多选
        itemStyle: {
          normal: {
            label: {
              show: true,
              textStyle: {
                color: "#231816"
              }
            },
            areaStyle: { color: '#B1D0EC' },
            color: '#B1D0EC',
            borderColor: '#dadfde'//区块的边框颜色
          },
          emphasis: {//鼠标hover样式
            label: {
              show: true,
              textStyle: {
                color: '#fa4f04'
              }
            }
          }
        },
        data: [
          { name: '四川', selected: true }
        ]
      }]
    };
    return (
      <View style={{ marginTop: 100 }}>
        <Echarts option={option} height={500} />
      </View>
    );
  }
}

```


## Example

*run demo*

```
cd example
npm install
npm start
```

### IOS

Open the xcode project in the ios directory and click run

screenshots：

![image](https://github.com/somonus/react-native-echarts/blob/master/example/demoIOS.png)
![image](https://user-images.githubusercontent.com/32892347/48114964-13d06480-e29c-11e8-879f-57c2a820f539.png)

### Android

Open the Android project in the android directory with Android Studio and click run.

screenshots：

![image](https://github.com/somonus/react-native-echarts/blob/master/example/demoAndroid.png)

## License

native-echarts is released under the MIT license.
