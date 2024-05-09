export default function FormInput(props) {
  return (
    <div className="p-5 m-[5px] ">
      <input 
      className="h-8 w-[300px] outline-none bg-input rounded-lg p-2 shadow-2xl"
      ref={props.refer} 
      placeholder={props.placeholder} />
    </div>
  );
}
