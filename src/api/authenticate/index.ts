import axios from 'axios';
export default {
  login(username: string, password: string, isRemember: boolean) {
    return axios.post('user/login', {
      username,
      password,
      isRemember,
    });
  },
  logout() {
    return axios.post('user/logout');
  },
  getUser() {
    return axios.get('user/auth');
  },
  getAllUsers() {
    return axios.get('user/others');
  },
  getRolesList() {
    return axios.get('user/roles');
  },
  forgotPassword(email: string) {
    return axios.post('user/ForgotPassword/Request', { email });
  },
  resetPassword(email: string, password: string, confirmPassword: string, token: string) {
    let params = {
      email,
      password,
      confirmPassword,
      token,
    };
    return axios.post('user/ForgotPassword/Confirm', params);
  },
  getUserById(id: string) {
    return axios.get(`user/${id}`);
  }
};
