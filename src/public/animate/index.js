import React from 'react';
import _ from 'lodash';
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

  componentWillMount() {
    const { data } = this.state;
    data[0].list.sort((a, b) => b.count - a.count);
    data[0].list.map((item, index) => {
      item.currentIndex = index;
    });
    this.setState({ data });
  }

  componentWillReceiveProps(nextProps) {
    if (!(_.isEqual(this.state.data, nextProps.data))) {
      let { data } = nextProps;
      let oldData = this.state.data;
      let newList = data[0].list;
      newList.sort((a, b) => b.count - a.count);
      newList.map((item, index) => {
        oldData[0].list.map((item1) => {
          if (item1.id === item.id) {
            item1.currentIndex = index;
            item1.count = item.count;
          }
        });
      });
      this.setState({ data: oldData })
    }
  }

  render() {
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
    list.map((item, index) => {
      animate.push(
        <div
          className={`${prefixcls}-item`}
          key={item.id}
          style={{ top: item.currentIndex * 30 }}
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

}

export default Animate;
