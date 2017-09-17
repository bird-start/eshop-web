import React from 'react';
import Item from '../../mods/item';

const items = [{
  name: 'nike T-shirt',
  price: 100
}, {
  name: 'nike T-shirt',
  price: 100
}, {
  name: 'nike T-shirt',
  price: 100
}];

export default class Home extends React.Component {
  render() {
    return <div>
      <h1>this is home page</h1>
      {items.map((item,index)=> {
        return <Item key={index} data={item}/>
      })}
    </div>;
  }
}
