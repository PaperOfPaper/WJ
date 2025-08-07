# Firebase 설정 가이드

## 1. Firebase 프로젝트 생성

1. [Firebase Console](https://console.firebase.google.com/)에 접속
2. "프로젝트 추가" 클릭
3. 프로젝트 이름 입력: `우주의계산기-데이터`
4. Google Analytics 설정 (선택사항)
5. 프로젝트 생성 완료

## 2. 웹 앱 등록

1. 프로젝트 대시보드에서 "웹" 아이콘 클릭
2. 앱 닉네임 입력: `우주의계산기`
3. "앱 등록" 클릭

## 3. Firebase 설정 코드 복사

웹 앱 등록 후 제공되는 설정 코드를 복사하여 `index.html`의 `firebaseConfig` 부분을 교체:

```javascript
const firebaseConfig = {
  apiKey: "실제_API_KEY",
  authDomain: "실제_PROJECT_ID.firebaseapp.com",
  projectId: "실제_PROJECT_ID",
  storageBucket: "실제_PROJECT_ID.appspot.com",
  messagingSenderId: "실제_SENDER_ID",
  appId: "실제_APP_ID"
};
```

## 4. Firestore 데이터베이스 설정

1. Firebase Console에서 "Firestore Database" 클릭
2. "데이터베이스 만들기" 클릭
3. 보안 규칙 선택: "테스트 모드에서 시작" (개발용)
4. 위치 선택: `asia-northeast3 (서울)`

## 5. 보안 규칙 설정 (선택사항)

Firestore Database > 규칙 탭에서 다음 규칙 설정:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true; // 모든 사용자에게 읽기/쓰기 허용
    }
  }
}
```

## 6. 데이터 구조

### visitors 컬렉션
- 접속시간: 사용자 접속 시간
- 기기유형: 데스크톱/모바일
- 운영체제: OS 정보
- 언어: 브라우저 언어
- 화면해상도: 화면 해상도
- 창크기: 브라우저 창 크기
- 브라우저정보: User Agent
- IP주소: 사용자 IP 주소
- timestamp: 서버 타임스탬프

### calculations 컬렉션
- 계산시간: 계산 수행 시간
- 입력데이터: 사용자 입력 정보
- 결과데이터: 계산 결과
- 모델수: 입력된 모델 개수
- 총생산시간: 전체 생산 시간
- 총수량: 전체 생산 수량
- timestamp: 서버 타임스탬프

## 7. 데이터 확인

Firebase Console > Firestore Database에서 실시간으로 수집된 데이터를 확인할 수 있습니다.

## 8. 대안 서비스

### Supabase (PostgreSQL 기반)
- 무료 플랜: 월 500MB, 2GB 대역폭
- 더 강력한 쿼리 기능
- 실시간 기능 제공

### JSON Server
- 간단한 JSON 기반 API
- 테스트용으로 적합
- 실제 프로덕션에는 부적합

## 9. 주의사항

1. **API 키 보안**: Firebase API 키는 클라이언트에 노출되지만, 보안 규칙으로 데이터 접근을 제어
2. **데이터 용량**: 무료 플랜 제한 확인
3. **개인정보**: IP 주소 등 개인정보 수집 시 관련 법규 준수
4. **CORS**: Firebase는 CORS 문제 없음 