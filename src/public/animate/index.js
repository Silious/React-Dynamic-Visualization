import React from 'react';
import _ from 'lodash';
import './style/index.less';

class Animate extends React.Component {
  static defaultProps = {
    prefixcls: 'animate',
  }
  constructor(props) {
    super(props);
    this.state = {
      list: this.props.list,
      color: this.props.color,
    }
  }

  componentWillMount() {
    const { list } = this.state;
    list.sort((a, b) => b.count - a.count);
    list.map((item, index) => {
      item.currentIndex = index;
    });
    this.setState({ list });
  }

  componentDidMount() {
    const { updateData } = this.props;
    if (typeof updateData === 'function') {
      updateData();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!(_.isEqual(this.state.list, nextProps.list))) {
      let { list } = nextProps;
      let oldList = this.state.list;
      list.sort((a, b) => b.count - a.count);
      list.map((item, index) => {
        oldList.map((item1) => {
          if (item1.id === item.id) {
            item1.currentIndex = index;
            item1.count = item.count;
          }
        });
      });
      this.setState({ list: oldList })
    }
  }

  // componentDidUpdate() {
  //   const { updateData } = this.props;
  //   console.log(1)
  //   if (typeof updateData === 'function') {
  //     updateData();
  //   }
  // }

  render() {
    const { prefixcls } = this.props;
    return (
      <div className={`${prefixcls}`}>{this.renderAnimate()}</div>
    );
  }

  renderAnimate = () => {
    const { list } = this.state;
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
