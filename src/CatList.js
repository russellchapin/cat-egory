import React from 'react'

export class CatList extends React.Component {

  render() {
    const category = this.props.category;
    const justify = this.props.length > 1 ? "justify-content-start" : "justify-content-center"
    return (
      <div className="col-12 ml-2 mr-2 mt-4 mb-4 mx-auto">
        <div className={`row ${justify} align-items-center`}>
          {category.map((URL, index) => <div key={URL} className="col-6 image-cropper mb-4"><img className="image-fluid" src={URL} alt={index} /></div>)}
        </div>
      </div>
    );
  }
}
