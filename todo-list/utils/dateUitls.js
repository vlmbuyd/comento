/**
 * 날짜를 "Month Day, Year" 형식으로 포맷팅하는 함수
 * @param {*} today - 날짜 객체
 * @returns - 포맷팅된 날짜 문자열
 */
export const formatDate = (today = new Date()) => {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return today.toLocaleDateString('en-US', options);
};
