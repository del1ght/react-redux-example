import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { addElementAction, removeElementAction } from './store/arrayReducer';
import {
  decreaseCounterAction,
  increaseCounterAction,
} from './store/counterReducer';
import { fetchUsers } from './asyncActions/fetchUsers';

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);

  const increaseCounter = () => {
    dispatch(increaseCounterAction(1));
  };

  const decreaseCounter = () => {
    dispatch(decreaseCounterAction(1));
  };

  const array = useSelector((state) => state.array.array);

  const addToArray = (value) => {
    const payload = {
      id: Date.now(),
      value,
    };
    dispatch(addElementAction(payload));
  };

  const removeFromArray = (id) => {
    dispatch(removeElementAction(id));
  };

  return (
    <div>
      <div>
        <button onClick={decreaseCounter} style={{ marginRight: '10px' }}>
          -
        </button>
        <button onClick={increaseCounter}>+</button>
      </div>
      <p>counter: {counter}</p>
      <hr style={{ marginBottom: '16px' }} />
      <div>
        <button
          onClick={() => addToArray(prompt('type any string'))}
          style={{ marginRight: '16px' }}
        >
          add to array
        </button>
        <button onClick={() => dispatch(fetchUsers())}>fetch array</button>
      </div>
      {array.length ? (
        <div
          style={{
            marginTop: '16px',
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
            flexWrap: 'wrap',
          }}
        >
          {array.map(({ id, value }) => {
            return (
              <button
                className='btn'
                key={id}
                onClick={() => removeFromArray(id)}
              >
                {value}
              </button>
            );
          })}
        </div>
      ) : (
        <p>array is empty</p>
      )}
    </div>
  );
}

export default App;
