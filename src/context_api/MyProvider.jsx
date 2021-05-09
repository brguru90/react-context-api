import React, { Component } from 'react'
import MyContext from "./MyContext"



export default class MyProvider extends Component {

    state={
        themeType:"light",
    }

    render() {
        return (
           <MyContext.Provider
            value={
                {
                    themeType:this.state.themeType,
                    setTheme:(type)=>this.setState({themeType:type}),
                }
            }
           >
               {this.props.children}
           </MyContext.Provider>
        )
    }
}
