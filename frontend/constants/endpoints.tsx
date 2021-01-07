const API = 'http://192.168.1.116:8080';

export const GET_USER = (uid: string) => API + '/user/' + uid; 
export const CREATE_USER = API + '/user';

export const GET_PLANTS = (uid: string) => API + '/plant/' + uid;
export const CREATE_PLANT = API + '/plant';
export const DELETE_PLANT = (id: string | number) => API + '/plant/' + id;
export const UPDATE_PLANT = (id: string | number) => API + '/plant/' + id;
