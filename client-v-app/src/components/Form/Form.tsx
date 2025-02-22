
import Box from '@mui/material/Box';
import {Button, Checkbox, FormControlLabel, TextField, Typography} from "@mui/material";



export default function Form() {

    return (
        <Box
            component="form"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 0,
                width: '400px',
                position: 'absolute',
                top: '55px',
                right: '10px',
                padding: '15px',
                backgroundColor: 'red',

        }}
        >
            <Typography variant="h4" component="h5" sx={{color: "#000", padding: '15px 0 10px 0'}}>
                Форма обратной связи
            </Typography>
            <TextField required id="outlined-basic" label="Имя" variant="outlined" sx={{paddingBottom: '10px'}}/>
            <TextField required id="outlined-basic" label="Телефон" variant="outlined" sx={{paddingBottom: '10px'}}/>
            <FormControlLabel required control={<Checkbox />} label="Required" sx={{paddingBottom: '10px'}}/>
            <Button variant="contained" sx={{marginBottom: '10px'}}>Отправить</Button>
        </Box>
    )
}