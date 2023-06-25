const PersonalDetails = () => {
  return (
    <>
      <form className="flex flex-col w-3/4 p-20 mx-16 text-2xl bg-white rounded-3xl gap-y-14">
        <div className="flex items-center justify-between w-3/4 gap-20">
          <label for="name">Name </label>
          <input
            type="text"
            id="name"
            className="p-4 border-2 border-black border-solid rounded-xl"
            value="john doe"
            disabled
          ></input>
        </div>
        <div className="flex items-center justify-between w-3/4 gap-20">
          <label for="age">Age</label>
          <input
            type="number"
            id="age"
            className="p-4 border-2 border-black border-solid rounded-xl"
            value="42"
            disabled
          ></input>
        </div>
        <div className="flex items-center justify-between w-3/4 gap-20">
          <label for="mail">E-Mail</label>
          <input
            type="email"
            id="mail"
            className="p-4 border-2 border-black border-solid rounded-xl"
            value="john562@gmail.com"
          ></input>
        </div>
        <div className="flex items-center justify-between w-3/4 gap-20">
          <label for="score">Credit Score</label>
          <input
            type="number"
            id="score"
            className="p-4 border-2 border-black border-solid rounded-xl"
            value="838"
            disabled
          ></input>
        </div>
      </form>
    </>
  );
};

export default PersonalDetails;
