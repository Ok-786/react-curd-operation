import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import SignUpForm from '../components/SignUpForm';
import Tabel from '../components/Table';
import useStyles from '../css/CssScript';

const RegForm =(props) => {
    const classes = useStyles();
    
    return (
        <div >
            <Grid container className={classes.centerCon}>
                <Paper elevation={10} className={classes.paperStyle}>
                    <Grid item className={classes.centerCon}>
                        <SignUpForm id={props.id} firstName={props.firstName} lastName={props.lastName} email={props.email} gender={props.gender}  setFirstName={props.setFirstName} setLastName={props.setLastName} setEmail={props.setEmail} setGender={props.setGender} encodeImageFileAsURL={props.encodeImageFileAsURL} submitFun={props.submitFun} setId={props.setId} setLocaleStorage={props.setLocaleStorage} updateLocalStorageState={props.updateLocalStorageState}/>
                    </Grid>
                    <Grid align='center' item style={{ margin: 20 }}>
                        <Paper elevation={10} className={classes.formStyle3}>
                            <Tabel updateLocalStorageState={props.updateLocalStorageState} setId={props.setId} editBtn={props.editBtn} setChecked={props.setChecked} deleteBtn={props.deleteBtn}
                            // values={values} handleInputChange = {handleInputChange} images={images}  
                            />
                            
                        </Paper>
                    </Grid>
                </Paper>
            </Grid>
        </div>
    );
}

export default RegForm;
