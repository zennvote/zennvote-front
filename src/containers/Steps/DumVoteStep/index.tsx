import React, { FC, useState, useEffect } from 'react';
import { Typography, Divider, TextField, Button } from '@material-ui/core';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { changeVote } from '../../../store/modules/vote';
import { RootState } from '../../../store/modules';
import { useSnackbar } from 'notistack';
import { CustomVoteCard, MessageVoteCard, SuggestionVoteCard } from '../../../components';
import CustomVote from '../../../components/VoteCards/CustomVoteCard/Vote';
import MessageVote from '../../../components/VoteCards/MessageVoteCard/Vote';

interface DumVoteStepProps {
  onNextStep: () => void;
  onPrevStep: () => void;
}

const DumVoteStep: FC<DumVoteStepProps> = ({ onPrevStep, onNextStep }) => {
  const classes = styles();
  const vote = useSelector((state: RootState) => state.vote);
  const dispatch = useDispatch();

  const { enqueueSnackbar } = useSnackbar();
  const [custom, setCustom] = useState<CustomVote[]>([]);
  const [message, setMessage] = useState<MessageVote[]>([]);
  const [suggestion, setSuggestion] = useState<string>('');

  useEffect(() => {
    if (vote.custom)
      setCustom(vote.custom);
    if (vote.message)
      setMessage(vote.message);
  }, []);

  const handleNextStep = () => {
    const res = { 
      custom: custom
        .filter(value => value !== undefined && value.episode !== undefined && value.name !== undefined )
        .map(value => ({ episode: value.episode, content: value.name } as any)),
      message: message
        .filter(value => value !== undefined && value.content !== undefined && value.name !== undefined)
        .map(value => value as any),
      suggestion,
    };
    
    dispatch(changeVote(res));
    onNextStep();
  }

  return (
    <div>
      <Typography className={classes.typo}>
        아래는 쓰고 싶으신 분들만 작성해주세요~
      </Typography>
      <Typography className={classes.typo}>
        <b>답변 스킵 가능</b>
      </Typography>
      <Divider className={classes.divider} />
      <CustomVoteCard defaultValue={vote.custom} onChange={setCustom} />
      <MessageVoteCard defaultValue={vote.message} onChange={setMessage} />
      <SuggestionVoteCard value={suggestion} onChanged={setSuggestion} />
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

export default DumVoteStep;