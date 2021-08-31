import { makeStyles } from "@material-ui/core";

const CssScript = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '90%',
            margin: theme.spacing(1)
        }
    },

    centerCon: { 
        textAlign: 'center',
        justify: 'center', 
        justifyContent: 'center', 
        display: 'flex' 
    },

    formStyle: {
        padding: 20, 
        width: 340, 
        justifyContent: 'center' ,
        textAlign: 'center',
        justify:'center',
        
    },

    paperStyle: { 
        padding: 20, 
        width: 1300,
    },

    formStyle3: {
        padding: 20 
    },

    avatarBackground: {
        marginInline: '45%'
    },

    table: {
        minWidth: 650,
    },

    checkBox: {
        width: 50,
        height: 20,
    },

    delButton: {
        background: 'red',
        padding: 8,
        marginRight: 5
    },
    
    editButton: {
        padding: 8,

        background: '#fccd02',
        // marginRight: -1080
    }
}))

export default CssScript;