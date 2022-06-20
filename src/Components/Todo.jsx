import React, { useState } from 'react';
// import { FaSearch } from "react-icons/fa";
import Button from './Button';
import Input from './Todo';

var filteredTask = '';

function Todo() {

    const [input, setInput] = useState('');
    const [searchtask, setsearchtask] = useState('');
    const [task, setTask] = useState([]);
    const [filter, setfilter] = useState([]);

    const handleTask = (e) => {
        setInput(e.target.value);
    }

    const addTask = () => {
        // e.preventDefault();
        if (input == '') {
            alert("please Enter Your Task");
        }
        else {
            setTask(() => [...task, input]);
        }
        setInput(() => "");
    }

    const delTask = (index) => {
        setTask(
            task.filter(function (ele, id) {
                return index !== id
            })
        )
    }

    const searchTask = (e) => {
        setsearchtask(e.target.value);
        filteredTask = e.target.value;
        setfilter(
            task.filter(function (ele, index) {
                if(ele == ''){
                    return task;
                }
            })
        )
    }

    const filterTask = () => {
        setfilter(
            task.filter(function (ele, index) {
                if (ele.toLowerCase() == filteredTask.toLowerCase()) {
                    return ele
                }
            })
        )
    }

    return (
        <div>
            <h1>Todo</h1>
            {/* <Input type="text" placeholder="Enter Your Task Here" value={input} change={handleTask} />
            <Button text="Add Task" click={addTask}/>
            <Input type="text" placeholder="Search Task Here" searchValue={searchtask} searchChange={searchTask}/>
            <Button icon={<FaSearch />} searchIcon={filterTask}/> */}
            <input type="text" placeholder='Search Task Here' value={searchtask} onChange={searchTask} />
            <button className='btn btn-success' onClick={filterTask}>Search</button>
            <input type="text" placeholder='Enter Your Task Here' value={input} onChange={handleTask} />
            <button className='btn btn-dark' onClick={addTask}>Add Task</button>
            <div>
                <ol>
                    {filter.length > 0 ? filter.map(function (e, index) {
                        return (
                            <>
                                <li key={index}>{e} <button onClick={() => delTask(index)}>Del</button></li>
                            </>
                        )
                    }) : task.map(function (e, index) {
                        return (
                            <>
                                <li key={index}>{e} <button onClick={() => delTask(index)}>Del</button></li>
                            </>
                        )
                    })}
                </ol>
            </div>
        </div>
    )
}

export default Todo;
