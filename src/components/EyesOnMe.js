import React from 'react'

export default class Keyboard extends React.Component{
    onFocus = () => console.log('Good!')

    onBlur = () => console.log('Hey! Eyes on me!')

    render() {
        return (
            <div>
                <button onFocus = {this.onClick} onBlur={this.onBlur}/>
            </div>
        )
    }
}
