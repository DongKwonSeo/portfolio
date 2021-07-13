# 식단 운동 일지 등록하기 
운동 일지와 개인 식단을 등록하여 다이어트 및 운동을 하는 사람들에게 도움을 주는 사이트입니다

## 실서버 링크
준비중

## 기능 설명 
* 로그인 및 회원 가입 

* 이미지 업로딩 기능 - multer 라이브러리 사용

* 스타일 Scss 으로 웹디자인 구성

* Redux-ToolKit 사용해서 전역에서 사용자 로그인 데이터 상태값 관리

* 비동기 처리 - Redux-Thunk 사용

* 모바일, 테블릿, PC 크기에 따른 반응형 렌더링 구현

* MongoDB로 데이터 관리, Express에서 mongoose로 쿼리 실행


## 영상
준비중

## 실행 방법
```
$https://github.com/DongKwonSeo/portfolio/
// 백서버 실행
$ cd back 
$ npm run dev

//프론트 실행
$ cd front
$ yarn start
```
# 서버(DB&API) 명세서
### * DB 명세
------------------
-------
### * API 명세
 * user
    * 유저등록
      * POST api/users
    * 유저조회
       * GET api/users
    * 로그인
      * POST api/users/login
    * 로그아웃
      * GET api/users/logout
    
 * meals
    * 식단 리스트 조회
        * GET api/meals
    * 식단 조회
        * GET api/meals:id
    * 식단 등록
         * POST api/meals
    * 식단 수정
         * PUT api/meals/:id
    * 식단 이미지 등록
         * POUST api/meals/uploadfiles
 * workout
    * 운동 리스트 조회
    * 운동 조회
    * 운동 등록
    * 운동 수정
    

    

## References
* 페이지기획서 
* 기능 설명서
* DB 명세서
* API 명세서
