# react-native-redux-dome
react-native + redux + react-navigation + react-native-vector-icons

##特别注意事项
1、修改android/app/build.gradle 下的 compileSdkVersion buildToolsVersion  为当前安装的sdk版本

2、集成react-native-vector-icons是除了根据步骤完成配置还得将/node_modules/react-native-vector-icons/android/src/build.gradle compileSdkVersion buildToolsVersion  修为当前安装的sdk版本（同上） 然后再编译，出错后根据提示删除对应的文件后再执行编译 OK