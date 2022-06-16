import './todoList.css';
import React, { useCallback, useEffect, useState } from 'react';

function TodoList({ list, clickfunction }) {




    return (
        <div>
            {
                list.map( item => {
                    return (
                        <div onClick={()=> clickfunction(item.text)}>
                            <p>{item.text}</p>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default TodoList;
