import { atom } from 'recoil';

export const usernameState = atom({
  key: 'username',
  default: ''
});

export const roomState = atom({
  key: 'room',
  default: ''
});
