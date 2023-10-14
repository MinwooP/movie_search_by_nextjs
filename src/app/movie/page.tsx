// 이 폴더 내 loading.ts 만들기 => 무비 리스트들이 불러와질 때 이에 대한 로딩 처리 ?

import { Content, SearchBar } from "@/components";
import styles from "./styles.module.css";
import { Suspense } from "react";

export default function Movie() {
  return (
    <div className={styles.container}>
      <SearchBar />
      <Suspense fallback={<h1>Loading movieList...</h1>}> 
        <Content type="movie" />
      </Suspense>
    </div>
  );
}