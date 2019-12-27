import React, { FC } from 'react';
import { Typography, Divider, Button } from '@material-ui/core';
import styles from './styles';
import { FieldVoteCard } from '../../components';

interface FieldVoteStepProps {
  onNextStep: () => void;
}

const FieldVoteStep: FC<FieldVoteStepProps> = ({ onNextStep }) => {
  const classes = styles();
  return (
    <div>
      <Typography className={classes.typo}>
        인기상, 대상을 정하기 전에 총 <b>5개의 부문</b>이 있습니다.
        <br />여기서는 닉네임이 아니라 회차와 번호로 투표합니다.
      </Typography>
      <Divider className={classes.divider} />
      <Typography variant="h6" className={classes.subtitle}>
        <b>투표하면 안 되는 대상</b>
      </Typography>
      <ol>
        <li><Typography>1회~80회(이전 시즌) 출연자</Typography></li>
        <li><Typography>큐에, 라일락, 류드, 처빕, 아토, 초코, 엔류, 모함과, 태민 및 이 아홉이 참여한 유닛</Typography></li>
        <li><Typography>오프닝</Typography></li>
      </ol>
      <Divider className={classes.divider} />
      <FieldVoteCard />
      <div className={classes.actionRoot}>
        <Button className={classes.button} variant="contained" color="primary" onClick={() => onNextStep()}>
          다음
        </Button>
      </div>
    </div>
  )
};

export default FieldVoteStep;