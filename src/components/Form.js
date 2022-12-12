import { Draggable, Droppable } from 'react-drag-and-drop'




const Form = () => {
  return (
    <div className="flex-col w-full justify-between text-white">
      <div className="articl flex-col items-center justify-between">
        <div className="DND w-full flex">
                
        </div>
        <div className="flex-col justify-between">
          <input className="title" placeholder="Write your Title Here..." />
          <input className="price" placeholder="Write the Price Here..." />
          <input className="sub" placeholder="Write the Caption Here..." />
        </div>
      </div>
      <div className="side">
        <div>
          <ul>
            <li>Users</li>
            <li>Articles</li>
            <li>Admin Access</li>
            <li>Read Only</li>
            <li>Passwords</li>
            <li>Server</li>
          </ul>
        </div>
      </div>
    </div>
  );
};


export default Form;
