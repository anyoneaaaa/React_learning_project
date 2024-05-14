import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, set_length] = useState(8);
  const [number_allowed, set_number_allowed] = useState(false);
  const [spical_char, set_spical_char] = useState(false);
  const [password, set_password] = useState("");
  const password_ref = useRef(null);
  const password_genrator = useCallback(() => {
    let pass = "";
    let str = "AYUSHayush";
    if (number_allowed) str += "0123456789";
    if (spical_char) str += "!@#$%^&*()";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    set_password(pass);
  }, [length, number_allowed, spical_char, set_password]);

  useEffect(() => {
    password_genrator();
  }, [length, number_allowed, spical_char, password_genrator]);
  const copy_to_cilp = useCallback(() => {
    password_ref.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password]);
  return (
    <>
      <div className="h-auto text-white bg-gray-700 px-10 rounded-xl mx-10 my-20 py-10">
        <h1 className="mb-2 text-center capitalize text-white">
          password genrater
        </h1>
        <div className="">
          <div className="flex px-10 py-5">
            <input
              type="text"
              value={password}
              className=" w-full rounded-l-md outline-none py1 px-3 text-black"
              placeholder="password"
              ref={password_ref}
              readOnly
            />
            <button
              onClick={copy_to_cilp}
              className=" bg-blue-500 text-white capitalize px-3 py-1 rounded-r-md"
            >
              copy
            </button>
          </div>
          <div className="flex px-10 text-sm gap-5">
            <div className="flex items-center gap-1">
              <input
                type="range"
                min={6}
                max={20}
                value={length}
                className=" cursor-pointer"
                onChange={(e) => {
                  set_length(e.target.value);
                }}
              />
              <label className=" capitalize">length : {length}</label>
            </div>
            <div className="flex items-center gap-1">
              <input
                type="checkbox"
                name=""
                id="numberinput"
                defaultChecked={number_allowed}
                onChange={() => {
                  set_number_allowed((Previous) => !Previous);
                }}
              />
              <label className=" capitalize">numbers</label>
            </div>
            <div className="flex items-center gap-1">
              <input
                type="checkbox"
                name=""
                id="spicalinput"
                defaultChecked={spical_char}
                onChange={() => {
                  set_spical_char((Previous) => !Previous);
                }}
              />
              <label className=" capitalize">spacial character</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
