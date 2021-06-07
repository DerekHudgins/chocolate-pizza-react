import React, { Component } from 'react'
import van from './assets/van-pic.png'

export default class MyFooter extends Component {
    render() {
        return (
            <div className="author">
            <img src={van} alt = 'van' />
            <table>
              <tbody>
                <tr>
                  <td className="td-2">
                  <h1>Vanessa Stevenson</h1>
                  <em><br/>Food Enthusiast, Photography fan. Add a pinch of a raw
                    foodism and that's pretty much who I am.</em>
                </td>
                <td>
                  <button className="share-btn">SHARE RECIPE</button>
                </td>
                </tr>
              </tbody>
            </table>
          </div>
        )
    }
}
