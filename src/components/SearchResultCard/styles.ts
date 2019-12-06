import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const styles = () => makeStyles((theme: Theme) =>
  createStyles({
    card: {
      minWidth: 275,
      maxWidth: 500,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: theme.spacing(2),
      marginTop: theme.spacing(2),
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginTop: 12,
    },
  })
)();

export default styles;