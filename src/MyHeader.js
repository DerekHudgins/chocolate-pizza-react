import React, { Component } from 'react'
import logo from './assets/logo.png'
import fb from './assets/fb-icon.png'
import twit from './assets/twit-icon.png'
import gp from './assets/gp-icon.png'
import insta from './assets/insta-icon.png'
import flic from './assets/flic-icon.png'
import pint from './assets/pint-icon.png'
import rss from './assets/rss-icon.png'
import mail from './assets/mail-icon.png'

export default class MyHeader extends Component {
    render() {
        return (
            <header className = 'header'>
                <div className = 'header-left'>
                <img src= {logo} alt = 'logo' className = 'logoo' />
                </div>
                <div className = 'header-far-left'>
                <table>
                    <tbody>
                        <tr>
                            <td className = 'td-1'>
                                <h1 className = 'deli'>Delicious</h1>
                                <em><br/>THE BEST FOOD BLOG ON THE WEB</em>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className = 'header-right'>
                    <div className = 'logo'>
                        <img src= {fb} alt = 'logo'/>
                        <img src= {twit} alt = 'logo'/>
                        <img src= {gp} alt = 'logo'/>
                        <img src= {insta} alt = 'logo'/>
                        <img src= {flic} alt = 'logo'/>
                        <img src= {pint} alt = 'logo'/>
                    </div>
                    <div className = 'logo-Right'>
                        <img src= {rss} alt = 'logo'/>
                        <img src= {mail} alt = 'logo'/>
                    </div>
                </div>
                </div>
            </header>
            
        )
    }
}

