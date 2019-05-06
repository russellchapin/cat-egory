import React, { Component } from 'react';
import './App.css';
import { CatLoader } from './CatLoader';
import { Categories } from './Categories';
import { CatList } from './CatList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: this.getCategories(),
      currentCategoryKey: "",
      currentCategoryImages: [],
      currentCategoryLength: 0
    };
  }

  getCategories = () => {
    const keys = Object.keys(localStorage);
    const categories = {};

    keys.forEach(key => categories[key] = JSON.parse(localStorage.getItem(key)).length);

    return categories;
  }

  updateCategories = () => {
    this.setState({
      categories: this.getCategories()
    })
  }

  getCategoryImages = (category) => {
    const currentCategoryImages = JSON.parse(localStorage.getItem(category));
    this.setState({
      currentCategoryLength: currentCategoryImages.length,
      currentCategoryKey: category,
      currentCategoryImages
    });
  }

  saveCat = (URL) => {
    const inputVal = document.querySelector("input").value;
    const existingCategory = localStorage.getItem(inputVal);
    const newArray = [];

    if (!inputVal)
    {
      alert("Please input a category name.");
      return;
    }

    if (existingCategory)
    {
      const categoryData = JSON.parse(existingCategory);
      categoryData.push(URL);
      localStorage.setItem(inputVal, JSON.stringify(categoryData));
    } else
    {
      newArray.push(URL);
      localStorage.setItem(inputVal, JSON.stringify(newArray));
    }

    document.querySelector("input").value = "";


    this.updateCategories();

  }

  render() {
    return (
      <div className="container-fluid">
        <h2 className="text-center">Cat-egory</h2>
        <CatLoader saveCat={this.saveCat} />
        <Categories categories={this.state.categories} getCategoryImages={this.getCategoryImages} />
        <CatList category={this.state.currentCategoryImages} length={this.state.currentCategoryLength} />
      </div>
    );
  }
}

export default App;
