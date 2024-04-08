import React, { useState } from "react";
import { Alert, TextInput, TouchableHighlight, View, StyleSheet, Text, Image, ImageBackground } from "react-native";

const App = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const onPress = () => {
    Alert.alert(`Đã được chấp nhận ${email} mật khẩu ${password}`);
  };

  return (
    <ImageBackground
      source={require('./assets/img/111.jpeg')}
      resizeMode="cover"
      style={myStyle.backgroundImage}
    >
      <View style={myStyle.container}>
        <Image source={require('./assets/img/hungthuan.png')} style={myStyle.img}/>
        <TextInput
          style={myStyle.TextInput}
          placeholder="Nhập tên người dùng"
          onChangeText={setEmail}
          value={email}
        />
        <TextInput
          style={myStyle.TextInput}
          placeholder="Nhập mật khẩu"
          onChangeText={setPassword}
          secureTextEntry
          value={password}
        />
        <TouchableHighlight
          style={myStyle.button}
          onPress={onPress}
        >
          <Text style={myStyle.buttonText}>Đăng nhập</Text>
        </TouchableHighlight>
      </View>
    </ImageBackground>
  );
};

const myStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center'
    
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  TextInput: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "blue",
    margin: 5,
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 5,
    backgroundColor: 'blue',
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  img:{
    width:340,
    height:200,
  }
});

export default App;
