import React from 'react';
import {Link} from 'react-router-dom';
import './item.less';

export default class Item extends React.Component {
  render() {
    let {id, name, price} = this.props.data;
    return <div className="item">
      <div><Link to={`/items/${id}`}>{name}</Link></div>
      &yen; {price}.00
    </div>;
  }
}

