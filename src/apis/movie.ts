import { baseInstance } from "./instance";

// axios를 이용한 기본 통신 함수
export const getContentList = async (type: string, title: string, page: number) => {
  try {
    const path = `?apikey=7035c60c&type=${type}&s=${title}&page=${page}`;
    const { data } = await baseInstance.get(path);
    return data;
  } catch (e) {
    if (e instanceof Error) throw new Error(e.message);
  }
};




