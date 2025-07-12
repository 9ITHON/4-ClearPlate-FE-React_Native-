import React, { useEffect } from "react";
import { WebView } from "react-native-webview";
import Constants from "expo-constants";
import { StyleSheet, Alert } from "react-native";
import * as Location from "expo-location";
import * as Camera from "expo-camera";
import * as MediaLibrary from "expo-media-library";

export default function App() {
  useEffect(() => {
    (async () => {
      // 위치 권한
      let { status: locationStatus } =
        await Location.requestForegroundPermissionsAsync();
      if (locationStatus !== "granted") {
        Alert.alert("위치 권한이 거부되었습니다.");
      }

      // 카메라 권한
      let { status: cameraStatus } =
        await Camera.requestCameraPermissionsAsync();
      if (cameraStatus !== "granted") {
        Alert.alert("카메라 권한이 거부되었습니다.");
      }

      // 사진/미디어 라이브러리 권한
      let { status: mediaStatus } =
        await MediaLibrary.requestPermissionsAsync();
      if (mediaStatus !== "granted") {
        Alert.alert("사진 권한이 거부되었습니다.");
      }
    })();
  }, []);
  return (
    <WebView
      style={styles.container}
      source={{ uri: "https://www.clearplate.store" }}
      geolocationEnabled={true}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
