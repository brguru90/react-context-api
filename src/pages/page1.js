import React from 'react';
import Page from "../components/comp1.jsx"
import MyContext from "../context_api/MyContext"


export default function Page1(props) {
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
