import React from 'react';
import Todo from './Todo';

const List = props => {
    return (
        <div>
            {props.list.map((item, i) => {
                return <Todo item={item} key={i} />
            })}
        </div>
    )
}

export default List