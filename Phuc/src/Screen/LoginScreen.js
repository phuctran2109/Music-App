import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react'; 
import { LoginUser } from '../../http/http.service';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async () => {
  // Reset lỗi trước khi kiểm tra
  setError('');

  // Kiểm tra xem email và password có trống không
  if (!email || !password) {
    setError('Vui lòng điền đầy đủ thông tin.');
    return;
  }

  try {
    // Gọi API để đăng nhập
    console.log("---------",email, password)
    const userData = { email, password };
    const response = await LoginUser(userData);

    // Kiểm tra nếu phản hồi API có thông báo lỗi
    if (response.error) {
      setError('Tài khoản hoặc mật khẩu không đúng.');
    } else {
      // Đăng nhập thành công, bạn có thể điều hướng hoặc thực hiện các hành động khác
      console.log('Đăng nhập thành công!', response.data);
      // Ví dụ điều hướng sang trang chính
      navigation.navigate('Home');
    }
  } catch (error) {
    // Xử lý lỗi từ API hoặc mạng
    setError('Đã xảy ra lỗi khi kết nối. Vui lòng thử lại.');
    console.error(error);
  }
};

  return (
    <View style={styles.container}>
      <Image style={styles.ImgLogo} source={require('../Image/logo.png')} />
      <Text style={styles.textRegister}>Đăng Nhập để vào MelodyVipe</Text>

      {/* Nút Google */}
      <TouchableOpacity style={styles.googleButton} onPress={() => console.log('Google pressed')}>
        <Image style={{ width: 50, height: 50, marginLeft: 15 }} source={{ uri: 'https://static.vecteezy.com/system/resources/previews/021/496/096/original/google-symbol-logo-design-illustration-with-black-background-free-vector.jpg' }} />
        <Text style={styles.googleButtonText}>Đăng nhập với Google</Text>
      </TouchableOpacity>

      {/* Các nút đăng nhập khác */}
      <TouchableOpacity style={styles.faceButton} onPress={() => console.log('FaceBook pressed')}>
        <Image style={{ width: 40, height: 40, marginLeft: 15 }} source={require('../Image/logoFb.jpg')} />
        <Text style={styles.googleButtonText}>Đăng nhập với Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.AppleButton} onPress={() => console.log('Apple pressed')}>
        <Image style={{ width: 50, height: 50, marginLeft: 15 }} source={require('../Image/logoApple.jpg')} />
        <Text style={styles.googleButtonText}>Đăng nhập với Apple</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.AppleButton} onPress={() => console.log('SDT pressed')}>
        <Image style={{ width: 50, height: 50, marginLeft: 15 }} source={require('../Image/sdt.jpg')} />
        <Text style={styles.googleButtonText}>Đăng nhập bằng SĐT</Text>
      </TouchableOpacity>

      <Text style={{ color: '#FFFFFF' }}>_____________________________________________________</Text>
      <View style={styles.body}>
        <Text style={styles.textEmail}>Email hoặc tên người dùng</Text>
        <TextInput
          style={styles.textInput}
          placeholder="name@gmail.com"
          placeholderTextColor="#B0B0B0"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.textMk}>Mật Khẩu</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            placeholderTextColor="#B0B0B0"
            secureTextEntry={!isPasswordVisible}
            value={password}
            onChangeText={setPassword}
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

        {/* text lỗi */}
        {error && <Text style={styles.errorText}>{error}</Text>}

        {/* Nút Đăng Nhập */}
        <TouchableOpacity style={styles.LoginButton} onPress={handleLogin}>
          <Text style={styles.LoginButtonText}>Đăng Nhập</Text>
        </TouchableOpacity>
      </View>
       {/* quên mk */}
      <TouchableOpacity >
        <Text style={{ fontSize: 16, color: 'yellow', marginTop: 10 }}>Quên Mật Khẩu?</Text>
      </TouchableOpacity>
      <View style={styles.styleLogin}>
        <Text style={{ color: '#FFFFFF' }}>Bạn chưa có tài khoản?</Text>
        <TouchableOpacity onPress={()=> navigation.navigate('Register')}>
          <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'green', marginBottom: 30 }}>Đăng ký tại đây</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({

  textMk: {
    marginTop: 5,
    color: '#F5F7F8',
    fontWeight: 'bold'
  },
  styleLogin: {
    marginTop: 10,
    flexDirection: 'row'
  },
  textInput: {
    width: 345,
    borderRadius: 13,
    marginTop: 5,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    color: '#FFFFFF',
  },
  textEmail: {
    fontSize: 14,
    color: '#F5F7F8',
    fontWeight: 'bold'
  },
  body: {
    marginTop: 10,
  },
  textRegister: {
    fontSize: 35,
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
  LoginButton: {
    backgroundColor: 'green',
    paddingVertical: 15,
    borderRadius: 13,
    marginTop: 20,
    width: 345,
    alignItems: 'center',
  },
  LoginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  googleButton: {
    borderColor: '#FFFFFF',
    borderWidth: 2,
    borderRadius: 13,
    marginTop: 10,
    flexDirection: 'row',
    width: 345,
    alignItems: 'center',
  },
  faceButton: {
    borderColor: '#FFFFFF',
    borderWidth: 2,
    borderRadius: 13,
    marginTop: 10,
    flexDirection: 'row',
    width: 345,
    padding: 5,
    alignItems: 'center',
  },
  AppleButton: {
    borderColor: '#FFFFFF',
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
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
});
