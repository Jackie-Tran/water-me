const API = 'http://192.168.1.116:8080';

export const GET_USER = (uid: string) => API + '/user/' + uid; 
export const CREATE_USER = API + '/user';

export const GET_PLANTS = (uid: string) => API + '/plant/' + uid;
