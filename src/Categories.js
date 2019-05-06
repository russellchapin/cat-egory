import React from 'react'

export class Categories extends React.Component {

  render() {
    const categories = this.props.categories;
    return (
      <div className="col-12 mx-auto">
        <div className="col-12 col-sm-8 col-md-6 col-lg-4 ml-2 mr-2 mt-4 mx-auto">
          <div className="bg-white border rounded pt-3 pr-3 pb-3 pl-3">
            {Object.keys(categories).map((key) => <div key={key} onClick={() => this.props.getCategoryImages(key)}><div className="text-left">{key} {categories[key]}</div></div> )}
          </div>
        </div>
      </div>
    )
  }
}
