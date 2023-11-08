import React, { useState, useRef } from 'react';
 
function Search() {
  const [inputs, setInputs] = useState({
    names: '',
    nickname: ''
}); // input DOM을 초기화 하기 위한 useState
 
  const nameInput = useRef(); // Input DOM에 접근하기 위한 ref 선언
 
  const { names, nickname } = inputs; // 비구조화 할당을 통해 값 추출
 
const onChange = e => {
  // 값이 변경될 때의 이벤트
    const { value, name } = e.target; // 우선 input DOM의 e.target 에서 name 과 value 를 추출합니다.
    // 추출한 name과 value 값을 setInputs에 적용합니다.
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤(spread 사용)
      [name]: value // input DOM에서 name과 같은 키를 가진 DOM의 value를 초기화
    });
  };
 
  const onReset = () => {
    setInputs({
      names: '',
      nickname: ''
    });
    nameInput.current.focus(); // Input DOM에 현재 포커스를 지정합니다.
  };
 
  return (
    <div>
      <input
        name="names"
        placeholder="이름"
        onChange={onChange}
        value={names}
        ref={nameInput}
      />
      <input
        name="nickname"
        placeholder="닉네임"
        onChange={onChange}
        value={nickname}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {names} ({nickname})
      </div>
    </div>
  );
}
export default Search;