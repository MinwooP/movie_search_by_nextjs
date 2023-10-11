"use client";

import { useSearchParams } from "next/navigation"
import styles from "./styles.module.css"
  // 쿼리 스트링을 지켜보고 있다가 
  // 같은 level의 SearchBar 컴포넌트에서 쿼리 스트링에 ?keyword=avengers를 추가해주면
  // 이 keyword에 해당하는 단어와 현재 카테고리 type에 맞는 content 목록을 불러와서 이를 렌더링해준다. 
  // baseurl/?apikey=~&s=키워드&type=movie&page=1 로 호출 

export default function ContentList({type}: {type: string}) {
  const searchParams = useSearchParams(); // 바뀔 때마다 자동으로 업데이트 ? 
  const keyword = searchParams.get('keyword'); // undefined or avengers

  if(!keyword){
    return (
      <div className={styles.emptyList}>
        원하는 {type}를 검색해주세요
      </div>
    )
  }
  
  return (
    <div>{keyword}에 대한 검색결과</div>
  )
}