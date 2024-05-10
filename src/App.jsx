import { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FormInput from "./components/FormInput.jsx";

function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    assunto: "",
    mensagem: "",
  });

  const formRef = useRef(null);

  const input = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
      riquired: true,

    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "Email",
      riquired: true,
    },
    {
      id: 5,
      name: "assunto",
      type: "text",
      placeholder: "Digite o Assunto",
      label: "Digite o Assunto",
      riquired: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verifica se todos os estão preenchidos
    const requiredFields = ["username", "email", "assunto", "mensagem"];
    const missingFields = requiredFields.filter((field) => !values[field]);
    if (missingFields.length > 0) {
      toast.error(`Por favor, preencha os campos: ${missingFields.join(", ")}`);
      return;
    }

    const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries()));

    // Reset dos campos
    formRef.current.reset();

    setValues({
      username: "",
      email: "",
      assunto: "",
      mensagem: "",
    });

    toast.success("Formulário enviado com sucesso!");
  };

  const handleChange = (e) => {
    if (e.target.name === "textareaValue") {
      setValues({ ...values, textareaValue: e.target.value });
    } else {
      setValues({ ...values, [e.target.name]: e.target.value });
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col bg-white rounded-xl p-5 shadow-xl"
      >
        <div className="flex  gap-1 ">
          <div className="rounded-full w-2 h-2 bg-red-500"></div>
          <div className="rounded-full w-2 h-2 bg-yellow-400"></div>
          <div className="rounded-full w-2 h-2 bg-green-500"></div>
        </div>
        <h1 className="font-bold mb-5 flex justify-center text-[22px]">
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

        <label htmlFor="textareaValue" className="block  mb-1">
          Mensagem
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          value={values.mensagem}
          onChange={handleChange}
          placeholder="Digite sua mensagem..."
          className="w-full outline-none bg-fundo rounded p-2 "
        />

        <button className="bg-blue-500 hover:bg-blue-700 transition-all flex justify-center items-center w-full text-white font-bold py-2 px-4 rounded mt-10 self-center">
          Submit
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default App;
