import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from './chapter_03/Library';
import Clock from './chapter_04/Clock';

// const root = ReactDOM.createRoot(document.getElementById('root'));

// setInterval(()=>{
//   root.render(
//     <React.StrictMode>
//       <Clock/>
//     </React.StrictMode>
//   );
// },1000);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// function Welcome(props){
//   return <h1>안녕, {props.name}</h1>
// }
// const element = <Welcome name="예원"/>;

// root.render(
//   element
// );

// function Comment(props){
//   return(
//     <div className='comment'>
//       <UserInfo user={props.author}/>
//       <div className='comment-text'>
//         {props.text}
//       </div>
//       <div className='comment-dtae'>
//         {formatDate(props.date)}
//       </div>
//     </div>
//   );
// }

// function Avatar(props){
//   return(
//     <img className='avatar'
//       src={props.user.avatarUrl}
//       alt={props.user.name}
//     />
//   );
// }

// function UserInfo(props){
//   return(
//     <div className='user-info'>
//       <Avatar user={props.user}/>
//       <div className='user-info-name'>
//         {props.user.name}
//       </div>
//     </div>
//   );
// }

import CommentList from './chapter_05/CommentList';
import NotificationList from './chapter_06/NotificationList';
// import Counter from './chapter_06/Counter';
import Search from './chapter_06/Search';
import Counter from './Counter';
import Apps from './exam/apps';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Apps/>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
