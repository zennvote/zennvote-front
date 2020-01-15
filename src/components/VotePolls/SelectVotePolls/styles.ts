import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const styles = () => makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      width: '100%',
      marginLeft: -theme.spacing(2),
    },
    select: {
      width: '100%',
      margin: theme.spacing(1),
    },
    selectGrid: {
      
    },
  })
)();

export default styles;