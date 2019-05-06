import React from 'react'
import { fetchRandomCat } from './catApi'

export class CatLoader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.getNewCat();
  }

  componentDidUpdate() {
    document.querySelector("button").innerHTML = "Next";
  }

  getNewCat = async () => {
    document.querySelector("button").innerHTML = `<div class="spinner-border spinner-border-sm" role="status"><span class="sr-only">Loading...</span></div>`;
    const URL = await fetchRandomCat();

    this.setState({
      URL
    });
  }

  handleClick = () => {
    this.props.saveCat(this.state.URL)
  }

  render() {
    return (
      <div className="col-12 mx-auto">
        <div className="row justify-content-center img-container">
          <img src={this.state.URL} alt="A random cat." />
        </div>

        <div className="col-12 col-sm-8 col-md-6 col-lg-4 mx-auto mt-4 mb-4">
          <button className="btn btn-primary float-right ml-2 mb-2" onClick={this.getNewCat}>Next</button>
          <div className="input-group">
            <input type="text" className="form-control"></input>
            <button className="btn btn-primary ml-2" onClick={this.handleClick}>Save</button>
          </div>

        </div>
      </div>
    )
  }
}
