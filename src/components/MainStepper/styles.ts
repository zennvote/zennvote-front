import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const styles = () => makeStyles((theme: Theme) =>
  createStyles({
    labelTypo: {
      marginLeft: 10,
    },
    actionRoot: {
      display: 'flex',
      marginTop: theme.spacing(3),
      justifyContent: 'flex-end'
    },
    button: {
      marginRight: theme.spacing(2),
    }
  })
)();

export default styles;