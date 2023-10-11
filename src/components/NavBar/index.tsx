import Link from "next/link";

// 각 카테고리 클릭 시, url만 변경해주면 되니까 server-component로 사용해도 될 듯 => SSG
// CSS 한 다음, 특정 div가 선택되었을 때, 해당 카테고리 div 색깔 변경해주기  => onFocus로 가능 ?


const categories = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Movie',
    path: '/movie'
  },
  {
    name: 'Series',
    path: '/series'
  },
  {
    name: 'Episode',
    path: '/episode'
  },
]


export default function NavBar() {
  return (
    <div>
      <div>
        <Link href="/">Home</Link>
      </div>
      <div>
        <Link href="/movie">Movie</Link>
      </div>
      <div>
        <Link href="/series">Series</Link>
      </div>
      <div>
        <Link href="/episode">Episode</Link>
      </div>
    </div>
  );
}
