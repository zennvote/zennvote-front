import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const styles = () => makeStyles((theme: Theme) =>
  createStyles({
    divider: {
      margin: theme.spacing(4),
    },
    formControl: {
      margin: theme.spacing(3),
    },
    quizTitle: {
      marginBottom: theme.spacing(2),
    },
    quizPaper: {
      margin: theme.spacing(2),
    }
  })
)();

export default styles;