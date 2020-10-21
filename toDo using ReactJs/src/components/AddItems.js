import React, { Component } from 'react';


class Additems extends Component {
    static propTypes = {}
    state = {
        value: '',
    }

    handleChange = event => {
        this.setState({ value: event.target.value });
    }

    addItem = event => {
        event.preventDefault();
        this.props.onAddItem(this.state.value);
    };
    emptyInput = () => {
        return this.state.value === ''
    }


    render() {
        return (
            <div className="App" >
                <div>
                    <form onSubmit={this.addItem}>
                        <input
                            className='search-contacts'
                            type='text'
                            placeholder='Search Contacts'
                            value={this.state.query}
                            onChange={this.handleChange}
                        />
                        <button disabled={this.emptyInput()} > Add </button>
                    </form>

                </div>
            </div>
        );
    }
}
export default Additems;
