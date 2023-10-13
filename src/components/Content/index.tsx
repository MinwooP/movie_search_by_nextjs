"use client";

import { useSearchParams } from "next/navigation";
import styles from "./styles.module.css";
import { useGetContentList } from "@/queries/movie";
import { useState, useEffect } from "react";
// 쿼리 스트링을 지켜보고 있다가
// 같은 level의 SearchBar 컴포넌트에서 쿼리 스트링에 ?keyword=avengers를 추가해주면
// 이 keyword에 해당하는 단어와 현재 카테고리 type에 맞는 content 목록을 불러와서 이를 렌더링해준다.
// baseurl/?apikey=~&s=키워드&type=movie&page=1 로 호출

export default function Content({ type }: { type: string }) {
  const searchParams = useSearchParams(); // 바뀔 때마다 자동으로 업데이트 ?
  const keyword = searchParams.get("keyword") || ""; // undefined or avengers
  const [page, setPage] = useState(1);

  const { contentListData } = useGetContentList(type, keyword, page); // type, keyword, page
  // 안바뀜 ㅋㅋ
  // 근데 keyword가 없을지도? 있을 때만 호출 ?
  // keyword
  // keyword에 해당하는 movieDataList

  useEffect(() => {
    console.log(contentListData); 
  }, [contentListData]);
// 이건 계속 콘솔에 찍히는 거 보니까 keyword가 바뀔 때마다 각 keyword에 해당하는 useGetContentList 리액트 쿼리는 
// active로 바뀌면서, 그 쿼리키에 대한 data로 contentListData가 업데이트 됨 ! 
// 내가 원하는대로 type, keyword, page에 따라 data를 따로따로 관리해주려면 queryKey에 넣어주는 것이 맞는 듯 


  // useEffect(() => {
  //   contentListDataRefetch(); // 검색된 keyword 바뀔 때마다, contentListDataRefetch 하기
  //   console.log(`keyword: ${keyword}`);
  // }, [keyword]);

  // useEffect(() => {
  //   contentListDataRefetch(); // 현재 page 바뀔 때마다, contentListDataRefetch 하기
  //   console.log(`page: ${page}`);
  // }, [page]);

  if (!keyword) {
    return <div className={styles.emptyList}>원하는 {type}를 검색해주세요</div>;
  }

  return (
    <>
      <div>{keyword}에 대한 검색결과</div>
      <button
        onClick={() => {
          setPage((prev) => prev - 1);
        }}
      >
        page 감소
      </button>
      <button
        onClick={() => {
          setPage((prev) => prev + 1);
        }}
      >
        page 증가
      </button>
    </>
  );
}
