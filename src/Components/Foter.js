import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ColorChange, Status } from "../FilterFoter/Action";

function Foter() {
    const data = useSelector((state) => state.filterReducer);
    const todo = useSelector((state) => state.todo);
    const { colors } = data;
    // console.log(colors);
    const dispatch = useDispatch();
    // console.log(data);
    const taskComplete = (todo) => {
        let count = 0;
        todo.forEach((data) => {
            if (data.completed === false) {
                return (count += 1);
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
    const handlerColors = (color) => {
        if (colors.includes(color)) {
            dispatch(ColorChange(color, "removed"));
        } else {
            dispatch(ColorChange(color, "added"));
        }
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
                    <li
                        className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${
                            colors.includes("green") && "bg-green-500"
                        }`}
                        onClick={() => handlerColors("green")}
                    ></li>
                    <li
                        className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${
                            colors.includes("red") && "bg-red-500"
                        }`}
                        onClick={() => handlerColors("red")}
                    ></li>
                    <li
                        className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${
                            colors.includes("yellow") && "bg-yellow-500"
                        }`}
                        onClick={() => handlerColors("yellow")}
                    ></li>
                </ul>
            </div>
        </div>
    );
}

export default Foter;
