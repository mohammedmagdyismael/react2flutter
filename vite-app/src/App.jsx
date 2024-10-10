import { useCallback, useEffect, useState } from 'react'
import Row from './Row';

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('State Changed');
  }, [count]);

  const increaseCount = newvalue => {
    setCount(newvalue);
  };

  const renderRows = useCallback(() => {
    const arrayOfRows = [];
    for (let i = 0; i < count ; i++) {
      arrayOfRows.push(<Row id={i} key={i} />)
    }
    return arrayOfRows;
  }, [count]);

  return (
    <>
      <div>
        {
          renderRows()
        }
        <div style={{ height: '100px', width: '100px', background: 'yellow', cursor: 'pointer' }} onClick={() => increaseCount(count + 1)}>Click Me</div>
      </div>
    </>
  )
}

export default App
