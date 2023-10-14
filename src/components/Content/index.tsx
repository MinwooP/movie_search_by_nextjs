"use client";

import { useSearchParams } from "next/navigation";
import styles from "./styles.module.css";
import { useGetContentList, useGetInfiniteContentList } from "@/queries/movie";
import { useState, useEffect } from "react";
// 쿼리 스트링을 지켜보고 있다가
// 같은 level의 SearchBar 컴포넌트에서 쿼리 스트링에 ?keyword=avengers를 추가해주면
// 이 keyword에 해당하는 단어와 현재 카테고리 type에 맞는 content 목록을 불러와서 이를 렌더링해준다.
// baseurl/?apikey=~&s=키워드&type=movie&page=1 로 호출

export default function Content({ type }: { type: string }) {
  const searchParams = useSearchParams();
  const keyword = searchParams.get("keyword") || "";
  const [page, setPage] = useState(1);

  // const { contentListData } = useGetContentList(type, keyword, page);

  const { contentListData, getNextContentPage, hasNextContentPage } = useGetInfiniteContentList(type, keyword);

  if (!keyword) {
    return <div className={styles.emptyList}>원하는 {type}를 검색해주세요</div>;
  }

  return (
    <>
      <div>{keyword}에 대한 검색결과</div>
    </>
  );
}
