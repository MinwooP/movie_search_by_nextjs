"use client";

import { getContentList } from "@/apis/movie";
import { useQuery } from "@tanstack/react-query";

export const useGetContentList = (type: string, title: string, page: number) => {
  const { data, refetch } = useQuery(
    [{ scope: "ContentList", type, title, page }],
    () => {
      console.log(`fetch Data: ${type},${title}, ${page}`);
      return getContentList(type, title, page);
    },
    {
      staleTime: 0,
      cacheTime: 0,
    }
  );

  return {
    contentListData: data.Search
  };
};
