/**
 * main.js
 * 말라리아 캠페인 사이트 - 메인 페이지 동작
 *
 * HTML </body> 바로 위에 아래 태그를 추가하세요:
 * <script src="/js/main.js"></script>
 */

document.addEventListener("DOMContentLoaded", () => {

  // 상담하기 버튼 (헤더)
  const consultBtn = document.querySelector("header button");
  if (consultBtn) {
    consultBtn.addEventListener("click", () => {
      window.location.href = "/consult.html";
    });
  }
});
