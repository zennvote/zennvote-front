import React, { FC, useState, useEffect } from "react";
import styles from "./styles";
import { Divider, LinearProgress, Typography } from "@material-ui/core";
import EmailCard from "./cards/EmailCard";
import FieldCard from "./cards/FieldCard";
import { VoteData } from "../../entities/VoteData";
import { RootState } from "../../store/modules";
import { useSelector } from "react-redux";
import { EpisodeData } from "../../entities/EpisodeData";
import PopCard from "./cards/PopCard";
import { useSnackbar } from "notistack";
import MasterCard from "./cards/MasterCard";

type DuplicateCheck = { name: string, data: EpisodeData, index: number };

interface ConfirmListProps {
  validateTrigger: boolean;
  onValidate: (result: boolean) => void;
}

const fieldNames: any = {
  pitch: '가창력이 뛰어난 상',
  voice: '멋진 목소리의 프로듀서 상',
  funny: '예능 프로듀서 상',
  content: '노래 그 이상♬',
  original: '원곡재현상',
}


const getDuplicated = (vote: VoteData) => {
  const { pitch, voice, funny, content, original } = vote;
  return isEpisodeDuplicated([
    ...pitch?.map((data, index) => ({ name: 'pitch', data, index })) ?? [],
    ...voice?.map((data, index) => ({ name: 'voice', data, index })) ?? [],
    ...funny?.map((data, index) => ({ name: 'funny', data, index })) ?? [],
    ...content?.map((data, index) => ({ name: 'content', data, index })) ?? [],
    ...original?.map((data, index) => ({ name: 'original', data, index })) ?? [],
  ]);
};

const isEpisodeDuplicated = (episodes: DuplicateCheck[]) => {
  console.log(episodes)
  return episodes
  .filter((episode) => episode.data)
  .filter(
    (episode, index) => episodes.findIndex((target) => episode.data.producer === target.data.producer) !== index
  )
  .map((episode) => ([episodes.find((target) => episode.data.producer === target.data.producer) ?? {}, episode]))
  .map(([value1, value2]) => [value1 as DuplicateCheck, value2 as DuplicateCheck]);
};

const ConfirmList: FC<ConfirmListProps> = ({ validateTrigger, onValidate }) => {
  const classes = styles();
  const { enqueueSnackbar } = useSnackbar();
  
  const vote = useSelector((state: RootState) => state.vote);
  const [fields, setFields] = useState<VoteData | undefined>(undefined);

  useEffect(() => {
    if (!validateTrigger)
      return;

    // 부문상 최신화 안됐으면 무시
    if (!fields) {
      onValidate(false);
      return;
    }

    // 부문상 중복 체크
    const duplicateds = getDuplicated(fields);
    if (duplicateds.length > 0) {
      const btitle: string = fieldNames[duplicateds[0][0].name];
      const bindex: number = duplicateds[0][0].index + 1;
      const atitle: string = fieldNames[duplicateds[0][1].name];
      const aindex: number = duplicateds[0][1].index + 1;
      const producer: string = duplicateds[0][0].data.producer;

      enqueueSnackbar(`${btitle}의 ${bindex}번째 항목과 ${atitle}의 ${aindex}번째 항목의 프로듀서가 같습니다! (${producer})`, { variant: 'error' });
      onValidate(false);
      return;
    }

    onValidate(true);
  }, [validateTrigger]);

  return (
    <div className={classes.root}>
        <EmailCard vote={ vote } />
        <FieldCard vote={ vote } onUpdate={setFields} />
        <PopCard vote={ vote } />
        <MasterCard vote={ vote } />
    </div>
  );
};

export default ConfirmList;