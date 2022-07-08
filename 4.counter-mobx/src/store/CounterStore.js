import { observable, action, makeObservable } from 'mobx';

class CounterStore {

    // observable({
    //     _count = 5
    // });

    // 데코레이터 java의 Anotation과 비슷함

    constructor() {
        makeObservable(this);
    }

    @observable
    _count = 5

    get count() {
        return this._count;
    }

    @action
    increment() {
        this._count ++;
    }

    @action
    decrement() {
        this._count --;
    }
}

export default new CounterStore();