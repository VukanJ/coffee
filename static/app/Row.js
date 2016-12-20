import React, {Component} from 'react';
import AddButton from './AddButton.js';
import { Icon } from './Icon.js';

export default class Row extends Component {
  constructor(props, context){
    super(props, context);
  }

  modifyDatabase(db_entry){
    db_entry.id = this.props.userId;
    this.props.modifyDatabase(db_entry);
  }

  render(){
    const buttons = Object.keys(this.props.products).map((name, i) => {
      const product = this.props.products[name];
      const addButton = <AddButton product={product} key={product.name} name={this.props.name}
                         modifyDatabase={(cur_consumption) => this.modifyDatabase(cur_consumption)}/>
      return addButton;
      });
    const mugs = this.props.consume ?
      this.props.consume.map((product, i) => (
        <Icon key={i} product={this.props.products[product]} size={24} />)
      ) :
      '';
    return <div className="row" style={this.props.style}>
      <div className="col-xs-7" style={{marginTop: '6px', fontSize: '24px'}}>
        {this.props.name}<br />
        {mugs}
      </div>
      <div className="col-xs-5">
        <div className="btn-toolbar" style={{float: "right"}}>
          {buttons}
        </div>
      </div>
    </div>
  }
}
