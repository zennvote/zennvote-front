import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const styles = () => makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    select: {
      width: '100%',
      margin: theme.spacing(1),
    },
  })
)();

export default styles;