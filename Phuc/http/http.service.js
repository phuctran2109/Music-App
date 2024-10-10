export const registerUser = async (userData) => {
  try {

    const response = await fetch('http://10.0.2.2:8080/api/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      // Trả về lỗi từ server hoặc một thông báo chung
      return { success: false, message: errorData.message || 'Unknown error' };
    }

    const data = await response.json();
    console.log('User registered:', data);
    return { success: true, data }; // Trả về đối tượng thành công
  } catch (error) {
    console.error('Error registering user:', error);
    // Trả về lỗi nếu request thất bại
    return { success: false, message: error.message || 'Network error' };
  }
};

// Login
export const LoginUser = async (userData) => {
  try {

    const response = await fetch('http://10.0.2.2:8080/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    console.log("userData",userData)
    if (!response.ok) {
      const errorData = await response.json();
      // Trả về lỗi từ server hoặc một thông báo chung
      return { success: false, message: errorData.message || 'Unknown error' };
    }

    const data = await response.json();
    console.log('User logined:', data);
    return { success: true, data }; // Trả về đối tượng thành công
  } catch (error) {
    console.error('Error login user:', error);

    // Nếu có response từ server, kiểm tra nội dung response
    
    if (error.response && error.response.data) {
      console.error('Response data:', error.response.data);
      return { success: false, message: error.response.data.message || 'Network error' };
    } else {
      return { success: false, message: 'Network error' };
    }
  }
};
