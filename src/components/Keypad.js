import React from 'react'

export default class Keyboard extends React.Component{
    handleInput = () => console.log('Entering password...')

    render() {
        return (
            <div>
                <input type = 'password'onKeyUp={this.handleInput}/>
            </div>
        )
    }
}
