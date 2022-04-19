import { Injectable } from '@angular/core';
const w = () => {
  return window;
};
@Injectable()
export class WindowService {
  onload() {
    throw new Error('Method not implemented.');
  }
  get window(): any {
    return w();
  }
}
