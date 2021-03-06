import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const styles = () => makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      margin: theme.spacing(2),
    },
    voteRoot: {
      display: 'flex',
      alignItems: 'center',
      marginRight: theme.spacing(4),
      paddingTop: 0,
    },
    textField: {
      width: '100%',
      maxWidth: '250px',
      margin: `0 10px`,
      marginBottom: 13,
    },
    nameTextField: {
      width: '100%',
      margin: `0 10px`,
      marginBottom: 13,
      marginTop: theme.spacing(1),
    },
    textFieldDesc: {
      fontSize: 14,
    },
    captionRoot: {
    }
  })
)();

export default styles;