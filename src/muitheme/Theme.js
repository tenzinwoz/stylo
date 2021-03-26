import { createMuiTheme } from '@material-ui/core/styles';

const Theme = createMuiTheme({
    typography: {
        fontFamily: "'Open Sans', sans-serif",
        h1: {
            fontSize: '25px',
            fontWeight: '600',
            color: '#273036'
        },
        h2: {
            fontSize: '30px',
            fontWeight: '600',
            color: '#273036'
        },
        h3: {
            fontSize: '20px',
            fontWeight: '600',
            color: '#273036'
        },
        subtitle1: {
            fontSize: "18px",
            color: '#273036'
        },
        body1: {
            color: '#273036'
        }
    },
    palette: {
        primary: {
            main: '#8296B8'
        },
        secondary: {
            main: '#B3DFE5'
        }
    }
});


export default Theme;
