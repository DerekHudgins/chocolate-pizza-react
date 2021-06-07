import React, { Component } from 'react'
import IngredientsItems from './IngredientsItems';

export default class Ingredients extends Component {
    render() {
        return (
            <div className = 'Ingredients'>
                < ul >
                    <li><IngredientsItems amount='1 1/2 cups' name='milk' /></li>
                    <li><IngredientsItems amount='1/2 cup' name='marscapone' /></li>

                    <li><IngredientsItems amount='1/2 tsp' name='pink salt' /></li>

                    <li><IngredientsItems amount='1 LB' name='Black Mission Figs' /></li>

                    <li><IngredientsItems amount='1/2 cup' name='brown sugar' /></li>

                    <li><IngredientsItems amount='2-4 tbs' name='water' /></li>
                </ul >
                <ul>
                    <li><IngredientsItems amount='1 1/2 cups' name='heavy cream' /></li>

                    <li><IngredientsItems amount='1/3 cups' name='granulated sugar' /></li>

                    <li><IngredientsItems amount='2' name='egg yolks' /></li>

                    <li><IngredientsItems amount='1' name='lemon, juiced' /></li>

                    <li><IngredientsItems amount='2 tbss' name='butter' /></li>

                    <li><IngredientsItems amount='1 cup' name='honey roasted pecans, roughly chopped' /></li>
                </ul>
            </div>
        )
    }
}
