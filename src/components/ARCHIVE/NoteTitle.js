import React from 'react'

class NoteTitle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: 'Untitled',
            titleBool: false
        }
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
    }

    handleChange = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    render() {
        return (
            
                <form onSubmit={this.handleSubmit}>
                    <input type='text' value={this.state.title} onChange={this.handleChange} />
                </form>
            
        )
    }
}

export default NoteTitle