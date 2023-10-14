import { baseInstance } from "./instance";

// axios를 이용한 기본 통신 함수
export const getContentList = async (type: string, title: string, page: number) => {
  try {
    const path = `?apikey=7035c60c&type=${type}&s=${title}&page=${page}`;
    const { data } = await baseInstance.get(path);
    return {
      contentList: data.Search,
      totalContentLength: data.totalResults
    }; // 10개의 data와 data 총 개수 return 
  } catch (e) {
    if (e instanceof Error) throw new Error(e.message);
  }
};