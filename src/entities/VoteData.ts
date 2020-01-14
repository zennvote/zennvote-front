export interface VoteData {
    email?: string;
    data?: {
        problem?: number[];      //문제 10개
        pitch?: string[];        //가창력 상
        voice?: string[];        //음색 상
        funny?: string[];        //예능 상
        content?: string[];      //컨텐츠 상
        original?: string[];     //원곡 재현 상
        sleep?: string;          // 인기 상
        unit?: string;           //유닛 상
        new?: string;            //신인 상
        grow?: string;           //성장 상
        master?: string[];       //대 상
        custom?: {              //내가 주고 싶은 상
            episode: string;    // n회 m번째
            content: string;    // 상 이름
        }[];
        message?: {             //메시지
            name: string;       //받는 분
            content: string;    //내용
        }[];
    }
}