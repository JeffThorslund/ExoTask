import React from 'react'
import './Item.css'


import { FaRegCheckCircle, FaRegCircle  } from 'react-icons/fa';


class ItemForm extends React.Component {
    constructor(props) {
        super()
        this.state = {
            checked: true,
            text: ''
        }
    }
    //includes checkbox, item name, leader assignment 
    //style={{textDecoration:this.state.checked?'text-decoration':'block'}}

    handleChange=(e)=>{
        e.preventDefault()
        this.setState({
            [e.target.name] : e.target.value 
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        this.props.handleSubmit(this.state.text)
        this.setState({
            text: ''
        })

    }


    render() {
        return (
            <div>
                <div className='container border p-3'>
                    <div className='row'>
                        <div className='col-10 align-bottom'>
                            <form onSubmit = {this.handleSubmit}>
                                <div className='form-group'>
                                    <input className='form-control' type='text' onChange={this.handleChange} name='text' value={this.state.text} />
                                </div>
                            </form>

                        </div>

                        

                        <div className='col-1 align-bottom'>
                            <FaRegCheckCircle
                                style = {{display: this.state.checked ? 'none' : 'none'}}
                            />

                            <FaRegCircle
                                style = {{display: !this.state.checked ? 'none' : 'none'}}
                            />
                        </div>

                        

                    </div>
                </div>
            </div>
        )
    }
}

export default ItemForm