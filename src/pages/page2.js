import React from 'react';
import Page from "../components/comp2.jsx"
import MyContext from "../context_api/MyContext"


export default function Page2(props) {
    return (
        <MyContext.Consumer>
            {
                context => (
                    <Page {...context} />
                )
            }
        </MyContext.Consumer>
    )
}
