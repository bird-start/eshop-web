import React from 'react';
import './item.less';

export default class Item extends React.Component {
  render() {

    let {name, price} = this.props.data;

    return <div className="item">
      <div>{name}</div>
      &yen; {price}.00
    </div>;
  }
}

