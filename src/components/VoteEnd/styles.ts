import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const styles = () => makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      height: '100vh',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      textAlign: 'center',
    },
    typo: {
      margin: '10px 0px',
    },
    divider: {
      width: '100px',
      margin: '25px 0',
    },
    info: {
      fontSize: '14px',
    },
    button: {
      marginTop: '30px',
    },
  })
)();

export default styles;