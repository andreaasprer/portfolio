import Button from "@mui/material/Button";
import EmailIcon from '@mui/icons-material/Email';
import { createTheme, ThemeProvider  } from "@mui/material/styles";


const theme = createTheme({
    palette: {
      orange: {
        main: '#ee712e',
      },
    },
    typography: {
        button: {
            fontWeight: 700,
            fontSize: '1.1rem',
            letterSpacing: 1
        }
    }
  });

const ContactButton = () => {
    return (
        <ThemeProvider theme={theme}>
            <Button 
                variant='outlined' 
                color='orange' 
                size='large'
                style={{ border: '3px solid', borderRadius: 12, paddingTop: '1em', paddingBottom: '1em', marginTop: '.5em'}}
                startIcon={<EmailIcon />}
                href="mailto:asprer.andreaa@gmail.com"
            >
                Get In Touch
            </Button>
        </ThemeProvider>
    )
}

export default ContactButton