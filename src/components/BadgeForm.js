import React from 'react';

class BadgeForm extends React.Component {
    state = {};

    // handleChange = e => {
    //     this.setState({
    //         [e.target.name]: e.target.value,
    //     });
    // };

    handleClick = e => {
        console.log('Button was clicked');
        console.log(this.state);
    };

    render() {
        return(
            <div>
                <h1>New attendant</h1>
                <form>
                    <div className="form-group">
                        <label>First name</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="firstName" value={this.props.formValues.firstName}/>
                    </div>
                    <div className="form-group">
                        <label>Last name</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="lastName" value={this.state.lastName}/>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input onChange={this.props.onChange} className="form-control" type="email" name="email" value={this.state.email}/>
                    </div>
                    <div className="form-group">
                        <label>Job title</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="jobTitle" value={this.state.jobTitle}/>
                    </div>
                    <div className="form-group">
                        <label>Twitter</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="twitter" value={this.state.twitter}/>
                    </div>
                    <button type="button" onClick={this.handleClick} className="btn btn-primary">Save</button>
                </form>
            </div>
        );
    }
}

export default BadgeForm;