import React, { Component } from 'react'
import { Link } from "react-router-dom"
import "./style.css"



export default class page1 extends Component {

    state = {
        themeType: "white"
    }
    componentDidMount() {
        this.setState({ themeType: this.props.themeType })
    }



    render() {
        return (
            <div className={`page ${this.state.themeType}`}>
                <h1>page2</h1>
                <Link to="" >Page1</Link><br />
                <b>Current theme</b>:{this.props.themeType}

                <form>
                    <h2>Select theme</h2>
                    <label>
                        Dark:
                        <input type="radio" value="dark" name="theme" onChange={e => this.setState({ themeType: e.target.value }, () => this.props.setTheme(e.target.value))} />
                    </label>
                    <label>
                        Light:
                        <input type="radio" value="light" name="theme" onChange={e => this.setState({ themeType: e.target.value }, () => this.props.setTheme(e.target.value))} />
                    </label>

                </form>

            </div>
        )
    }
}
