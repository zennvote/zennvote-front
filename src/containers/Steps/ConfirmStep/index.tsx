import React, { FC } from 'react';
import { Typography, Divider, Button } from '@material-ui/core';
import styles from './styles';
import { PitchVoteCard } from '../../../components';

interface ConfirmStepProps {
  onNextStep: () => void;
}

const ConfirmStep: FC<ConfirmStepProps> = ({ onNextStep }) => {
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
        <li><Typography>큐에, 라일락, 류드, 처빕, 아토, 초코, 엔류, 모함과, 히키코모리, 태민 및 이 열명이 참여한 유닛</Typography></li>
        <li><Typography>오프닝</Typography></li>
      </ol>
      <Typography variant="h6" className={classes.subtitle}>
        <b>이것도 읽고 가라구!</b>
      </Typography>
      <ol>
        <li><Typography>부문상에도 <b>유닛</b>을 뽑을 수 <b>있습니다.</b></Typography></li>
        <li>
          <Typography>
            <b>
              출연 회차와 곡이 달라도 동일한 프로듀서를 서로 다른 부문에 또 한번 더 투표할 수 없습니다.
              <br />즉, 가창력 상에 처빕의 A회 X번을 뽑고 음색상에 처빕의 C회 N번을 또 적어 넣을 수 없어요.
              <br />처빕은 5부문 합쳐서 딱 한번만 투표 가능한 것입니다.
            </b>
          </Typography>
        </li>
      </ol>
      <Divider className={classes.divider} />
      <PitchVoteCard />
      <div className={classes.actionRoot}>
        <Button className={classes.button} variant="contained" color="primary" onClick={() => onNextStep()}>
          다음
        </Button>
      </div>
    </div>
  )
};

export default ConfirmStep;