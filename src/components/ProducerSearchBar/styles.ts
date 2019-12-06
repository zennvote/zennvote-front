import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const styles = () => makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      padding: '2px 4px',
      display: 'flex',
      justifyContent: 'center',
    },
    iconButton: {
      marginLeft: theme.spacing(1),
      padding: 10,
    },
    input: {
      width: 300,
    },
  })
)();

export default styles;