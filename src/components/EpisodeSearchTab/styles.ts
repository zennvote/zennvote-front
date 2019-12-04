import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const styles = () => makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
    },
    numberField: {
      margin: theme.spacing(1),
      width: 70,
    },
    searchButton: {
      width: 45,
      height: 45,
      marginTop: 'auto',
      marginBottom: 'auto',
    },
  })
)();

export default styles;