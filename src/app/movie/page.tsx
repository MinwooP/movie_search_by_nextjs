// 이 폴더 내 loading.ts 만들기 => 무비 리스트들이 불러와질 때 이에 대한 로딩 처리 ?

import { ContentList, SearchBar } from "@/components";
import styles from "./styles.module.css"

export default function Movie() {
  return (
    <div className={styles.container}>
      <SearchBar />
      <ContentList type="movie"/>
    </div>
  );
}