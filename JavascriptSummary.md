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

<br>

컴포넌트는 클래스 기반의 상태가 있는(stateful) 컴포넌트와 함수 기반 상태가 없는(stateless) 컴포넌트로 구분합니다.

### 클래스 기반의 컴포넌트
```javascript
class Customer extends React.Component {
    render() {
        const {id, name, orders} = this.props;

        return (
            <div className="customer">
                <h2>{id}</h2>
                <p>
                    <span>이름 : {name}</span><br/>
                    <span>주문 수량 : {orders.length} 개</span>
                </p>
            </div>
        )
    }
}
```

- React클래스의 Component를 상속받는 형태로 만들어야 한다.
- 클래스 기반의 컴포넌트는 반드시 render메소드가 존재해야 한다.
- render()메소드는 react의 element를 리턴해야한다.
- React.Component 클래스를 확장해 정의하는 클래스 기반의 컴포넌트는 props 객체를 가진다.
- props 는 해당 컴포넌트의 생성 시점에 상위 컴포넌트로 부터 전달되는 데이터가 할당되는 객체이다.
- props를 통해 상위 컴포넌트로부터 전달되는 데이터의 종류는 크게 2가지 형태이다.
    - Html 요소의 속성 : href, title, style, class 등
    - 상위 컴포넌트로부터 할당 받는 임의의 데이터 : this.props.속성명
- <b style="color:red">props를 통해 전달 되는 데이터는 해당 컴포넌트에서 값을 변경할 수 없다.</b>

<br>

### 함수 기반의 컴포넌트

```javascript
// 일반함수
function App() {
    return <HelloMessage />
}

function HelloMessage(){
    const message = "Hello~~";
    return <h1> {message} </h1>
}

// 함수형 함수
const App = () => {
    return <HelloMessage />
}

const HelloMessage = () => {
    const message = 'Hello~~';
    return <h1>{message}</h1>
}
```

### MaterialUI

> npm install @mui/material @emotion/react @emotion/styled

---

## State

- props는 해당 컴포넌트의 입장에서 불변(immutable) 데이터이다.
- 컴포넌트에서 변경 가능한 데이터를 관리하기 위해 사용하는 객체는 state이다.
- State는 React.Component 클래스를 상속한 클래스 기반의 컴포넌트에만 존재한다.
- State 값의 초기화는 객체 필드의 선언부 혹은 생성자에서 구현하며, state 값의 변경은 setState() 메서드를 이용한다.

