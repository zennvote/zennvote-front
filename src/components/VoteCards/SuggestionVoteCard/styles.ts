import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const styles = () => makeStyles((theme: Theme) =>
  createStyles({
    card: {
      marginBottom: theme.spacing(2),
    },
    root: {
      padding: theme.spacing(4),
    },
    subtitle: {
      fontSize: 14,
    },
    title: {
      marginBottom: 12,
    },
    typo: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    divider: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
    input: {
      width: '100%',
    },
  })
)();

export default styles;