import { EpisodeData } from "./EpisodeData";

export interface VoteData {
    email?: string;
    problem?: number[];      //문제 10개
    pitch?: EpisodeData[];        //가창력 상
    voice?: EpisodeData[];        //음색 상
    funny?: EpisodeData[];        //예능 상
    content?: EpisodeData[];      //컨텐츠 상
    original?: EpisodeData[];     //원곡 재현 상
    sleep?: EpisodeData[];          // 인기 상
    unit?: string;           //유닛 상
    new?: string;            //신인 상
    grow?: string;           //성장 상
    master?: string[];       //대 상
    custom?: {              //내가 주고 싶은 상
        episode: EpisodeData;    // n회 m번째
        content: string;    // 상 이름
    }[];
    message?: {             //메시지
        name: string;       //받는 분
        content: string;    //내용
    }[];
}