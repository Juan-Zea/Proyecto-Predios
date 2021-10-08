import React from 'react';
import Navigator from './Navigator';

const Container = (props) => {
    return (  
        <div>
            {props.children}
            <Navigator/>
        </div>
    );
}
 
export default Container;