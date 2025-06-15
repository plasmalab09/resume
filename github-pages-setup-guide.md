# GitHub Pages 포트폴리오 웹사이트 제작 및 배포 가이드

## 개요
이 가이드는 YunSung Jang님의 이력서를 기반으로 제작된 포트폴리오 웹사이트를 GitHub Pages에 업로드하고 배포하는 과정을 단계별로 설명합니다.

## 필요한 파일들
다음 4개의 파일이 포트폴리오 구성에 필요합니다:

1. **index.html** - 웹사이트의 메인 HTML 구조
2. **style.css** - 스타일링 및 반응형 디자인
3. **script.js** - 인터랙티브 기능 및 애니메이션
4. **README.md** - 프로젝트 설명서

## 1단계: GitHub 저장소 생성

### 1.1 GitHub 계정 로그인
- [GitHub](https://github.com)에 접속하여 로그인
- 계정이 없다면 무료로 회원가입

### 1.2 새 저장소 생성
1. 우측 상단 "+" 버튼 클릭 → "New repository" 선택
2. Repository name: `[사용자명].github.io` 형식으로 입력
   - 예: `yunsung-jang.github.io`
3. Description: "Personal Portfolio Website" 입력
4. **Public** 선택 (GitHub Pages는 Public 저장소에서만 무료)
5. "Add a README file" 체크
6. "Create repository" 클릭

## 2단계: 로컬 개발 환경 설정

### 2.1 Git 설치 및 설정
```bash
# Git 버전 확인
git --version

# Git 사용자 정보 설정 (최초 1회)
git config --global user.name "YunSung Jang"
git config --global user.email "plasmalab09@gmail.com"
```

### 2.2 저장소 복제
```bash
# 작업할 폴더로 이동
cd Desktop

# 저장소 복제
git clone https://github.com/[사용자명]/[사용자명].github.io.git

# 프로젝트 폴더로 이동
cd [사용자명].github.io
```

## 3단계: 파일 업로드 및 설정

### 3.1 파일 구조 생성
프로젝트 폴더에 다음과 같은 구조로 파일을 배치합니다:
```
[사용자명].github.io/
├── index.html
├── style.css
├── script.js
├── README.md
└── images/ (선택사항)
    ├── profile.jpg
    └── projects/
```

### 3.2 HTML 파일 생성 (index.html)
제공된 `portfolio_index.html` 내용을 `index.html`로 저장합니다.

**중요 수정사항:**
- 파일명을 반드시 `index.html`로 변경
- CSS 링크: `<link rel="stylesheet" href="style.css">`
- JS 링크: `<script src="script.js"></script>`

### 3.3 CSS 파일 생성 (style.css)
제공된 `portfolio_style.css` 내용을 `style.css`로 저장합니다.

### 3.4 JavaScript 파일 생성 (script.js)
제공된 `portfolio_script.js` 내용을 `script.js`로 저장합니다.

### 3.5 README.md 파일 작성
```markdown
# YunSung Jang - Portfolio Website

## 소개
반도체 및 플라즈마 공정 전문가 장윤성의 개인 포트폴리오 웹사이트입니다.

## 기술 스택
- HTML5
- CSS3 (Flexbox, Grid, Animations)
- JavaScript (ES6+)
- GitHub Pages

## 주요 기능
- 반응형 디자인
- 부드러운 스크롤 애니메이션
- 인터랙티브 네비게이션
- 연락처 폼

## 배포
이 웹사이트는 GitHub Pages를 통해 배포됩니다.
URL: https://[사용자명].github.io

## 연락처
- 이메일: plasmalab09@gmail.com
- 전화: +82-10-9864-2258
```

## 4단계: Git을 통한 업로드

### 4.1 파일 추가 및 커밋
```bash
# 모든 파일 스테이징
git add .

# 커밋 메시지와 함께 커밋
git commit -m "Initial portfolio website upload"

# 원격 저장소에 푸시
git push origin main
```

### 4.2 업로드 확인
- GitHub 저장소 페이지에서 파일들이 정상적으로 업로드되었는지 확인
- 모든 파일이 보이고 내용이 정확한지 검토

## 5단계: GitHub Pages 활성화

### 5.1 Settings 이동
1. 저장소 페이지에서 "Settings" 탭 클릭
2. 왼쪽 메뉴에서 "Pages" 클릭

### 5.2 배포 설정
1. Source: "Deploy from a branch" 선택
2. Branch: "main" 선택
3. Folder: "/ (root)" 선택
4. "Save" 버튼 클릭

### 5.3 배포 확인
- 설정 후 약 5-10분 후 사이트가 활성화됩니다
- 녹색 체크 표시와 함께 URL이 표시됩니다: `https://[사용자명].github.io`

## 6단계: 최종 테스트 및 최적화

### 6.1 기능 테스트
- [ ] 모든 네비게이션 링크 동작 확인
- [ ] 반응형 디자인 테스트 (모바일, 태블릿, 데스크톱)
- [ ] 스크롤 애니메이션 확인
- [ ] 연락처 폼 검증 기능 테스트
- [ ] 모든 섹션 내용 정확성 확인

### 6.2 성능 최적화
- 이미지 파일 최적화 (WebP 형식 사용 권장)
- 불필요한 코드 제거
- 압축 및 최소화 고려

### 6.3 SEO 설정
추가 최적화를 위해 다음 메타 태그들을 `<head>` 섹션에 추가할 수 있습니다:

```html
<!-- SEO 메타 태그 -->
<meta name="description" content="반도체 및 플라즈마 공정 전문가 장윤성의 포트폴리오">
<meta name="keywords" content="반도체, 플라즈마, OLED, 공정, 연구, 포트폴리오">
<meta name="author" content="YunSung Jang">

<!-- Open Graph 태그 -->
<meta property="og:title" content="YunSung Jang - Portfolio">
<meta property="og:description" content="반도체 및 플라즈마 공정 전문가">
<meta property="og:type" content="website">
<meta property="og:url" content="https://[사용자명].github.io">
```

## 7단계: 지속적인 관리

### 7.1 내용 업데이트
새로운 프로젝트나 경력 추가 시:
1. 로컬에서 파일 수정
2. Git으로 변경사항 커밋 및 푸시
3. 자동으로 사이트 업데이트됨

### 7.2 정기적인 유지보수
- 월 1회 내용 검토 및 업데이트
- 새로운 기술 스택이나 프로젝트 추가
- 디자인 개선 및 사용자 경험 향상

## 문제 해결 가이드

### 자주 발생하는 문제들

**1. 사이트가 표시되지 않을 때**
- GitHub Pages 설정 확인
- 파일명이 정확한지 확인 (index.html)
- 브라우저 캐시 강제 새로고침 (Ctrl+F5)

**2. CSS/JS가 로드되지 않을 때**
- 파일 경로 확인
- 대소문자 구분 확인
- 파일명 정확성 검토

**3. 모바일에서 레이아웃이 깨질 때**
- viewport 메타 태그 확인
- CSS 미디어 쿼리 검토
- 테스트 도구로 다양한 화면 크기 확인

**4. GitHub Actions 빌드 실패**
- 저장소의 "Actions" 탭에서 에러 로그 확인
- HTML/CSS/JS 구문 오류 검토
- 파일 권한 및 인코딩 확인

## 고급 기능 추가 (선택사항)

### 커스텀 도메인 설정
자체 도메인을 연결하려면:
1. 도메인 등록업체에서 DNS 설정
2. GitHub Pages 설정에서 커스텀 도메인 입력
3. HTTPS 강제 설정 활성화

### Google Analytics 연동
웹사이트 방문자 통계를 확인하려면:
1. Google Analytics 계정 생성
2. 추적 코드를 `<head>` 섹션에 추가

### 연락처 폼 백엔드 연동
실제 이메일을 받으려면:
1. Formspree, Netlify Forms 등의 서비스 이용
2. 폼 action 속성 수정

## 마무리

이 가이드를 따라하면 전문적인 포트폴리오 웹사이트를 성공적으로 배포할 수 있습니다. 지속적으로 내용을 업데이트하고 개선하여 더욱 매력적인 포트폴리오를 만들어 보세요.

**완성된 사이트 예시 URL**: `https://[사용자명].github.io`