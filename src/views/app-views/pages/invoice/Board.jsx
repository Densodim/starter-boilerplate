import React, {useCallback} from "react";
import {useDrop} from "react-dnd";
import SaveButton from "./SaveButton";
import ImportDropzone from "./ImportDropzone";
import ObjectItem from "./ObjectItem";
import ObjectList from "./ObjectList";

const Board = ({
                   objects,
                   deleteMode,
                   addObject,
                   deleteObject,
                   handleImport,
                   handleDrop,
                   setDeleteMode,
               }) => {
    const [{isOver}, drop] = useDrop(() => ({
        accept: "object",
        drop: handleDrop,
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    const toggleDeleteMode = useCallback(() => {
        setDeleteMode((prev) => !prev);
    }, [setDeleteMode]);

    return (
        <div
            style={{
                padding: "10px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
            }}
        >
            <div>
                <ObjectList addObject={addObject}/>
            </div>
            <div
                ref={drop}
                style={{
                    width: "500px",
                    height: "500px",
                    border: "1px solid black",
                    position: "relative",
                }}
            >
                {objects.map((obj) => (
                    <ObjectItem
                        key={obj.id}
                        obj={obj}
                        deleteMode={deleteMode}
                        deleteObject={deleteObject}
                    />
                ))}
            </div>
            <div>
                <button onClick={toggleDeleteMode} className='px-4 py-2 rounded-md bg-gray-300 hover:bg-gray-400'>
                    {deleteMode ? "Выкл. удаление" : "Вкл. удаление"}
                </button>
                <SaveButton objects={objects}/>
                <ImportDropzone onImport={handleImport}/>
            </div>
        </div>
    );
};

export default React.memo(Board);
