import { MdRecordVoiceOver } from "react-icons/md";
import React, {useState} from "react";


// const userListHRm = [
//   {
//     id: 1,
//     name: '',
//     message: ''
//   },
//   {
//     id: 2,
//     name: '',
//     message: ''
//   },
//   {
//     id: 3,
//     name: '',
//     message: ''
//   },
//   {
//     id: 4,
//     name: '',
//     message: ''
//   }
// ]


function HelpRoom() {
  const [userList, SetUserList] = useState('');

  function handleChange(e) {
    SetUserList(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className="borderApp">
      <h3><span className="miniAvatar"><MdRecordVoiceOver/></span>
      Ashton: <br/>new message</h3>
      <hr/>
      <br/>
      <h3>
      <span className="miniAvatar"><MdRecordVoiceOver/></span>
      Jane: <br/>new message</h3>
      <hr/>
      <br/>
      <h3>
      <span className="miniAvatar"><MdRecordVoiceOver/></span>
      Ashton: <br/>new message</h3>
      <hr/>
      <br/>
      <h3>
      <span className="miniAvatar"><MdRecordVoiceOver/></span>
      Adam: <br/>new message</h3>
      <hr/>
      <br />
      <br />

      <form>
        <button>
          <i className="fa fa-send"></i>
        </button>
        <input placeholder="Make a new post here" />
      </form>
      <br />
    </div>
  );
}

export default HelpRoom;
