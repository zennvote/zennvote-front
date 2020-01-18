import React, { FC } from 'react';
import styles from './styles'
import { Typography, Divider, Button } from '@material-ui/core';

const VoteEnd: FC = () => {
  const classes = styles();

  return (
    <div className={classes.root}>
      <Typography variant='h6' className={classes.typo}>
        <b>긴 투표 참여하느라 수고하셨습니다.</b>
      </Typography>
      <Typography variant='h6' className={classes.typo}>
        <b>프로듀서님들 사사사......♡</b>
      </Typography>
      <Divider className={classes.divider} />
      <Typography variant='h6' className={classes.typo}>
        <b>투표에 참여한 오프라인 시상식 참여자는</b>
      </Typography>
      <Typography variant='h6' className={classes.typo}>
        <b>!사원업적 마지막 탭에</b>
      </Typography>
      <Typography variant='h6' className={classes.typo}>
        <b>자신의 데뷔 회차를 숫자만 적어주세요</b>
      </Typography>
      <Typography variant='h6' className={classes.typo}>
        <b>데뷔하지 않은P는 91이라고 적어주세요</b>
      </Typography>
      <Typography variant='h6' className={classes.info}>
        <br /><br />
        020 Production Vote System
      </Typography>
      <Typography variant='h6' className={classes.info}>
        Made by SHIFT (contact@dev-shift.me)
      </Typography>
      <Button variant="contained" color="primary" className={classes.button} onClick={() => window.close()}>나가기</Button>
    </div>
  );
};

export default VoteEnd;