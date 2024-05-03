import { useState, useEffect } from "react";
import { HiChevronRight } from "react-icons/hi";
import folder from "../../assets/Images/Diary.png";

const icon = {
  folder: folder,
  powerpoint: folder,
  excel: folder,
  word: folder,
};

const content = [{ id: 1, type: "folder", name: "Desktop" }];

const RENAME_CLICKS = 1;

const toolbarProps = [
  { type: "folder", name: "New Folder" },
  {
    type: "file",
    name: "New File",
    children: [
      { type: "file", fileType: "word", name: "New Word Document" },
      { type: "file", fileType: "excel", name: "New Excel File" },
      { type: "file", fileType: "powerpoint", name: "New Powerpoint File" },
    ],
  },
];

const View = () => {
  const [screen, setScreen] = useState(content);
  const [renameThreshold, setRenameThreshold] = useState(0);
  const [showInput, setShowInput] = useState();
  const [newFolderCounter, setNewFolderCounter] = useState(0);

  const [contextMenu, setContextMenu] = useState();
  const [contextCoordinate, setContextCoordinate] = useState({ x: 0, y: 0 });

  const handleRenameInputChange = (id, value) => {
    const newScreen = screen?.map((folder) => {
      if (folder.id === id) {
        folder.name = value;
      }

      return folder;
    });

    setScreen(newScreen);
  };


  const handleReName = (id, timesClicked) => {
    setShowInput()
    if (timesClicked === RENAME_CLICKS) {
      setShowInput(id);
      const closeOnOutClick = (e) => {
        let clicks = 0;

        setShowInput((input) => {
          clicks = input;
          return input;
        })
        if (!e.target.classList.contains("input") && clicks) {
          setShowInput(null);
          window.removeEventListener("click", closeOnOutClick);
          console.log("Event listener removed");
        }
      };
      window.addEventListener("click", closeOnOutClick);

      setRenameThreshold(0);
    } else {
      setRenameThreshold(renameThreshold + 1);
      const timeout = setTimeout(() => {
        setRenameThreshold(0);
        clearTimeout(timeout);
      }, 800);
    }
  };


  useEffect(() => {
    window.oncontextmenu = (e) => {
      const { x, y } = e;

      setContextMenu(true);
      setContextCoordinate({ x, y });

      const hello = (e) => {
        if (!e.target.classList.contains("context-menu")) {
          setContextMenu(false);

          window.removeEventListener("click", hello);
        }
      };

      window.addEventListener("click", hello);

      return false;
    };
  }, []);

  const handleNewFolder = () => {
    console.log("Hello");
    const newFolder = {
      id: Math.ceil(Math.random() * 1000000) * Math.ceil(Math.random() * 100),
      type: "folder",
      name: `New Folder ${newFolderCounter}`,
    };
    setScreen([...screen, newFolder]);
    setNewFolderCounter((counter) => counter + 1);
  };

  const handleContextMenu = (e) => {
    e.preventDefault();
    setShowInput();
    const { clientX, clientY } = e;

    if ((clientY + 300) > window.screen.height) {
      setContextCoordinate({ x: clientX, y: clientY - 100 });
    }

    else {

      setContextCoordinate({ x: clientX, y: clientY });
    }

    setContextMenu(true);
  };

  useEffect(() => {
    window.addEventListener("contextmenu", handleContextMenu);
    return () => {
      window.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  return (
    <>
      <div className="grid fixed w-full h-full py-16 px-10 grid-cols-12 gap-8">
        {screen.map((folder) => (
          <div key={folder?.id} className=" flex flex-col items-center ">
            <img
              src={
                icon[folder?.type === "file" ? folder?.fileType : folder?.type]
              }
            />
            {showInput === folder?.id ? (
              <input
                className="input !w-[100px]"
                autoFocus={true}
                onChange={(e) =>
                  handleRenameInputChange(folder?.id, e.target.value)
                }
                defaultValue={folder?.name}
              />
            ) : (
              <p
                className="text-sm font-medium text-center"
                onClick={() => {!showInput ? handleReName(folder?.id, renameThreshold) : ""}}
              >
                {folder.name}
              </p>
            )}
          </div>
        ))}
      </div>

      {contextMenu && (
        <div
          style={{
            transform: `translate(${contextCoordinate.x}px, ${contextCoordinate.y}px`,
          }}
          className={`py-1 px-4 bg-white w-[200px] shadow-md  absolute top-0 left-0 rounded-md context-menu `}
        >
          {toolbarProps.map((tool, i) => {
            if (tool?.children?.length) {
              return (
                <div
                  key={i}
                  className={`${tool.children?.length ? "group" : ""
                    } relative border-b pb-1 border-1 hover:bg-gray-100 flex items-center justify-between`}
                >
                  {/* <button>{tool?.name}</button> */}
                  {tool.type === "folder" ? (
                    <button onClick={handleNewFolder}>{tool.name}</button>
                  ) : (
                    <button>{tool.name}</button>
                  )}
                  <HiChevronRight />

                  {/* <div className=" absolute -right-14 top-0 bg-white p-5 hidden group-hover:block"></div> */}
                  {tool?.children?.length > 0 && (
                    <div className="absolute -right-40 top-0 rounded-md bg-white p-5 hidden group-hover:block">
                      {tool.children.map((child, index) => (
                        <div
                          key={index}
                          className="border-b pb-1 border-1 hover:bg-gray-100"
                        >
                          <button>{child.name}</button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <div
                key={i}
                className="  border-b pb-1 border-1 hover:bg-gray-100"
              >
                <button onClick={handleNewFolder}>{tool?.name}</button>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default View;