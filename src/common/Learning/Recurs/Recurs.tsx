import * as React from 'react';

// import styles from './recurs.module.css';

export const Recurs:React.FC = () => {
    const [count, setCount] = React.useState(0);

    let onChange = (e:any) => setCount(e.target.value)


    let s = 1;
    function fact(n:number) {

        if ( n === 0 ) return;
        s = s * n
        fact(n-1)

        return s
    }
    const res = fact(count);
    

    return (
        <div>
            Factorial 
           <input onChange={onChange} />
            =  {res}
        </div>
    );
};
