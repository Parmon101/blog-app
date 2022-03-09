import * as React from 'react';

import styles from './lern.module.css';

export const Lern:React.FC = () => {
    const divStyle = {
        fontSize: '24px'
      };

    const cell = [1,3,4,2,2,3,1,4]
    let[count, setCount] = React.useState(0);

 
    // const compare = (())
    // console.log(count);

    // if (count = 1) {
    //     console.log(1);
    // } console.log(2);

        const [state, setState] = React.useState({
          width: window.innerWidth,
          height: window.innerHeight
        })
      
        function updateDimensions() {
          setState({
            width: window.innerWidth,
            height: window.innerHeight
          })
        }
      
        React.useEffect(() => {
          window.addEventListener('resize', updateDimensions)
          return () => {
            window.removeEventListener('resize', updateDimensions)
          }
        }, [])
    
    
    
    return (
        <div className={styles.field}>
            Размер экрана = 
            <span>{state.width} x {state.height}</span>
            <div style={divStyle}>табл 2х4!</div>
            <div className={styles.table}>
                {cell.map((el, id)=> (
                    <div  key={id} className={styles.cell} onClick={()=>setCount(el)
                    }>
                        {el}
                    </div>
                ))}
            </div>
        </div>
    );
};
