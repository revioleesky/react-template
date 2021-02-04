/*eslint-disable*/
import React, { Component } from "react";
import Scss from "./Index.scss";
import BaseTabar from "../../components/common/baseTabar/Index";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabbars: [
        { name: "首页", icon: "home", link: "" },
        { name: "分类", icon: "classification", link: "" },
        { name: "我的", icon: "user", link: "" },
      ],
      active: 0,
    };
  }
  componentDidMount() {
    console.log($(".app").html());
  }
  render() {
    return (
      <div class="app">
        <BaseTabar
          tabbars={this.state.tabbars}
          active={this.state.active}
        ></BaseTabar>
      </div>
    );
  }
}
