import React from "react"
import { Grid, TextField } from "@mui/material"
import { makeStyles } from "@mui/styles";


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
    },

    stem: {
        width: '100%',
        margin: '0 auto',
        border: 'none',
        "& .MuiOutlinedInput-input": {
            borderRadius: "50px",
            boxSizing: 'border-box',
            height: '24px',
            backgroundColor: "#F5F5F5"

        },
        "& .MuiInputLabel-root": {
            color: "#14225188",
            fontSize: '.6rem',
            position: 'absolute',
            top: '-5px'
        },
        "& .MuiOutlinedInput-notchedOutline": {
            border: '2px solid #F24E1E'
        },
        "& .MuiOutlinedInput-root": {
            margin: '0',
            borderRadius: "50px",
            height: '35px',
            border: '0px solid white'
            
        },
        "&:hover .MuiOutlinedInput-input": {
            // color: "rgb(240, 240, 240)"
        },
        "&:hover .MuiInputLabel-root": {
            color: "#142251"
        },
        "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            border: '2px solid #f97851'
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
            color: "#142251",
            fontSize: '.9rem',
        },
        "& .MuiInputLabel-root.Mui-focused": {
            //Edits the Form Label when cusor is focused
            color: "#000000",
            fontSize: '.8rem',
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            color: "white",
            border: '2px solid #F24E1E'
        }
    }
});


export const Input = props => {
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

export const InputNewsLetter = props => {
    const classes = useStyles();
    return     <TextField
                    variant="outlined"
                    id=""
                    className={classes.stem}
                    label="Input your Email"
                    type="email"
                />
}

