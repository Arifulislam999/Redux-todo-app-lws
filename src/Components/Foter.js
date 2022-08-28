import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Status } from "../FilterFoter/Action";

function Foter() {
    const data = useSelector((state) => state.filterReducer);
    const todo = useSelector((state) => state.todo);

    const dispatch = useDispatch();
    console.log(data);
    const taskComplete = (todo) => {
        let count = 0;
        todo.map((data) => {
            if (data.completed === false) {
                count += 1;
            }
        });
        if (count === 0) {
            return "No work";
        } else if (count === 1) {
            return "1 work";
        } else {
            return `${count} works`;
        }
    };
    const { status } = data;
    const handlerStatus = (statusName) => {
        dispatch(Status(statusName));
    };
    return (
        <div>
            <div className="mt-4 flex justify-between text-xs text-gray-500">
                <p>{taskComplete(todo)} left</p>
                <ul className="flex space-x-1 items-center text-xs">
                    <li className={`cursor-pointer ${status === "All" && "font-bold"}`} onClick={() => handlerStatus("All")}>
                        All
                    </li>
                    <li>|</li>
                    <li className={`cursor-pointer ${status === "Incomplete" && "font-bold"}`} onClick={() => handlerStatus("Incomplete")}>
                        Incomplete
                    </li>
                    <li>|</li>
                    <li className={`cursor-pointer ${status === "Complete" && "font-bold"}`} onClick={() => handlerStatus("Complete")}>
                        Complete
                    </li>
                    <li></li>
                    <li></li>
                    <li className="h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer bg-green-500"></li>
                    <li className="h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer"></li>
                    <li className="h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer"></li>
                </ul>
            </div>
        </div>
    );
}

export default Foter;
