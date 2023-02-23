import React from "react"
import { Grid, TextField } from "@mui/material"
import { makeStyles } from "@mui/styles";
import { color } from "@mui/system";


const useStyles = makeStyles({
    root: {
        width: '100%',
        margin: '0 auto',
        "& .MuiOutlinedInput-input": {
            backgroundColor: "#F5F5F5",
            borderRadius: "10px",
            height: "1rem",
        },
        "& .MuiInputLabel-root": {
            color: "#14225188",
            fontSize: '.8rem'
        },
        "& .MuiOutlinedInput-root": {
            borderRadius: "10px",
            backgroundColor: "#F5F5F5",
        },
        "&:hover .MuiOutlinedInput-input": {
            // color: "rgb(240, 240, 240)"
        },
        "&:hover .MuiInputLabel-root": {
            color: "#142251"
        },
        "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            border: "none"
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
            color: "#142251",
        },
        "& .MuiInputLabel-root.Mui-focused": {
            //Edits the Form Label when cusor is focused
            color: "#FFFFFF",
            borderRadius: '4px',
            padding: '2px 10px',
            backgroundColor: "#B76046"
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "none",
            color: "white"
        }
    }
});


const Input = props => {
    const classes = useStyles();
    return (
        <Grid item xs={props.inputGrid} px={1} mb={3} sx={{boxSizing: "border-box"}}>
            {props.multiline ? 
                <TextField
                    id="outlined-multiline-static"
                    label={props.label}
                    multiline
                    rows={4}
                    className={classes.root} 
                    required
                />
            :
                <TextField 
                    id={"outlined-basic" + props.label}
                    label={props.label} 
                    variant="outlined" 
                    className={classes.root} 
                    type={props.inputType}
                    required
                    // value={props.value}
                />
            }
        </Grid>
    )
}

export default Input;