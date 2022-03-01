import React from "react";

export default class TodoInput extends React.Component {
  constructor(props) {
    super(props);

    this.handleUserInputChange = this.handleUserInputChange.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
    this.handleNewItemClick = this.handleNewItemClick.bind(this);
  }

  handleUserInputChange(e) {
    this.props.onUserInputChange({ input: e.target.value });
  }

  handleSaveClick(e) {
    e.preventDefault();
    this.props.onSaveUserInput();
  }

  handleNewItemClick(e) {
    e.preventDefault();
    this.props.onNewItem();
  }
  
  render() {
    return (
      <form className="row g-3 mb-3">
        <div className="col-auto">
          <input
            type="text"
            value={this.props.value}
            className="form-control"
            onChange={this.handleUserInputChange} />
        </div>
        <div className="col-auto">
          <button
            className="form-control"
            onClick={this.handleSaveClick}>Save</button>
        </div>
        <div className="col-auto">
          <button
            className="form-control"
            onClick={this.handleNewItemClick}>New Item</button>
        </div>
      </form>
    );
  }
}