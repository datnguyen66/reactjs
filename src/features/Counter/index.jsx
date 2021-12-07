import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { decrease, increase } from './CounterSlice';

CounterFeatures.propTypes = {
    
};

function CounterFeatures(props) {
    const count = useSelector(state => state.count)
    const dispath = useDispatch();
    const handleCreaseClick = () => {
        const action = increase();
        console.log(action);
        dispath(action)
    }
    const handleDecreaseClick = () =>{
        const action = decrease();
        dispath(action)
    }
    return (
        <div>
            Counter Features : {count}
            <div>
                <button onClick={handleCreaseClick}>Increase</button>
                <button onClick={handleDecreaseClick}>Decrease</button>
            </div>
        </div>
    );
}

export default CounterFeatures;