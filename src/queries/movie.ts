"use client";

import { getContentList } from "@/apis/movie";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

export const useGetContentList = (type: string, title: string, page: number) => {
  const { data } = useQuery(
    [{ scope: "ContentList", type, title, page }],
    () => {
      console.log(`fetch Data: ${type},${title}, ${page}`);
      return getContentList(type, title, page);
    },
    {
      select: (data) => {
        return data?.contentList;
      },
    }
  );

  return {
    contentListData: data,
  };
};

export const useGetInfiniteContentList = (type: string, title: string) => {
  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery(
    [{ scope: "InfiniteContentList", type, title }],
    ({ pageParam = 0 }) => {
      return getContentList(type, title, pageParam);
    },
    {
      getNextPageParam: (lastPage, allPages) => {
        if (calculateTotalPages(lastPage?.totalContentLength) !== allPages.length) {
          console.log(`nextPage: ${allPages.length}`);
          return allPages.length + 1;
        }

        return undefined; // 마지막 페이지일 때
      },
    }
  );

  return {
    contentListData: data?.pages.map((data) => {
      return data?.contentList; // totalResult말고 각 딱 content List만 들어가도록 => 인덱스 하나당 10개씩 들어갈 것
    }),
    getNextContentPage: fetchNextPage,
    hasNextContentPage: hasNextPage,
  };
};

// 특정 content의 총 개수를 받아, 총 몇 페이지인지 계산해주는 함수
export const calculateTotalPages = (movieLength: number) => {
  if (movieLength === 0) {
    return 0;
  }
  return Math.floor(movieLength - 1 / 10) + 1;
};
