import React from 'react';

export default class extends React.Component {
  render() {
    return <div>this is detail page, ID is {this.props.match.params.itemId}</div>;
  }
}

