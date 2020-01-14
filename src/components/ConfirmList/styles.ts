import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const styles = () => makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      height: '100%',
      marginTop: theme.spacing(4),
    },
    divider: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },

    cardRoot: {
      marginBottom: theme.spacing(2),
    },
    cardContentsRoot: {
      padding: theme.spacing(4),
      textAlign: 'center',
    },
    cardTitle: {
      marginBottom: theme.spacing(1),
    },
    cardTypo: {
    },
  })
)();

export default styles;