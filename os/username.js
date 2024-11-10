import { userInfo } from 'os';

export function username() {
  console.log(userInfo().username);
}
