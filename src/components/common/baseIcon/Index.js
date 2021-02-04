import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Index extends Component {
  //定义属性类型
  static propTypes = {
    svgName: PropTypes.string.isRequired,
    className: PropTypes.string,
  };

  render() {
    const { className, svgName } = this.props;

    return (
      <svg
        style={{ fill: "currentColor", overflow: "hidden" }}
        class={className}
        aria-hidden="true"
      >
        <use xlinkHref={`#icon-${svgName}`} />
      </svg>
    );
  }
}
