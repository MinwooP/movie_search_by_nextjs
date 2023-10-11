"use Client";

import { useSearchParams } from "next/navigation"

  // 쿼리 스트링을 지켜보고 있다가 
  // 같은 level의 SearchBar 컴포넌트에서 쿼리 스트링에 ?keyword=avengers를 추가해주면
  // 이 keyword에 해당하는 단어와 현재 카테고리 type에 맞는 content 목록을 불러와서 이를 렌더링해준다. 
  // baseurl/?apikey=~&s=키워드&type=movie&page=1 로 호출 

export default function ContentList() {
  const searchParams = useSearchParams(); // 바뀔 때마다 자동으로 업데이트 ? 
  const keyword = searchParams.get('keyword'); // undefined or avengers

  

  return (
    <div>content List</div>



  )
}