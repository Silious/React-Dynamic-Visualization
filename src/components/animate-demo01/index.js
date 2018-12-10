import React, { Component } from 'react';
import Animate from '../../public/animate';

const data = [
  {
    title: '第1月',
    list: [
      {
        id: '1',  //唯一
        name: '名字1',  //某一行数据的名字
        count: 100, //某一行具体的数据
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
  {
    title: '第2月',
    list: [
      {
        id: '1',  //唯一
        name: '名字1',//某一行数据的名字
        count: 200,//某一行具体的数据
      },
      {
        id: '2',
        name: '名字2',
        count: 500,
      },
      {
        id: '3',
        name: '名字3',
        count: 40,
      },
      {
        id: '4',
        name: '名字4',
        count: 700,
      },
      {
        id: '5',
        name: '名字5',
        count: 300,
      },
    ]
  },
  {
    title: '第1月',
    list: [
      {
        id: '1',  //唯一
        name: '名字1',//某一行数据的名字
        count: 600,//某一行具体的数据
      },
      {
        id: '2',
        name: '名字2',
        count: 100,
      },
      {
        id: '3',
        name: '名字3',
        count: 450,
      },
      {
        id: '4',
        name: '名字4',
        count: 480,
      },
      {
        id: '5',
        name: '名字5',
        count: 40,
      },
    ]
  },
  {
    title: '第1月',
    list: [
      {
        id: '1',  //唯一
        name: '名字1',//某一行数据的名字
        count: 700,//某一行具体的数据
      },
      {
        id: '2',
        name: '名字2',
        count: 300,
      },
      {
        id: '3',
        name: '名字3',
        count: 100,
      },
      {
        id: '4',
        name: '名字4',
        count: 800,
      },
      {
        id: '5',
        name: '名字5',
        count: 200,
      },
    ]
  },
  {
    title: '第1月',
    list: [
      {
        id: '1',  //唯一
        name: '名字1',//某一行数据的名字
        count: 200,//某一行具体的数据
      },
      {
        id: '2',
        name: '名字2',
        count: 400,
      },
      {
        id: '3',
        name: '名字3',
        count: 500,
      },
      {
        id: '4',
        name: '名字4',
        count: 700,
      },
      {
        id: '5',
        name: '名字5',
        count: 100,
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
            count: 290,//某一行具体的数据
          },
          {
            id: '2',
            name: '名字2',
            count: 320,
          },
          {
            id: '3',
            name: '名字3',
            count: 400,
          },
          {
            id: '4',
            name: '名字4',
            count: 230,
          },
          {
            id: '5',
            name: '名字5',
            count: 250,
          },
        ]
      },]
    this.inter = setTimeout(() => {
      this.setState({ data: newData });
    }, 1000);
    const newDatas = [
      {
        title: '第1月',
        list: [
          {
            id: '1',  //唯一
            name: '名字1',//某一行数据的名字
            count: 90,//某一行具体的数据
          },
          {
            id: '2',
            name: '名字2',
            count: 160,
          },
          {
            id: '3',
            name: '名字3',
            count: 500,
          },
          {
            id: '4',
            name: '名字4',
            count: 730,
          },
          {
            id: '5',
            name: '名字5',
            count: 60,
          },
        ]
      },]
    this.inter2 = setTimeout(() => {
      this.setState({ data: newDatas });
    }, 3000);
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
    clearInterval(this.inter2);
  }
}

export default Demo;