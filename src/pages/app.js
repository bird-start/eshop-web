import React from 'react';
import {connect} from 'react-redux';
import Item from '../mods/item';
import {showAllItems} from '../actions/';

class App extends React.Component {

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(showAllItems());
  }

  render() {
    let {items} = this.props;
    return <div>
      <h1>this is home page</h1>
      {items && items.map((item, index) => {
        return (<Item data={item} key={index}/>)
      })}
    </div>;
  }
}


function select(state) {
  return {
    items: state.showAllItems.items
  }
}

export default connect(select)(App);
