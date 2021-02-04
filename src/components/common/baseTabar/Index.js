import React, { Component } from "react"
import PropTypes from "prop-types"
import BaseIcon from "../baseIcon/Index"
import Scope from "./Index.scss"

export default class Index extends Component {
   //定义属性类型
   static propTypes = {
      tabbars: PropTypes.array.isRequired,
      active: PropTypes.number,
   }

   static defaultProps = {
      active: 0,
   }

   render() {
      const { tabbars, active } = this.props

      return (
         <React.Fragment>
            <ul class={Scope["tabbar-container"]}>
               {tabbars.map((item, index) => (
                  <li class={active === index ? Scope["tabbar-action"] + " " + Scope["tabbar-item"] : Scope["tabbar-item"]} key={index}>
                     <BaseIcon svgName={item.icon} className={Scope["tabbar-iconbase"]} />
                     <div class={Scope["tabbar-itemtitle"]}>{item.name}</div>
                  </li>
               ))}
            </ul>
         </React.Fragment>
      )
   }
}
