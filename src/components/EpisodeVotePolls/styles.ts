import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const styles = () => makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      margin: theme.spacing(2),
    },
    textField: {
      width: 50,
      margin: `0 10px`,
      marginBottom: 13,
      '& input': {
        fontSize: 20,
        textAlign: 'center',
      },
    },
    textFieldDesc: {
      fontSize: 14,
      marginLeft: theme.spacing(4),
    }
  })
)();

export default styles;