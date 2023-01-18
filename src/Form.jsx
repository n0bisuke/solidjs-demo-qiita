import { createSignal, createResource} from 'solid-js';

const fetchUser = async (id) => {
  console.log(`Fetch Data`);
  return (await fetch(`https://qiita.com/api/v2/users/${id}`)).json();
}

function Form() {
  const [userId, setUserId] = createSignal('n0bisuke');
  const [user] = createResource(userId, fetchUser);

  let input;

  return (
    <>
      <input type="text" placeholder="Qiita User Id" ref={input} value={userId()} />
      <button onClick={()=> setUserId(input.value.trim())}>取得</button>

      <span>{user.loading && "Loading..."}</span>
      <div>
        <pre>{JSON.stringify(user(), null, 2)}</pre>
      </div>
  </>
  );
}

export default Form;