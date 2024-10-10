import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { registerUser } from '../../http/http.service';

const RegisterScreen = ({ navigation }) => {  // Lấy navigation từ props
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  const [username, setUsername] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const validateEmail = () => {
    if (!username) {
      setErrorMessage('User không được để trống');
      return false;
    }
    else if (!email) {
      setErrorMessage('Email không được để trống');
      return false;
    } else if (!email.endsWith('@gmail.com')) {
      setErrorMessage('Email phải có đuôi @gmail.com');
      return false;
    }
    setErrorMessage('');
    return true;
  };

  const handleRegister = async () => {
    if (validateEmail()) {
      const userData = { email, password, username };
      console.log("userData", userData);
  
      try {
        const result = await registerUser(userData); // Gọi hàm registerUser
  
        if (result.success) {
          console.log('Registration successful');
          setErrorMessage(''); // Xóa thông báo lỗi trước đó
  
          // Hiển thị thông báo thành công
          Alert.alert('Thành công', 'Đăng ký thành công!', [{ text: 'OK', onPress: () => navigation.navigate('Login') }]);
        } else {
          // Hiển thị thông báo thất bại từ server
          console.log('Registration failed', result.message);
          setErrorMessage(result.message);
  
          Alert.alert('Thất bại', result.message, [{ text: 'OK' }]);
        }
      } catch (error) {
        console.log('Unexpected error during registration', error);
        setErrorMessage('Unexpected error occurred, please try again.');
  
        Alert.alert('Thất bại', 'Đăng ký thất bại, vui lòng thử lại.', [{ text: 'OK' }]);
      }
    } else {
      console.log('Registration failed');
    }
  };
  

  return (
    <View style={styles.container}>
      <Image style={styles.ImgLogo} source={require('../Image/logo.png')} />
      <Text style={styles.textRegister}>Đăng ký để bắt đầu nghe</Text>
      <View style={styles.body}>
        <Text style={styles.textEmail}>User name</Text>
        <TextInput
          style={styles.textInput} 
          placeholder="username" 
          placeholderTextColor="#B0B0B0"
          value={username}
          onChangeText={setUsername}  // Lưu giá trị username
        />
        <Text style={styles.textEmail}>Địa chỉ Email</Text>
        <TextInput 
          style={styles.textInput} 
          placeholder="name@gmail.com" 
          placeholderTextColor="#B0B0B0"
          value={email}
          onChangeText={setEmail}  // Lưu giá trị email
        />
          <Text style={styles.textEmail}>Mật Khẩu</Text>
          <View style={styles.passwordContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            placeholderTextColor="#B0B0B0"
            secureTextEntry={!isPasswordVisible}
            value={password}
            onChangeText={setPass}
          />
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            <Image
              style={{ width: 23, height: 20 }}
              source={isPasswordVisible
                ? require('../Image/eye.jpg')
                : require('../Image/NotEye.jpg')}
            />
          </TouchableOpacity>
        </View>

        {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

        <TouchableOpacity>
          <Text style={styles.phoneText}>Dùng số điện thoại</Text>
        </TouchableOpacity>

        {/* Nút Đăng ký */}
        <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
          <Text style={styles.registerButtonText}>Đăng ký</Text>
        </TouchableOpacity>
      </View>

      {/* Dòng Hoặc */}
      <View>
        <Text style={styles.separatorText}>- - - - - - - - - - - Hoặc - - - - - - - - - - - </Text>
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
          <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
            <Text style={{fontSize:15,fontWeight:'bold', color: '#FFFFFF'}}>Đăng Nhập Tại đây</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  eyeIcon: {
    position: 'absolute',
    right: 10,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  styleLogin: {
    marginTop: 10,
    flexDirection: 'row'
  },
  textInput: {
    width: 345,
    borderRadius: 13,
    height:40,
    marginTop: 5,
    paddingHorizontal: 10,
    borderWidth: 2,  // Thêm viền
    borderColor: '#FFFFFF',  // Màu viền trắng
    color: '#FFFFFF',  // Màu chữ bên trong TextInput
  },
  errorText: {
    color: 'red',
    marginTop: 5,
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
    marginTop: 5,
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
    marginTop: 5,
    flexDirection: 'row',
    width: 345,
    alignItems: 'center',
  },
  faceButton: {
    borderColor: '#FFFFFF', // Viền trắng
    borderWidth: 2,
    borderRadius: 13,
    marginTop: 5,
    flexDirection: 'row',
    width: 345,
    padding: 5,
    alignItems: 'center',
  },
  AppleButton: {
    borderColor: '#FFFFFF', // Viền trắng
    borderWidth: 2,
    borderRadius: 13,
    marginTop: 5,
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
});
