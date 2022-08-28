import notes from "../Image/notes.png";
import cancel from "../Image/cancel.png";
import double from "../Image/double-tick.png";
import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import { Added, allCompleteTask, clearCompleted, Color, CompleteTask, Deleted, unCompleteTask } from "../Redux/Action";
import Foter from "./Foter";

function TodoList() {
    const data = useSelector((state) => state.todo);

    const filter = useSelector((state) => state.filterReducer);
    const { status } = filter;
    const statusByFilter = (data) => {
        switch (status) {
            case "Complete":
                return data.completed;
            case "Incomplete":
                return !data.completed;
            default:
                return data;
        }
    };
    console.log(data);
    const dispatch = useDispatch();
    const [search, setSerch] = useState("");
    const handleSearch = (e) => {
        e.preventDefault();
        setSerch(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (search.length === 0) {
            return alert("Fill the input box");
        }
        dispatch(Added(search));
        setSerch("");
    };
    const handlerDelete = (id) => {
        dispatch(Deleted(id));
    };
    const handlerCompleted = (id) => {
        dispatch(CompleteTask(id));
        console.log(id);
    };

    const handlerAllTask = () => {
        dispatch(allCompleteTask());
    };
    const handlerUnComplite = () => {
        dispatch(unCompleteTask());
    };
    const handlerClear = (value) => {
        dispatch(clearCompleted(value.completed));
    };
    const handlerColor = (id, color) => {
        dispatch(Color(id, color));
    };
    // console.log(data);
    return (
        <div>
            <div className="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
                {/* <!-- navbar --> */}
                <div className="fixed top-0 left-0 text-center w-full header bg-violet-600 py-4 text-white font-bold text-lg shadow-lg">
                    Simple Todo Application with Redux
                </div>

                <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
                    {/* <!-- header --> */}
                    <div>
                        <form className="flex items-center bg-gray-100 px-4 py-4 rounded-md">
                            <img src={notes} className="w-6 h-6" alt="Add todo" />
                            <input
                                type="text"
                                value={search}
                                placeholder="Type your todo"
                                className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
                                onChange={handleSearch}
                            />
                            <button
                                onClick={handleSubmit}
                                type="submit"
                                className="appearance-none w-8 h-8 bg-[url('https://bit.ly/3Kpv6ge')] bg-no-repeat bg-contain"
                            ></button>
                        </form>

                        <ul className="flex justify-between my-4 text-xs text-gray-500">
                            <li className="flex space-x-1 cursor-pointer">
                                <img className="w-4 h-4" src={double} alt="Complete" />
                                <span className="underline text-red-700" onClick={handlerAllTask}>
                                    Complete All Tasks
                                </span>
                            </li>
                            <span onClick={handlerUnComplite} className="text-yellow-700 cursor-pointer underline">
                                UnComplete All Tasks
                            </span>

                            <li onClick={() => handlerClear(data)} className="text-blue-700 cursor-pointer ">
                                Clear completed
                            </li>
                        </ul>
                    </div>
                    <hr className="mt-4" />

                    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
                        {/* <!-- todo --> */}
                        {data.filter(statusByFilter).map((value, index) => {
                            return (
                                <div key={index}>
                                    <div className="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0">
                                        <div className="rounded-full relative bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 border-green-500 focus-within:border-green-500">
                                            <input
                                                onClick={() => handlerCompleted(value.id)}
                                                type="checkbox"
                                                className="opacity-0 cursor-pointer absolute rounded-full"
                                            />
                                            <svg
                                                className={`${
                                                    !value.completed && "hidden"
                                                } fill-current w-3 h-3 text-green-500 pointer-events-none`}
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                                            </svg>
                                        </div>

                                        <div className={`select-none flex-1 ${value.completed && "line-through"}`}>{value.text} </div>

                                        <div
                                            className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-green-500 hover:bg-green-500 ${
                                                value.color === "green" && "bg-green-500"
                                            }`}
                                            onClick={() => handlerColor(value.id, "green")}
                                        ></div>

                                        <div
                                            className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-yellow-500 hover:bg-yellow-500 ${
                                                value.color === "yellow" && "bg-yellow-500"
                                            }`}
                                            onClick={() => handlerColor(value.id, "yellow")}
                                        ></div>

                                        <div
                                            className={`lex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-red-500 hover:bg-red-500 ${
                                                value.color === "red" && "bg-red-500"
                                            }`}
                                            onClick={() => handlerColor(value.id, "red")}
                                        ></div>

                                        <img
                                            src={cancel}
                                            className="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
                                            alt="Cancel"
                                            onClick={() => handlerDelete(value.id)}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <hr className="mt-4" />
                    <Foter />
                </div>
            </div>
        </div>
    );
}

export default TodoList;
