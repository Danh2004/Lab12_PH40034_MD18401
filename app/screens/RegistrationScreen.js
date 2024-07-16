// RegistrationScreen.js
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components/native';
import { lightTheme, darkTheme } from '../theme';
import Block from '../components/Block';
import Banner from '../components/Banner';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import { View, Text, Image, Switch } from 'react-native';

const RegistrationScreen = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <View style={{ flex: 1, padding: 20 }}>
        {/* <Image source={require('../assets/images/icon.png')} style={{ width: 100, height: 100, alignSelf: 'center', marginBottom: 20 }} /> */}
        <Block title="Thông Tin Cá Nhân">
          <TextInput placeholder="Tên" />
          <TextInput placeholder="Email" keyboardType="email-address" />
          <TextInput placeholder="Số điện thoại" keyboardType="phone-pad" />
        </Block>
        <Block title="Thông Tin Khóa Học">
          <TextInput placeholder="Tên khóa học" />
          <TextInput placeholder="Mã khóa học" />
        </Block>
        <Block title="Thông Tin Liên Hệ">
          <TextInput placeholder="Địa chỉ" />
          <TextInput placeholder="Thành phố" />
        </Block>
        <Button title="Đăng Ký" onPress={() => { /* Handle registration */ }} />
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
          <Text>Chế Độ Tối</Text>
          <Switch value={isDarkTheme} onValueChange={toggleTheme} />
        </View>
      </View>
    </ThemeProvider>
  );
};

export default RegistrationScreen;
