// 이 폴더 내 loading.ts 만들기 => 무비 리스트들이 불러와질 때 이에 대한 로딩 처리 ?

import { ContentList, SearchBar } from "@/components";

export default function Movie() {
  return (
    <>
      <SearchBar />
      <ContentList type="movie"/>
    </>
    // ContentList => movie List를 넣을 수 있는 컴포넌트 => 이에 대한 로딩 처리는 suspense로?
  );
}