# react-native-quick-start

created with (https://github.com/react-native-community/react-native-template-typescript)

```bash
npx react-native init MyApp --template react-native-template-typescript
```
ui with (https://github.com/thecodingmachine/react-native-boilerplate)

upgrade to react-native 0.70

- troubleshooting
https://github.com/RealCoolSnow/react-native-troubleshooting

- 构建iOS release版本
```bash
  1. 建立目录release_ios
  2. 执行 npx react-native bundle --entry-file index.js --platform ios --dev false --bundle-output release_ios/main.jsbundle --assets-dest release_ios/
  3. 拷贝/release_ios下内容到/ios目录，xcode打开工程即可开始正常打包流程
```
- 构建Android release版本
```bash  
1. 建立/android/app/src/main/assets文件夹
2. 执行 npx react-native bundle --entry-file index.js --platform android --dev false --bundle-output ./android/app/src/main/assets/index.android.bundle --assets-dest ./android/app/src/main/res/
3. 用Android Studio打开工程即可
```