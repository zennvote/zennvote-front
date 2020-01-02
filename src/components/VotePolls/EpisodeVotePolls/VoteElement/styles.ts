import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const styles = () => makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(2),
    },
    voteRoot: {
      display: 'flex',
      alignItems: 'center',
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
    },
    captionRoot: {
      marginTop: -theme.spacing(1),
    }
  })
)();

export default styles;