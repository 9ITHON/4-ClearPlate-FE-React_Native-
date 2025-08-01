# ☁️ CLP

> Expo + React Native 로 제작한 모바일 앱  
> WebView를 통해 Vercel에 배포된 웹 서비스를 표시합니다.

---

## 📱 프로젝트 개요

- 이름: **CLP**
- 플랫폼: Android (EAS Build)
- Expo 프로젝트 링크: [구름식당 CLP Build on Expo](https://expo.dev/accounts/kgs9843/projects/CLP/builds/7a790824-93db-4d27-abc3-eca5a364bf53)
- 웹 서비스: (https://www.clearplate.store/)

---

## 🛠️ 기술 스택

- React Native
- Expo (Managed Workflow)
- react-native-webview
- EAS Build
- Vercel (Frontend 배포)

---

## ✏️ 주요 기능

- WebView를 통해 웹 서비스 표시
- 위치, 카메라, 미디어 라이브러리 권한 요청 (expo-location, expo-camera, expo-media-library 사용)
- Dev Client를 이용한 네이티브 모듈 테스트

---

## 🚀 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발용 Dev Client 빌드 (Android)
eas build --profile development --platform android

# JS 코드 수정 후 테스트
npx expo start


⚠️ **네이티브 모듈**(`expo-camera` 등)을 추가/삭제한 경우에는 Dev Client를 다시 빌드해야 합니다.

---

## 🌐 동작 구조

1. Expo 앱에서 WebView 실행
2. WebView가 Vercel에 배포된 웹 서비스  
   👉 [`https://clearplate.vercel.app`](https://clearplate.vercel.app) 로딩
3. 앱 실행 시 필요한 권한(위치, 카메라, 갤러리) 요청

---

## 📦 주요 파일

| 파일명 | 설명 |
|--|--|
| `App.tsx` | WebView를 로드하고 권한 요청 |
| `eas.json` | 빌드 프로필 설정 (development, production 등) |
| `package.json` | 의존성 관리 |
