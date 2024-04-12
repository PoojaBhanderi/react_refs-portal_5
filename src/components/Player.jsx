// import { useState } from 'react';
// export default function Player() {

//   const [enterPlayerName, setEnterPlayerName] = useState('');
//   const [submitted, setSubmitted] = useState(false);

//   function handleChange(event) {
//     setSubmitted(false);
//     setEnterPlayerName(event.target.value);
//   }

//   function handleOnClick() {
//     setSubmitted(true);
//   }

//   return (
//     <section id="player">
//       <h2>Welcome {submitted ? enterPlayerName : 'unknown entity'}</h2>
//       <p>
//         <input type="text" onChange={handleChange} value={enterPlayerName} />
//         <button onClick={handleOnClick}>Set Name</button>
//       </p>
//     </section>
//   );
// }

import { useState, useRef } from 'react';

export default function Player() {
  const playerName = useRef();

  const [enterPlayerName, setEnterPlayerName] = useState(null);

  function handleOnClick() {
    setEnterPlayerName(playerName.current.value);
    playerName.current.value = '';
  }

  return (
    <section id="player">
      <h2>Welcome {enterPlayerName ?? 'unknown entity'}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleOnClick}>Set Name</button>
      </p>
    </section>
  );
}
