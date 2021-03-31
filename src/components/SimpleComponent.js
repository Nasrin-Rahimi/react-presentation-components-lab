import React from 'react'

class SimpleComponent extends React.Component{

    constructor(){
        super()
        this.state = {
            mood: 'happy'
        }
    }

    handleClick = () => {
        this.setState(previousState => {
            return{
                mood: previousState.mood === 'happy' ? 'sad' : 'happy'
            }
        })
    }

    render(){
        return(
            <div onClick={this.handleClick}>
                {this.state.mood}
            </div>
        )
    }
}

export default SimpleComponent
