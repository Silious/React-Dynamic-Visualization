import React, { Component } from 'react';
import Animate from '../public/animate';

const data = [
  {
    title: '第1月',
    list: [
      {
        id: '1',  //唯一
        name: '名字1',//某一行数据的名字
        count: 100,//某一行具体的数据
      },
      {
        id: '2',
        name: '名字2',
        count: 200,
      },
      {
        id: '3',
        name: '名字3',
        count: 300,
      },
      {
        id: '4',
        name: '名字4',
        count: 400,
      },
      {
        id: '5',
        name: '名字5',
        count: 500,
      },
    ]
  },
  // {
  //   title: '第2月',
  //   list: {
  //     id: '2',
  //     name: '名字2',
  //     count: 200,
  //   },
  // },
  // {
  //   title: '第3月',
  //   list: {
  //     id: '3',
  //     name: '名字3',
  //     count: 300,
  //   },
  // },
  // {
  //   title: '第4月',
  //   list: {
  //     id: '4',
  //     name: '名字4',
  //     count: 400,
  //   },
  // },
  // {
  //   title: '第5月',
  //   list: {
  //     id: '5',
  //     name: '名字5',
  //     count: 500,
  //   },
  // },
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
    this.state = { data: data };
  }
  componentDidMount() {
    const newData = [
      {
        title: '第1月',
        list: [
          {
            id: '1',  //唯一
            name: '名字1',//某一行数据的名字
            count: 300,//某一行具体的数据
          },
          {
            id: '2',
            name: '名字2',
            count: 200,
          },
          {
            id: '3',
            name: '名字3',
            count: 100,
          },
          {
            id: '4',
            name: '名字4',
            count: 250,
          },
          {
            id: '5',
            name: '名字5',
            count: 150,
          },
        ]
      },]
    this.inter = setInterval(() => {
      this.setState({data:newData});
    }, 1000);
  }
  render() {
    return (
      <div>
        <Animate className="Demo" data={this.state.data} color={color} />
      </div>
    );
  }
  componentWillUnmount() {
    clearInterval(this.inter);
  }
}

export default Demo;
