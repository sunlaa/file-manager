import { homedir as homeDirectory } from 'os';
export function homedir() {
  console.log(homeDirectory());
}
