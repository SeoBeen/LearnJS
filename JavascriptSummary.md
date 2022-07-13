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

<br>

---

<br>

## State

- props는 해당 컴포넌트의 입장에서 불변(immutable) 데이터이다.
- 컴포넌트에서 변경 가능한 데이터를 관리하기 위해 사용하는 객체는 state이다.
- State는 React.Component 클래스를 상속한 클래스 기반의 컴포넌트에만 존재한다.
- State 값의 초기화는 객체 필드의 선언부 혹은 생성자에서 구현하며, state 값의 변경은 setState() 메서드를 이용한다.

<br>

## Component Lifecycle 메서드

- 마운트 과정에서 호출되는 주요 메서드는 constructor() 메서드와 componentDidMount() 메서드이다.
- 마운트가 된다는 것은 React 컴포넌트가 실제 DOM에 삽입 된다는 것을 의미 합니다.
- constructor() 메서드는 해당 컴포넌트의 인스턴스가 생성될 때 호출되는 메서드로 state 객체를 초기화 하거나 특정 메서드를 바인딩(binding) 하는 작업을 진행합니다.
- componentDidMount() 메서드는 컴포넌트가 마운트 된 직후 호출되며 데이터 로딩과 같은 작업 등에 재정의 합니다.

## Component Lifecycle 개요
- 생명주기(Lifecycle) 메서드는 클래스 기반 컴포넌트에 존재하는 메서드로 특정 시점에 호출되는 메서드 입니다.
- 생명주기 메서드는 컴포넌트의 마운트(mounting), 업데이트(updating), 마운트 해제(unmounting) 시점에 따라 구분하며 모두 8개의 메서드가 있습니다.
- 컴포넌트가 생성되고 render() 메서드를 통해 ReactElement를 반환 실제 DOM에 반영되는 것이 마운트입니다.
- props, state의 데이터가 변경되거나 forceUpdate() 메서드 호출을 통해 컴포넌트가 변경되는 것이 업데이트입니다.


### getDerivedStateFromProps
- props로부터 State를 동기화 하고싶을때 사용

### shouldComponentUpdate
- 성능 최적화를 할때 사용
- 리액트의 pureComponent에서는 shouldComponentUpdate를 재정의 해놓았다. 이때 props와 state값 비교는 얕은 비교이다(객체간의 비교는 불가능).

### getSnapshotBeforeUpdate
- DOM에서의 변화가 일어나기 직전의 상태를 가져오는것
- 여기서 return 하는 값들은 componentDidUpdate를 호출할 때 세번째 파라미터 값으로 전달된다.
- DOM에 반영하기 직전의 상태들을 비교할때 사용한다.

---

## MobX

### MobX 개념
(1/4)
- MobX도 Flux와 마찬가지로 클라이언트 사이드에서 state를 관리하기 위해 사용하는 라이브러리 입니다.
- MobX를 이용하면 컴포넌트의 state를 별도의 영역에서 관리하고 각 컴포넌트는 이에 접근할 수 있습니다.
- MobX를 적용하기 위해서는 mobx.js 라이브러리와 mobx-react.js 라이브러리가 필요합니다.
- MobX는 다수의 store를 관리할 수 있으며, 관리하는 데이터는 특정 데이터의 형태(Observable)로 관리 합니다.

(2/4)
- MobX가 제공하는 대표적인 API는 observable, action, observer, computed가 있습니다.
- MobX 라이브러리는 TypeScript가 적용되어 있으며 API의 사용은 데코레이터(@)를 이용하는 것이 일반적입니다.
- @observable API는 store에서 관리하고자 하는 state 데이터를 의미하며 Observable 객체를 통해 관리됩니다.
- @observer API는 @observable API로 관리되는 state를 참조하는 React 컴포넌트에 적용합니다.
- observable 데이터 변경시 action과 runInAction이 있다. 여기서 비동기처리는 runInAction으로 한다.

(3/4)
- @action은 관찰 대상 데이터 즉, observable state의 값을 변경하는 메서드에 적용합니다.
- state에 대한 단순 조회와 같은 메서드에 적용하는 것은 의미가 없습니다.
- @computed는 get 메서드에 일반적으로 적용하거나 Model 객체간 전환 시점에 적용합니다.
- @computed가 적용된 메서드를 수행할 때 해당 observable state의 변화가 없을 경우 내부 로직을 생략합니다.

