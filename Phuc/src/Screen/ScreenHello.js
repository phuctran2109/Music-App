import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native'
import React from 'react'

const ScreenHello = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.ImgLogo} source={require('../Image/logo.png')} />
      <Text style={styles.textRegister}>Đăng ký để bắt đầu nghe</Text>
      <View style={styles.body}>

        {/* Nút Đăng ký */}
        <TouchableOpacity style={styles.registerButton} onPress={() => navigation.navigate('Register')}>
          <Text style={styles.registerButtonText}>Đăng ký tài khoản</Text>
        </TouchableOpacity>
      </View>

      {/* Nút Google */}
      <TouchableOpacity style={styles.googleButton} onPress={() => console.log('Google pressed')}>
        <Image style={{width:50,height:50,marginLeft:15}} source={{uri:'https://static.vecteezy.com/system/resources/previews/021/496/096/original/google-symbol-logo-design-illustration-with-black-background-free-vector.jpg'}}/>
        <Text style={styles.googleButtonText}>Đăng nhập với Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.faceButton} onPress={() => console.log('FaceBook pressed')}>
        <Image style={{width:40,height:40,marginLeft:15}} source={require('../Image/logoFb.jpg')}/>
        <Text style={styles.googleButtonText}>Đăng nhập với Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.AppleButton} onPress={() => console.log('Apple pressed')}>
        <Image style={{width:50,height:50,marginLeft:15}} source={require('../Image/logoApple.jpg')}/>
        <Text style={styles.googleButtonText}>Đăng nhập với Apple</Text>
      </TouchableOpacity>
      <Text style={{color: '#FFFFFF'}}>_____________________________________________________</Text>
      <View style={styles.styleLogin}>
          <Text style={{color: '#FFFFFF'}}>Bạn đã có tài khoản ?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{fontSize:15,fontWeight:'bold', color: '#FFFFFF'}}>Đăng Nhập Tại Đây</Text>
          </TouchableOpacity>
      </View>
    </View>
  )
}

export default ScreenHello

const styles = StyleSheet.create({
  styleLogin: {
    marginTop: 10,
    flexDirection: 'row'
  },
  textInput: {
    width: 345,
    borderRadius: 13,
    height:40,
    marginTop: 10,
    paddingHorizontal: 10,
    borderWidth: 2,  // Thêm viền
    borderColor: '#FFFFFF',  // Màu viền trắng
    color: '#FFFFFF',  // Màu chữ bên trong TextInput
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
  textEmail: {
    fontSize: 16,
    color: '#F5F7F8',
  },
  body: {
    marginTop: 20,
  },
  textRegister: {
    fontSize: 40,
    color: '#F5F7F8',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  ImgLogo: {
    width: 150,
    height: 150,
  },
  container: {
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  phoneText: {
    color: 'green',
    marginTop: 10,
  },
  registerButton: {
    backgroundColor: 'green',
    paddingVertical: 15,
    borderRadius: 13,
    marginTop: 20,
    width: 345,
    alignItems: 'center',
  },
  registerButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  separatorText: {
    color: '#F5F7F8',
    marginTop: 10,
  },
  googleButton: {
    borderColor: '#FFFFFF', // Viền trắng
    borderWidth: 2,
    borderRadius: 13,
    marginTop: 10,
    flexDirection: 'row',
    width: 345,
    alignItems: 'center',
  },
  faceButton: {
    borderColor: '#FFFFFF', // Viền trắng
    borderWidth: 2,
    borderRadius: 13,
    marginTop: 10,
    flexDirection: 'row',
    width: 345,
    padding: 5,
    alignItems: 'center',
  },
  AppleButton: {
    borderColor: '#FFFFFF', // Viền trắng
    borderWidth: 2,
    borderRadius: 13,
    marginTop: 10,
    flexDirection: 'row',
    width: 345,
    alignItems: 'center',
  },
  googleButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    marginLeft: 40,
    fontWeight: 'bold',
  },
})