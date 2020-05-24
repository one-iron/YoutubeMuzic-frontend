# YoutubeMusic 프로젝트 소개 _ FrontEnd

YouTube에서 개발한 음악 스트리밍 서비스 YoutubeMusic 웹에서 다양한 카테고리의 음악 재생 목록들을 재생하고 보관할 수 있는 기능을 클론한 프로젝트입니다.



## 개발 인원 및 기간

- 기간 : 11일(5월 11일 ~ 5월 22일)
- 인원 : 프론트엔드 3명, 벡엔드 2명
- 백엔드 GitHub (추가할 예정)

## 목적

- 실제 협업에서 쓰이는 Scrum, Sprint Meeting, Stand Up Meeting 방식 경험
- Front-End와 Back-End 간의 협업을 통해 커뮤니케이션의 중요성 이해
- Google Socianl Login • Musci Player Controller 구현

## 적용 기술 및 구현 기능

### 적용 기술

- JavaScript
- React
- ReactHooks
- ReactRedux
- StyledComponent

### 구현 기능

#### 회원가입, 로그인 페이지

- 회원가입 및 로그인 (Bcrypt 암호화 및 JWT Access Token 전송) 기능 구현
- 회원가입 유효성 검사 기능 구현
- 로그인 검증을 통한 사용자 데이터 관리
- Google Social Login Api 구현

#### 메인 페이지

- 스크롤 이벤트에 따른 페이지네이션
- 각 앨범카드와 플레이버튼 클릭 시 해당 재생목록으로 이동

#### 핫리스트 페이지

- 백엔드 데이터 • Map 메소드 이용 앨범 카드 스타일링
- 각 앨범카드에 메뉴 모달 구현 및 해당 음악 재생 컴포넌트로 이동

#### 음악 재생 컴포넌트

- ReactHooks, ReactRedux 이용 모든 이벤트 상태값 관리
- 음악 재생 컨트롤러의 재생, 빨리감기, 되감기, 좋아요 기능 구현
- 재생 화면 모달 최소화, 최대화, 닫기 기능 구현
- 재생 목록 셔플, 드래그 방식 순서 정렬 기능 구현

#### 보관함 페이지

- 사용자의 최근 재생 목록을 Post, Get 방식 이용하여 표현
- 좋아요를 클릭한 해당 음악들을 노래 탭에서 나열 • 삭제 기능 구현

## 데모 영상

<video src="./src/img/youtubeMusic.mov" type="video/mov" />
