import React from 'react'
import { Button } from 'antd';
export default function Redux(props){
    const incrementIfOdd = () => {
        if (props.value % 2 !== 0) {
            props.onIncrement()
        }
    }
    function incrementAsync() {
        setTimeout(props.onIncrement, 1000)
    }
    const { value, onIncrement, onDecrement } = props
    return (
        <div className="Home">
            <h1>Redux</h1>
            <div>
              <span>Clicked: {value} times </span>
              <Button size="small" onClick={onIncrement}>+</Button>
              <Button size="small" onClick={onDecrement}>-</Button>
              <Button size="small" onClick={incrementIfOdd}>+ if odd</Button>
              <Button size="small" onClick={incrementAsync} style={{ marginRight: 10}}>+ async</Button>
            </div>
        </div>
    );
}
