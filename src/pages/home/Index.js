/*eslint-disable*/
import React, { Component } from 'react'
import Scss from './Index.scss'

export default class Index extends Component {
  componentDidMount() {
    console.log($(".app").html());
  }
  render() {
    return (
      <div class="app">
        <ul class="tabbar-container">
          <a href="javascript:void(0)">
            <li class="tabbar-item tabbar-action ">
              <i class="tabbar-iconbase byicon-home">
              </i> <div class="tabbar-itemtitle">首页</div>
            </li></a><a href="javascript:void(0)"><li class="tabbar-item"><i class="tabbar-iconbase byicon-classify"></i> <div class="tabbar-itemtitle">分类</div></li></a><a href="javascript:void(0)"><li class="tabbar-item"><i class="tabbar-iconbase byicon-mine"></i> <div class="tabbar-itemtitle">我的</div></li></a></ul>
      </div>
    );
  }
}
