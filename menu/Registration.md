# 2025 TANGO 커뮤니티 제4회 컨퍼런스 🎄

- 다양한 분야의 인공지능 서비스 개발을 가능케 하여 인공지능 기술의 대중화를 지원하는 신경망 자동생성 통합 개발 프레임워크 커뮤니티의 개발 기술 및 연구 결과물을 소개합니다.

<img src="img/2025/2025_tango.png">

<!-- 참가 접수하기 버튼 -->
<div style="text-align: center; margin: 30px 0;">
        <a href="/?menu=Apply.md" id="apply-button" style="display: inline-block;
              width: 100%;
              padding: 30px 30px;
              font-size: 30px;
              font-weight: bold;
              color: #fff;
              background: linear-gradient(110deg, #cee8e8, #178a94);
              text-decoration: none;
              border-radius: 10px;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
              transition: background 0.3s ease, transform 0.2s ease;">
        2025 제 4회 TANGO 커뮤니티 참가 신청
    </a>
</div>

<script>
    // 페이지가 렌더링된 후 버튼에 이벤트 리스너 추가
    setTimeout(() => {
        const applyButton = document.getElementById('apply-button');
        if (applyButton) {
            applyButton.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Apply 메뉴 찾기
                const applyMenu = blogMenu.find(menu => menu.name === 'Apply.md');
                if (applyMenu) {
                    renderOtherContents(applyMenu);
                }
            });
        }
    }, 100);
</script>

- 현장 추첨을 제외한 경품은 행사 종료 후 등록하신 연락처(SMS)를 통해 발송되며,<br>순차적으로 준비되어 발송까지 며칠이 걸릴 수 있으니, 너그러운 양해 부탁드립니다.

<style>
    a:hover {
        transform: translateY(-5px);
    }
</style>

<br>
<br>
<br>
<br>

### 행사 정보 🚀

<table border="1" cellpadding="10" cellspacing="0" style="width: 100%; border-collapse: collapse;" class="table-auto w-auto border-collapse mb-6 h-auto align-middle border-graylv2 text-left">
    <thead class="text-left">
        <tr>
            <th class="py-4 bg-bglv1 text-center">행사명</th>
            <th class="py-4" style="background: white">인공지능 기술의 대중화를 위한 TANGO 커뮤니티 4회 컨퍼런스</th>
        </tr>
        <tr>
            <th class="py-4 bg-bglv1 text-center">일 시</th>
            <th class="py-4" style="background: white">2025년 11월 6일 (목) 13:30 ~ 17:30</th>
        </tr>
        <tr>
            <th class="py-4 bg-bglv1 text-center">장 소</th>
            <th class="py-4" style="background: white">과학기술회관 대회의실1 (서울 강남구 테헤란로7길 22 B1F)
                <a href="https://naver.me/5Q4ucnAe" target="_blank" class="px-2 text-primary underline text-sm hover:bg-transparent">네이버지도</a>/
                <a href="https://place.map.kakao.com/1549212044" target="_blank" class="px-2 text-primary underline text-sm hover:bg-transparent">카카오맵</a>
            </th>
        </tr>
        <tr>
            <th class="py-4 bg-bglv1 text-center">브로셔</th>
            <th class="py-4" style="background: white">
                <button class="bg-secondary py-1 px-4 rounded-full hover:bg-secondaryLight transition duration-200">
                    <a id="pdf" href="https://raw.githubusercontent.com/aitango/aitango/refs/heads/main/2025_TANGO_brochure.pdf" 
                        class="flex items-center gap-2 text-white no-underline duration-200 text-sm hover:text-white hover:translate-y-0" style="color: white">
                            2025 TANGO 커뮤니티 브로셔 다운로드
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-5">
                              <path stroke-linecap="round" stroke-linejoin="round" d="m9 13.5 3 3m0 0 3-3m-3 3v-6m1.06-4.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                            </svg>
                    </a>
                </button>
            </th>
        </tr>
        <tr>
            <th class="py-4 bg-bglv1 text-center">깃허브</th>
            <th class="py-4" style="background: white">
                <button class="bg-secondary py-1 px-4 rounded-full hover:bg-secondaryLight transition duration-200">
                    <a href="https://github.com/ML-TANGO/TANGO" target="_blank" 
                        class="flex items-center gap-2 text-white no-underline duration-200 text-sm hover:text-white hover:translate-y-0" style="color: white">
                            Public Repository for TANGO
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-5">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                            </svg>
                    </a>
                </button>
            </th>
        </tr>
        <tr>
            <th class="py-4 bg-bglv1 text-center">주관</th>
            <th class="py-4" style="background: white">한국전자통신연구원(TANGO 커뮤니티)</th>
        </tr>
        <tr>
            <th class="py-4 bg-bglv1 text-center">주최</th>
            <th class="py-4" style="background: white">과학기술정보통신부, 정보통신기획평가원</th>
        </tr>
        <tr>
            <th class="py-4 bg-bglv1 text-center">후원</th>
            <th class="py-4" style="background: white">(주)알티스트, 한국전자기술연구원(KETI), (주)에이브노틱스, 슈어데이타랩, 아크릴, 하늘소프트, 한국정보통신기술협회(TTA)</th>
        </tr>
    </thead>
</table>


<br><br>

### 행사 진행 문의 📞

<table border="1" cellpadding="10" cellspacing="0" style="width: 100%; border-collapse: collapse" class="table-auto w-auto border-collapse mb-6 h-auto align-middle border-graylv1 text-left">
    <thead class="text-left bg-bglv1">
        <tr style="text-align: center">
            <th class="font-bold">담당자</th>
            <th class="font-bold">문의</th>
            <th class="font-bold">전화</th>
            <th class="font-bold">이메일</th>
        </tr>
    </thead>
    <tbody class="text-left">
        <tr>
            <td>한국전자통신연구원(ETRI) 박재복 책임</td>
            <td>행사 문의</td>
            <td>042-860-5565</td>
            <td>
                <a href="mailto:parkjb@etri.re.kr" class="text-sm">
                    parkjb@etri.re.kr
                </a>
            </td>
        </tr>
    </tbody>
</table>


<img src="img/2025/tango_logos.png">
