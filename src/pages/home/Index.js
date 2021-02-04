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
        <div class={Scss['header']}>Hello World!</div>
      </div>
    );
  }
}
