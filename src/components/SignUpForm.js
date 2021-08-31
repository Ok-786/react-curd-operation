import React, { Component } from 'react';
import View from '../views/SignUpForm';

class SignUpForm extends Component {
    
    
    
    render(props) {
        return (
            <View id={this.props.id} firstName={this.props.firstName} lastName={this.props.lastName} email={this.props.email} gender={this.props.gender}  setFirstName={this.props.setFirstName} setLastName={this.props.setLastName} setEmail={this.props.setEmail} setGender={this.props.setGender} encodeImageFileAsURL={this.props.encodeImageFileAsURL} submitFun={this.props.submitFun} updateLocalStorageState={this.props.updateLocalStorageState} setId={this.props.setId}/>
        );
    }
}

export default SignUpForm;
