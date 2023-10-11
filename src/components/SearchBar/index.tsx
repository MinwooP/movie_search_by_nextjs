"use client";

import { usePathname, useRouter } from "next/navigation";
import { ChangeEvent, KeyboardEvent, useState } from "react";

// 각 /movie, /series, /episode 폴더 내 page.js에서 사용할 컴포넌트

// input에 키워드 입력하고 search 버튼 클릭 시
// 해당 키워드를 ?keyword=입력된키워드 로 url 업데이트 시켜줘야 함

export default function SearchBar() {
  const router = useRouter();
  const pathname = usePathname();

  const [keyword, setKeyword] = useState("");
  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    // 키워드 입력 시마다 state업데이트 시켜줌
    const { value } = e.target;
    setKeyword(value);
    console.log(value);
  };  

  const onClickReset = () => {
    // keyword state를  "" 으로 바꿔줌
    setKeyword("");
  };

  const onClickSearch = () => {
    // keyword state를 쿼리 스트링에 추가하는 함수
    // keyword가 특정 단어이면 쿼리스트링에 추가하기
    // keyword가 ""이면 쿼리스트링에서 없애기
    setKeyword(keyword.trim()); // 앞뒤 공백 제거
    if (keyword) {
      router.push(`${pathname}?keyword=${keyword}`);
    } else {
      router.push(`${pathname}`);
    }
  };

  const onKeyDownEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onClickSearch();
    }
  };

  return (
    <div>
      <input value={keyword} onChange={onChangeInput} onKeyDown={onKeyDownEnter} />
      <button onCanPlay={onClickSearch}>search</button>
      <button onClick={onClickReset}>reset</button>
    </div>
  );
}
