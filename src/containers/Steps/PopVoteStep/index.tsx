import React, { FC, useState} from 'react';
import { Typography, Divider, Button } from '@material-ui/core';
import styles from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { PopVoteCard, RookieVoteCard, GrowVoteCard, UnitVoteCard } from '../../../components';
import { RootState } from '../../../store/modules';
import { useSnackbar } from 'notistack';
import Vote from '../../../components/EpisodeVotePolls/Vote';
import { changeVote } from '../../../store/modules/vote';
import { EpisodeData } from '../../../entities/EpisodeData';

interface PopVoteStepProps {
  onNextStep: () => void;
  onPrevStep: () => void;
}

const PopVoteStep: FC<PopVoteStepProps> = ({ onNextStep, onPrevStep }) => {
  const classes = styles();
  const vote = useSelector((state: RootState) => state.vote);
  const dispatch = useDispatch();

  const { enqueueSnackbar } = useSnackbar();
  const [sleep, setSleep] = useState<Vote[] | undefined>(undefined);
  const [rookie, setRookie] = useState<string[] | undefined>(undefined);
  const [grow, setGrow] = useState<string[] | undefined>(undefined);
  const [unit, setUnit] = useState<string[] | undefined>(undefined);

  const handleNextStep = () => {
    if (!sleep || !rookie || rookie.length === 0 || !unit || unit.length === 0) {
      enqueueSnackbar("아직 투표하지 않은 항목이 있습니다. 확인해주세요.", { variant: 'error' });
      return;
    }
    if (rookie.length < 2) {
      enqueueSnackbar("신인상은 2명 이상 투표해야합니다.", { variant: 'error' });
      return;
    }
    if (unit.length < 3) {
      enqueueSnackbar("유닛상은 3명 모두 투표해야합니다.", { variant: 'error' });
      return;
    }

    const result = {
      grow, unit,
      new: rookie,
      sleep: sleep as EpisodeData[],
    };
    dispatch(changeVote(result));
    onNextStep();
  }

  return (
    <div>
      <Typography className={classes.infoTypo}>
        지난 시즌 대상 <b>태민</b>,
        <br />
        명예 프로듀서인 <b>라일락P와 큐에P, 류드P, 처빕P, 아토P, 초코와 EnRyu, 모함과, 히키코모리 및</b>
        <br />
        이분들이 <b>참여한 유닛</b>은 투표 대상이 <b>아닙니다</b>.
      </Typography>
      <Divider className={classes.divider} />
      <Typography className={classes.infoTypo}>
        앞서 부문에서 투표했던 프로듀서를 여기에서는 다시 투표 가능합니다.
        <br />
        중복은 부문상에서만 안 되는 거예요~
      </Typography>
      <Divider className={classes.divider} />
      <PopVoteCard defaultValue={vote.sleep} onChange={setSleep} />
      <RookieVoteCard defaultValue={vote.new} onChange={setRookie} />
      <GrowVoteCard defaultValue={vote.grow} onChange={setGrow} />
      <UnitVoteCard defaultValue={vote.unit} onChange={setUnit} />
      <div className={classes.actionRoot}>
        <Button className={classes.button} variant="contained" color="default" onClick={() => onPrevStep()}>
          이전
        </Button>
        <Button className={classes.button} variant="contained" color="primary" onClick={handleNextStep}>
          다음
        </Button>
      </div>
    </div>
  )
};

export default PopVoteStep;