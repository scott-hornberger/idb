import React from "react";
import { IndexLink, Link } from "react-router";

import Greeting from "../components/layout/Greeting";
import GridItem from "../components/layout/GridItem";

var data = require('json!../../data/food.json');
const recipes = data.recipes;


export default class Recipes extends React.Component {
  getGridItems() {
    var i=0;
    const gridItems=[];
    for (var id in recipes) {
      gridItems[i++] = <GridItem key={id} cat="recipes" item={recipes[id]} />
    }
    return gridItems;
  }

  render() {

    return (
      <div id="contatiner">
          <Greeting />

          <div class="container">
            <div class="offset-1 col-lg-1 dropdown">
            <button class="btn btn-sm btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
              Sort Results
              <span class="caret"></span>
            </button>
            <ul class="dropdown-menu">
              <li><a href="#">A-Z</a></li>
              <li><a href="#">Z-A</a></li>
              <li><a href="#">Most Popular</a></li>
            </ul>
            </div>

            <div class="offset-1 col-lg-1 dropdown">
              <button class="btn btn-sm btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
                Filter
                <span class="caret"></span>
              </button>
              <ul class="dropdown-menu">
                <li><a href="#">Crowd Pleaser</a></li>
                <li><a href="#">Vegetarian</a></li>
                <li><a href="#">Great For Sandwiches</a></li>
                <li><a href="#">Quick!</a></li>
              </ul>
            </div>
          </div>

          <div id="grid-results" class="row">
            {this.getGridItems()}
          </div>
      </div>

    );
  }
}
