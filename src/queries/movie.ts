"use client";

import { getContentList } from "@/apis/movie";
import { useQuery } from "@tanstack/react-query";

export const useGetContentList = (type: string, title: string, page: number) => {
  return useQuery({
    queryKey: ['getContentList'],
    queryFn: async () => {
      const data = await getContentList(type, title, page);
      return data;
    }
    // TODO: 나중에 필요하면 initialData 추가하기
  })
}













