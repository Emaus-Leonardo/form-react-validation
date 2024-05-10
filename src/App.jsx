import { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FormInput from "./components/FormInput.jsx";

function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const formRef = useRef(null); // Referência para o formulário

  const input = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
      required: true,
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      label: "Confirm Password",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries()));
  
    // Resetando o formulário
    formRef.current.reset();

    setValues({
      username: "",
      email: "",
      birthday: "",
      password: "",
      confirmPassword: "",
    });
  
    toast.success("Formulário enviado com sucesso!");
  };
  
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col bg-white rounded-xl p-5 shadow-xl"
      >
        <div className="flex  gap-1 ">
          <div className="rounded-full w-2 h-2 bg-green-500"></div>
          <div className="rounded-full w-2 h-2 bg-red-500"></div>
          <div className="rounded-full w-2 h-2 bg-yellow-400"></div>
        </div>
        <h1 className="font-bold flex justify-center text-[22px]">
          Form Register
        </h1>
        <div>
          {input.map((inputField) => (
            <FormInput
              key={inputField.id}
              name={inputField.name}
              value={values[inputField.name]}
              onChange={handleChange}
              {...inputField}
            />
          ))}
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 transition-all flex justify-center items-center w-full text-white font-bold py-2 px-4 rounded mt-4 self-center">
          Submit
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default App;
