import React, {useState} from 'react'
import { FaToiletsPortable } from "react-icons/fa6";
import { FaChair } from "react-icons/fa";
import { GiFirewall } from "react-icons/gi";

import Board from "./Board";

const initialObjects = [
    {id: 1, label: "Стол", left: 50, top: 50, imageUrl:<FaToiletsPortable/>},
    {id: 2, label: "Стул", left: 150, top: 150, imageUrl:<FaChair/>},
    {id: 3, label: "Перегородка", left: 250, top: 250, imageUrl:<GiFirewall/>},
];

function Invoice() {
    const [objects, setObjects] = useState(initialObjects);
    const [deleteMode, setDeleteMode] = useState(false);

    const addObject = (label, imageUrl) => {
        const newObject = {
            id: Date.now(),
            label,
            left: 0,
            top: 0,
            imageUrl,
        };
        setObjects([...objects, newObject]);
    };

    const deleteObject = (id) => {
        setObjects(objects.filter((obj) => obj.id !== id));
    };

    const handleImport = (acceptedFiles) => {
        const reader = new FileReader();
        reader.onload = () => {
            try {
                const json = reader.result;
                const parsed = JSON.parse(json);
                if (Array.isArray(parsed)) {
                    setObjects(parsed);
                } else {
                    console.error("Неверный формат данных в файле");
                }
            } catch (e) {
                console.error("Ошибка при чтении файла", e);
            }
        };
        reader.readAsText(acceptedFiles[0]);
    };

    const handleDrop = (item, monitor) => {
        const delta = monitor.getDifferenceFromInitialOffset();
        const left = Math.round(item.left + delta.x);
        const top = Math.round(item.top + delta.y);
        const boardWidth = 500;
        const boardHeight = 500;
        const objectWidth = 50;
        const objectHeight = 50;
        const maxLeft = boardWidth - objectWidth;
        const maxTop = boardHeight - objectHeight;
        const newLeft = Math.min(Math.max(left, 0), maxLeft);
        const newTop = Math.min(Math.max(top, 0), maxTop);

        // Обновляем только те объекты, которые реально перемещены
        setObjects((prevObjects) =>
            prevObjects.map((obj) =>
                obj.id === item.id
                    ? {...obj, left: newLeft, top: newTop}
                    : obj
            )
        );
    };

    return (
        <Board
            objects={objects}
            deleteMode={deleteMode}
            addObject={addObject}
            deleteObject={deleteObject}
            handleImport={handleImport}
            handleDrop={handleDrop}
            setDeleteMode={setDeleteMode}
        />
    );

}

export default Invoice
