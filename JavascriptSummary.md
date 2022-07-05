# JavaScript

## Import

### {} 유무
``` javascript
const a = 1;
const b = 2;
export {a};
export const c = 3;
export default b;
```

``` javascript
import d, { a, c as e } from './app';
console.log(a, d, e); // 1, 2, 3 
```

a는 변수명이 같은 {a}를 받고
<br>
d는 default로 나온 b를 받고
<br>
e는 c를 받아서 e로 바꾸었다.



>npm config set strict-ssl false
<br>
>npm install -g yarn


### react-app 실행 방법
>npm init react-app hello-react
<br>
>yarn create react-app hello-react