(4/4)
- @observer는 store를 통해서 state를 관리하는 React.Component에 적용합니다.
- @observer가 적용된 React.Component는 관련 observable state가 변경되면 렌더링을 수행합니다.
- MobX는 다수의 store를 구성하는 것이 가능하며 @inject를 이용해 해당 @observer 컴포넌트의 store를 주입합니다.
- 이외에도 MobX 라이브러리는 @autorun, @transaction과 같은 다양한 API를 제공합니다.

<br>

### MobX의 적용
(1/3)
- React와 MobX를 통한 UI 구성은 다음과 같은 패키지의 구성을 갖습니다.
    - container : React Component로 구성하며 store와 React Component를 연결하는 역할을 담당합니다.
    - view : 순수 React Component로 구성하며 container에 포함됩니다.
    - repository(or api) : 서버와 통신을 담당하는 클래스로 구성합니다.
    - store : 전역 state를 관리하는 Store 클래스로 구성합니다.
    - model : 서버의 model과 view model의 전환을 담당합니다.
<br>

(2/3)
- container로 정의한 React 컴포넌트의 state는 store를 통해 관리합니다.
- store는 @action 메소드를 포함하며 이 메소드 호출을 통해 state를 제어합니다.
- store의 state 데이터에 변경이 일어나면 해당 state와 연결된 React Component는 다시 렌더링 됩니다.
- api는 서버와 통신을 담당하며 axios.js와 같은 서드-파티 라이브러리(Third-party Lib.)를 사용합니다.

(3/3)

---

### Flux
- Flux는 단방향 데이터 흐름을 보완하기 위해 개발된 아키텍처이며 View로 분산된 state를 통합 관리합니다.
- Flux 아키텍처는 Action, Store, Dispatcher, View로 구성됩니다.
- View 각각의 state는 Store를 이용해 통합 관리되며, Store의 데이터는 Action을 이용해 제어합니다.
- Store에서 제어하는 state는 곧 연결된 View의 state와 다름없으며 Store의 state가 변경되면 View도 갱신됩니다.

---

## Router
- SPA는 단일 페이지이므로 사용자가 브라우저에 URL을 입력하여 요청하면 서버는 같은 페이지를 반환합니다.
- JavaScript에서 페이지를 구성하고 이동하면 사용자가 브라우저를 새로 고침 하는 순간 처음 화면으로 돌아갈 것입니다.
- 페이지마다 주소가 없으므로 특정 페이지에 접속하기 힘들고 북마크를 할 수 없다는 단점이 있습니다.
- 이를 개선하기 위해 JavaScript에서 URL과 페이지를 유기적으로 구성하고, 브라우저의 history와 동기화 해야 합니다.
- URL의 구성, URL과 리액트 컴포넌트의 매핑 및 라우팅 하기 위해 React-Router를 사용합니다.
- React는 다른 UI프레임워크와 다르게 view만을 담당하기 때문에 라우팅 기능이 존재하지 않습니다.
- 페이스북 공식 라우팅 라이브러리는 존재하지 않으므로 써드파티 라이브러리를 사용합니다.
- React Router는 JSX를 사용하기 때문에 좀 더 손쉬운 사용이 가능합니다.

### React-Router 주요 컴포넌트
- react-router가 제공하는 주요 컴포넌트는 `<BrowserRouter>, <Route>, <Link>, <Switch>`등이 있습니다.
- `<BrowserRouter>` 컴포넌트는 `<Router>` 컴포넌트를 기반으로하며 HTML5 history 객체를 이용해 포함한 컴포넌트들 간의 라우팅을 지원합니다.
- `<Route>` 컴포넌트는 경로(path)에 따라 해당 컴포넌트를 랜더링 하는 가장 기본이 되는 컴포넌트 입니다.
- `<Link>` 컴포넌트는 html의 `<a>`와 같은 페이지 이동이 아닌 브라우저의 URL을 변경합니다.

<br>

---

## 호이스팅
- 스코프 내부 어디서든 변수 선언은 최상위에 선언된 것 처럼 행동

> - let과 const는 TDZ(Temporal Dead Zone) 영향을 받기 때문에 변수 선언 및 할당 이전에 사용이 불가능 하다. <br>
> - 하지만 호이스팅은 됨.

### 변수의 생성 과정

#### var
1. 선언 및 초기화 단계
2. 할당 단계

#### let
1. 선언 단계
2. 초기화 단계
3. 할당 단계

#### const
1. 선언 + 초기화 + 할당

### 스코프
- var : 함수 스코프(function-scoped)
- let, const : 블록 스코프(block-scoped)
