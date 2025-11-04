const defaultTitle = "TANGO";
// 현재 url 가져와서 parsing (url 스키마는 readme.md 참고)
const url = new URL(window.location.href);
const origin = url.origin + url.pathname;
const pathParts = url.pathname.split("/").filter((part) => part.length > 0);
// console.log(url)
// console.log(pathParts)

// 로켈 테스트 환경(127.0.0.1)인지 github 배포 상태인지 확인
const isLocal = url.hostname === "127.0.0.1" || url.hostname === "localhost";

// 현재 URL에서 "index.html"을 제거하고자 할 때
if (window.location.pathname.endsWith("/index.html")) {
  // 새 경로를 생성합니다. "index.html"을 제거합니다.
  // 이 때 pathParts에서 마지막 요소를 제거하지 않으면 다른 블로그를 클릭할 때 index.html이 붙어 이동합니다.
  pathParts.pop();
  let newPath = window.location.pathname.replace(/index\.html$/, "");

  // history.replaceState()를 사용하여 URL을 변경합니다. 페이지는 리로드되지 않습니다.
  history.replaceState(null, "", newPath);
}

// 경로에서 checkin= 형태를 감지하고 쿼리 파라미터로 변환
const checkinInPath = pathParts.find(part => part.startsWith("checkin="));
if (checkinInPath && !url.searchParams.get("checkin")) {
  const checkinValue = checkinInPath.split("=")[1];
  if (checkinValue) {
    // 경로에서 checkin 파라미터 추출하여 쿼리 파라미터로 변환
    const newUrl = new URL(window.location.href);
    newUrl.pathname = "/"; // 경로를 루트로 정규화
    newUrl.searchParams.set("checkin", checkinValue);
    history.replaceState(null, "", newUrl);
    // URL 객체 업데이트
    Object.assign(url, newUrl);
    pathParts.length = 0; // 경로 파트 초기화
  }
}

if (isLocal) {
  // 로컬 테스트 환경

  // 블로그 제목 설정
  const $blogTitle = document.getElementById("blog-title");
  $blogTitle.innerText = siteConfig.blogTitle || defaultTitle;

  // 홈페이지 title을 제목으로 설정
  document.title = siteConfig.blogTitle || defaultTitle;

  // 클릭했을 때 메인페이지로 이동
  $blogTitle.onclick = () => {
    const mainUrl = new URL(`http://127.0.0.1${url.port ? ":" + url.port : ""}`);
    window.history.pushState({}, "", mainUrl);
    renderBlogList();
  };
} else {
  // github 배포 상태

  // config에서 값이 없을 경우 URL에서 추출
  if (!siteConfig.username || !siteConfig.repositoryName) {
    const urlConfig = extractFromUrl();
    siteConfig.username = siteConfig.username || urlConfig.username;
    siteConfig.repositoryName =
      siteConfig.repositoryName || urlConfig.repositoryName;
  }

  // 블로그 제목 설정
  const $blogTitle = document.getElementById("blog-title");
  $blogTitle.innerText = siteConfig.blogTitle || defaultTitle;

  // 홈페이지 title을 제목으로 설정
  document.title = siteConfig.blogTitle || defaultTitle;

  // 클릭했을 때 메인페이지로 이동
  $blogTitle.onclick = () => {
    const url = new URL(`https://${siteConfig.username}.github.io/${siteConfig.repositoryName}/`);
    window.history.pushState({}, "", url);
    renderBlogList();
  };
}

// 브라우저의 뒤로가기/앞으로가기 버튼 처리
window.addEventListener("popstate", (event) => {
  // 뒤로 가는 것은 여러 케이스가 있을 수 있음
  // 1. 뒤로 갔을 때 메인 페이지(/), 뒤로 갔을 때 블로그 리스트 페이지(/?menu=blog.md) (실제로는 동일)
  // 2. 뒤로 갔을 때 menu 페이지(/?menu=about.md)
  // 3. 뒤로 갔을 때 post 페이지(/?post=20210601_[제목]_[카테고리]_[썸네일]_[저자].md)
  // 4. 뒤로 갔을 때 checkin 페이지(/?checkin=TESTA)

  // 렌더링이 이미 된 것은 category, init, blogList, blogMenu

  // 뒤로간 url을 가져옴
  let url = new URL(window.location.href);

  if (!url.search.split("=")[1] || url.search.split("=")[1] === "blog.md") {
    // 블로그 리스트 로딩
    renderBlogList();
  } else if (url.searchParams.get("checkin")) {
    // checkin 페이지 로딩
    const checkinValue = url.searchParams.get("checkin");
    renderCheckin(checkinValue);
  } else if (url.search.split("=")[0] === "?menu") {
    // 메뉴 상세 정보 로딩
    // console.log('menu', url.search.split("=")[1])
    document.getElementById("blog-posts").style.display = "none";
    document.getElementById("contents").style.display = "block";
    // console.log(origin + "menu/" + url.search.split("=")[1])
      const menuName = url.search.split("=")[1];
      fetch(origin + "menu/" + menuName)
          .then((response) => response.text())
          .then((text) => {
              styleMarkdown("menu", text);
          })
          .then(() => {
              if (menuName === "Apply.md")
                  initApplyPage();
          });

  } else if (url.search.split("=")[0] === "?post") {
    // 블로그 상세 정보 로딩
    if (url.search.split("=")[0] === "?menu") {
      document.getElementById("blog-posts").style.display = "none";
      document.getElementById("contents").style.display = "block";
      fetch(origin + "menu/" + url.search.split("=")[1])
        .then((response) => response.text())
        .then((text) => styleMarkdown("menu", text));
    } else if (url.search.split("=")[0] === "?post") {
      document.getElementById("contents").style.display = "block";
      document.getElementById("blog-posts").style.display = "none";
      postNameDecode = decodeURI(url.search.split("=")[1]).replaceAll("+", " ");
      // console.log(postNameDecode);
      postInfo = extractFileInfo(postNameDecode);
      fetch(origin + "blog/" + postNameDecode)
        .then((response) => response.text())
        .then((text) =>
          postInfo.fileType === "md"
            ? styleMarkdown("post", text, postInfo)
            : styleJupyter("post", text, postInfo)
        );
    }
  } else {
    alert("잘못된 URL입니다.");
  }
});
