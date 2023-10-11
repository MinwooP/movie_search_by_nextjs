import { ContentList, SearchBar } from "@/components";

export default function Episode() {
  return (
    <>
      <SearchBar />
      <ContentList type="episode" />
    </>
  );
}
