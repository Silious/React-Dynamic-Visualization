import React from 'react';
import './style/index.css';

class Animate extends React.Component {
  static defaultProps = {
    prefixcls: 'animate',
  }
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      color: this.props.color,
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ data: nextProps.data });
  }
  render() {
    // const { data, color } = this.state
    const { prefixcls } = this.props;
    return (
      <div className={`${prefixcls}`}>{this.renderAnimate()}</div>
    );
  }

  renderAnimate = () => {
    const { data } = this.state;
    const { list } = data[0];
    const { prefixcls } = this.props;
    let animate = [];
    const newList = this.orderData(list);
    console.log(newList)
    newList.map((item, index) => {
        animate.push(
          <div
            className={`${prefixcls}-item`}
            key={item.id}
            style={{ top: index * 30 }}
          >
            <div className={`${prefixcls}-item-name`}>{item.name}</div>
            <div className={`${prefixcls}-item-right`}>
              <div
                className={`${prefixcls}-item-color`}
                style={{ background: this.getColor(item), width: item.count }}
              >
                <span>{item.name}</span>
              </div>
              <div className={`${prefixcls}-item-count`}>
                <span>{item.count}</span>
              </div>
            </div>
          </div>
        );
    });
    return animate;
  }

  // 匹配颜色
  getColor = (item) => {
    const id = item.id;
    const { color } = this.state;
    let myColor;
    color.map(num => {
      if (num.id === id) myColor = num.color;
    });
    return myColor;
  }

  // 排序
  orderData = (list) => {
    for (let i = 0; i < list.length - 1; i++) {
      let k;
      for (let j = i + 1; j < list.length; j++) {
        if (list[i].count < list[j].count) {
          k = list[j];
          list[j] = list[i];
          list[i] = k;
        }
      }
    }
    return list;
  }
}

export default Animate;
