import React, { FC, useState } from 'react';
import { Typography, Divider, TextField, Button } from '@material-ui/core';
import styles from './styles';
import { useDispatch } from 'react-redux';
import { changeVote } from '../../store/modules/vote';

interface InfoStepProps {
  onNextStep: () => void;
}

const InfoStep: FC<InfoStepProps> = ({ onNextStep }) => {
  const classes = styles();
  const [email, setEmail] = useState<string>('');
  const dispatch = useDispatch();

  const handleNextStep = () => {
    dispatch(changeVote({ email }));
    onNextStep();
  }

  return (
    <div>
      <Typography className={classes.typo}>
        노래자랑 영상이나 본 방송 합쳐 적어도 <b>5회</b> 이상 챙겨보신 분들을 대상으로 하는 투표입니다.
      </Typography>
      <Typography className={classes.typo}>
        끝까지 꼼꼼하게 작성해주실 수 있는 분만 참여부탁드립니다.
      </Typography>
      <Typography className={classes.typo}>
        (참가 경험이 있는 분도 모두 투표 가능합니다. 자기에 대한 투표도 원한다면 하셔도 됩니다.)
      </Typography>
      <Divider className={classes.divider} />
      <Typography className={classes.typo}>
        우측 상단의 돋보기 모양을 클릭하면 역대 곡목을 모두 검색할 수 있습니다. 투표에 참고하세요.
      </Typography>
      <Divider className={classes.divider} />
      <Typography className={classes.typo}>
        본인의 <b>메일주소</b>를 적어주세요.
        <br />(중복 투표 방지용이며, 수집하지 않습니다. 누군지 닉네임과 연결지어 확인하지도 않습니다.)
      </Typography>
      <Typography className={classes.typo}>
        이 메일주소로 음원 다운로드 링크가 제공됩니다!
      </Typography>
      <TextField className={classes.textfield} type="text" label="이메일을 입력하세요" value={email} onChange={({ currentTarget: { value } }) => setEmail(value)}/>
      <div className={classes.actionRoot}>
        <Button className={classes.button} variant="contained" color="primary" onClick={handleNextStep}>
          다음
        </Button>
      </div>
    </div>
  )
};

export default InfoStep;