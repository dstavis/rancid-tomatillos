import React from "react";

const ErrorPage = (props) => {
    const {message} = props

    return (
        <h2>{message}</h2>
    )
}

export default ErrorPage