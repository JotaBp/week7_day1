import React, { Component } from 'react'
import LegalAdvice from "./LegalAdvice"

class Footer extends Component {

    render() {
        return (
            <footer>
                <p>Síguenos en nuestras redes! etc etc</p>
                <LegalAdvice year={this.props.year} />
            </footer>
        )
    }
}


export default Footer