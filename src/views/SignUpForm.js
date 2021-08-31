import React from 'react';
import { Paper, Avatar, Typography, TextField, FormLabel, RadioGroup, FormControlLabel, Radio, Button, FormControl } from '@material-ui/core';
import useStyle from '../css/CssScript';

const SignUpForm =(props) => {
    const classes = useStyle();
    
    return (
        <div>
            <form className={classes.root}>
                <Paper elevation={10} className={classes.formStyle} >
                    <Avatar className={classes.avatarBackground}/>
                    <Typography variant='h4' style={{ fontWeight: 'bold' }}>
                        Sign up
                    </Typography>
                    <FormControl >
                        <TextField
                            style={{ marginTop: 20 }}
                            className="fn"
                            name="firstName"
                            variant="outlined"
                            label="First Name"
                            placeholder="Enter First name"
                            value={props.firstName}
                            onChange={props.setFirstName}
                        />
                        <TextField
                            name="lastName"
                            variant="outlined"
                            label="Last Name"
                            placeholder="Enter Last name"
                            value={props.lastName}
                            onChange={props.setLastName}
                        />
                        <TextField
                            name="email"
                            type="email"
                            variant="outlined"
                            label="Email"
                            placeholder="123@gmail.com"
                            
                            value={props.email}
                            onChange={props.setEmail}
                        />
                        <input type='file' name="uploadImg" id="uploadImg"  onChange={props.encodeImageFileAsURL} /> 



                        <FormLabel style={{ marginTop: 15 }}>
                            Choose Gender
                        </FormLabel>
                        <RadioGroup 
                            row={true}
                            name="gender"
                            value={props.gender}
                            onChange={props.setGender}
                            style={{ justifyContent: "center" }}
                        >
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup>


                        <Button
                            variant="contained"
                            color='primary'
                            onMouseDown={props.setId}
                            onClick={function(event){ props.submitFun(event); props.updateLocalStorageState(); }} 
                        >
                            Submit
                        </Button>
                    </FormControl>
                            
                </Paper>
            </form>
        </div>
    );
}

export default SignUpForm;
