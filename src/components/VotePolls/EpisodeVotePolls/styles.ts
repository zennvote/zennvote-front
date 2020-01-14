import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const styles = () => makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    buttonRoot: {
      display: 'flex',
      justifyContent: 'flex-end',
      margin: theme.spacing(2),
    },
    buttonWrapper: {
      position: 'relative',
    },
    button: {
      marginRight: 0,
    },
    progress: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginTop: -12,
      marginLeft: -12,
    }
  })
)();

export default styles;