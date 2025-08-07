# 깃허브 배포 및 데이터 수집 설정 가이드

## 1. 깃허브 Pages 배포

### Step 1: 깃허브 저장소 생성
1. 깃허브에서 새 저장소 생성
2. 저장소 이름: `우주의계산기` 또는 원하는 이름
3. Public 저장소로 설정

### Step 2: 파일 업로드
```bash
# 로컬에서 깃허브 저장소 클론
git clone https://github.com/사용자명/우주의계산기.git
cd 우주의계산기

# 파일 복사
# - index.html
# - styles.css
# - script.js
# - FIREBASE_SETUP.md
# - DEPLOYMENT_GUIDE.md

# 커밋 및 푸시
git add .
git commit -m "우주의 계산기 VER.3 초기 배포"
git push origin main
```

### Step 3: GitHub Pages 활성화
1. 저장소 Settings > Pages
2. Source: Deploy from a branch
3. Branch: main
4. Folder: / (root)
5. Save 클릭

## 2. Firebase 설정 (추천)

### Step 1: Firebase 프로젝트 생성
1. [Firebase Console](https://console.firebase.google.com/) 접속
2. "프로젝트 추가" 클릭
3. 프로젝트 이름: `우주의계산기-데이터`
4. Google Analytics 설정 (선택사항)

### Step 2: 웹 앱 등록
1. 프로젝트 대시보드에서 "웹" 아이콘 클릭
2. 앱 닉네임: `우주의계산기`
3. "앱 등록" 클릭

### Step 3: 설정 코드 복사
웹 앱 등록 후 제공되는 설정 코드를 복사하여 `index.html`의 `firebaseConfig` 부분 교체:

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

### Step 4: Firestore 데이터베이스 설정
1. Firebase Console > Firestore Database
2. "데이터베이스 만들기" 클릭
3. 보안 규칙: "테스트 모드에서 시작"
4. 위치: `asia-northeast3 (서울)`

## 3. JSON Server 설정 (대안)

### Step 1: Node.js 설치
[Node.js 공식 사이트](https://nodejs.org/)에서 LTS 버전 설치

### Step 2: 의존성 설치
```bash
npm install
```

### Step 3: 서버 실행
```bash
# 개발 모드
npm run dev

# 또는 JSON Server만 실행
npm run json-server
```

### Step 4: 데이터 수집 코드 변경
`script.js`에서 Firebase 대신 JSON Server 사용:

```javascript
// initializeApp 함수에서
collectVisitorDataJSON(); // collectVisitorData() 대신

// displayResults 함수에서
collectCalculationDataJSON(results, inputData); // collectCalculationData() 대신
```

## 4. 데이터 확인 방법

### Firebase Console
1. [Firebase Console](https://console.firebase.google.com/) 접속
2. 프로젝트 선택
3. Firestore Database > 데이터 탭
4. 실시간으로 수집된 데이터 확인

### JSON Server
1. 브라우저에서 `http://localhost:3001/api/data` 접속
2. 또는 터미널에서 서버 로그 확인

## 5. 배포 후 테스트

### 접속자 정보 수집 테스트
1. 웹사이트 접속
2. 브라우저 개발자 도구 > Console 확인
3. "Visitor data saved" 메시지 확인

### 계산 데이터 수집 테스트
1. 계산 수행
2. 브라우저 개발자 도구 > Console 확인
3. "Calculation data saved" 메시지 확인

## 6. 주의사항

### 보안
- Firebase API 키는 클라이언트에 노출되지만, 보안 규칙으로 제어
- JSON Server는 로컬에서만 실행 (프로덕션 부적합)

### 개인정보
- IP 주소 등 개인정보 수집 시 관련 법규 준수
- 사용자 동의 필요 여부 확인

### 데이터 용량
- Firebase 무료 플랜: 월 50,000 읽기/쓰기, 1GB 저장소
- JSON Server: 로컬 파일 시스템 용량

## 7. 문제 해결

### Firebase 연결 실패
1. API 키 확인
2. 보안 규칙 확인
3. 네트워크 연결 확인

### JSON Server 연결 실패
1. 서버 실행 상태 확인
2. 포트 충돌 확인
3. CORS 설정 확인

### 데이터 수집 실패
1. 브라우저 개발자 도구 > Console 확인
2. 네트워크 탭에서 API 호출 확인
3. 서버 로그 확인 