import React, { Component } from 'react'
import IngredientsItems from './IngredientsItems';

export default class Ingredients extends Component {
    render() {
        return (
            <div className = 'Ingredients'>
                < ul >
                    <IngredientsItems amount='1 1/2 cups' name='milk' />
                    <IngredientsItems amount='1/2 cup' name='marscapone' />

                     <IngredientsItems amount='1/2 tsp' name='pink salt' />  

                     <IngredientsItems amount='1 LB' name='Black Mission Figs' />  

                     <IngredientsItems amount='1/2 cup' name='brown sugar' />  

                     <IngredientsItems amount='2-4 tbs' name='water' />  
                </ul >
                <ul>
                     <IngredientsItems amount='1 1/2 cups' name='heavy cream' />  

                     <IngredientsItems amount='1/3 cups' name='granulated sugar' />  

                     <IngredientsItems amount='2' name='egg yolks' />  

                     <IngredientsItems amount='1' name='lemon, juiced' />  

                     <IngredientsItems amount='2 tbss' name='butter' />  

                     <IngredientsItems amount='1 cup' name='honey roasted pecans, roughly chopped' />  
                </ul>
            </div>
        )
    }
}
