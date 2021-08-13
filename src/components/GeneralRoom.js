import { MdRecordVoiceOver } from "react-icons/md";
import React, {useState} from "react";


// const userListGRm = [
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

function GeneralRoom() {
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
      Steve: <br/>new message</h3>
      <hr/>
      <br/>
      <h3>
      <span className="miniAvatar"><MdRecordVoiceOver/></span>
      Lilith: <br/>new message</h3>
      <hr/>
      <br/>
      <h3>
      <span className="miniAvatar"><MdRecordVoiceOver/></span>
      David: <br/>new message</h3>
      <hr/>
      <br/>
      <h3>
      <span className="miniAvatar"><MdRecordVoiceOver/></span>
      Andy: <br/>new message</h3>
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

export default GeneralRoom;
