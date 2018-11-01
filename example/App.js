/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

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