import React, { Component } from 'react';
import Animate from '../../public/animate';

const sourceData = [
  {
    title: '第1月',
    list: [
      {
        id: '1',  //唯一
        name: 'Oppo',  //某一行数据的名字
        count: 100, //某一行具体的数据
      },
      {
        id: '2',
        name: 'xiaomi',
        count: 200,
      },
      {
        id: '3',
        name: 'Iphone',
        count: 300,
      },
      {
        id: '4',
        name: 'Huawei',
        count: 400,
      },
      {
        id: '5',
        name: 'Vivo',
        count: 500,
      },
    ]
  },
  {
    title: '第2月',
    list: [
      {
        id: '1',  //唯一
        name: 'Oppo',//某一行数据的名字
        count: 200,//某一行具体的数据
      },
      {
        id: '2',
        name: 'xiaomi',
        count: 500,
      },
      {
        id: '3',
        name: 'Iphone',
        count: 140,
      },
      {
        id: '4',
        name: 'Huawei',
        count: 700,
      },
      {
        id: '5',
        name: 'Vivo',
        count: 300,
      },
    ]
  },
  {
    title: '第3月',
    list: [
      {
        id: '1',  //唯一
        name: 'Oppo',//某一行数据的名字
        count: 600,//某一行具体的数据
      },
      {
        id: '2',
        name: 'xiaomi',
        count: 100,
      },
      {
        id: '3',
        name: 'Iphone',
        count: 450,
      },
      {
        id: '4',
        name: 'Huawei',
        count: 480,
      },
      {
        id: '5',
        name: 'Vivo',
        count: 40,
      },
    ]
  },
  {
    title: '第4月',
    list: [
      {
        id: '1',  //唯一
        name: 'Oppo',//某一行数据的名字
        count: 700,//某一行具体的数据
      },
      {
        id: '2',
        name: 'xiaomi',
        count: 300,
      },
      {
        id: '3',
        name: 'Iphone',
        count: 100,
      },
      {
        id: '4',
        name: 'Huawei',
        count: 800,
      },
      {
        id: '5',
        name: 'Vivo',
        count: 200,
      },
    ]
  },
  {
    title: '第5月',
    list: [
      {
        id: '1',  //唯一
        name: 'Oppo',//某一行数据的名字
        count: 200,//某一行具体的数据
      },
      {
        id: '2',
        name: 'xiaomi',
        count: 400,
      },
      {
        id: '3',
        name: 'Iphone',
        count: 500,
      },
      {
        id: '4',
        name: 'Huawei',
        count: 700,
      },
      {
        id: '5',
        name: 'Vivo',
        count: 100,
      },
    ]
  },
];
const color = [
  {
    id: '1',
    color: 'red',
  },
  {
    id: '2',
    color: 'yellow',
  },
  {
    id: '3',
    color: 'blue',
  },
  {
    id: '4',
    color: 'green',
  },
  {
    id: '5',
    color: 'black',
  },
];

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = { data: sourceData[0], currentIndex: 0 };
  }

  componentDidMount() {
    sourceData.map((item, index) => {
      setTimeout(() => {
        this.setState({ data: item });
      }, (index + index) * 1000);
    })
  }

  render() {
    return (
      <div>
        <Animate className="Demo" list={this.state.data.list} color={color} />
      </div>
    );
  }

}

export default Demo;
