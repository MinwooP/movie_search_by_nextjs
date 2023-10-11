import Link from "next/link";
import styles from "./styles.module.css";

// 각 카테고리 클릭 시, url만 변경해주면 되니까 server-component로 사용해도 될 듯 => SSG
// CSS 한 다음, 특정 div가 선택되었을 때, 해당 카테고리 div 색깔 변경해주기 => active 클래스 검사

const categories = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Movie",
    path: "/movie",
  },
  {
    name: "Series",
    path: "/series",
  },
  {
    name: "Episode",
    path: "/episode",
  },
];

export default function NavBar() {
  return (
    <div className={styles.navContainer}>
      <div className={styles.title}>
        Netflix
      </div>


      {categories.map((route) => {
        return (
          <div className={styles.linkItem} key={route.path}>
            <Link href={route.path}>{route.name}</Link>
          </div>
        );
      })}
    </div>
  );
}
