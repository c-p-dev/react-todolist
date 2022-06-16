import './todoList.css';
import React, { useCallback, useEffect, useState } from 'react';

function TodoList({ items, onItemClick }) {
    return (
        
        <div class="todolist-container">
            <ul>
            {
                items.map( item => {
                    return (

                        <li class={item.done ? 'done': 'not-done'} onClick={ ()=> !item.done && onItemClick(item) }>
                            {item.text}
                        </li>
                    )
                })
            }
            </ul>
        </div>
    );
}

export default TodoList;
