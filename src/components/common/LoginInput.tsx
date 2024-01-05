export default function LoginInput() {
  return (
    <div className="flex flex-col text-gray-800 font-sans">
      <div className="text-left pb-5 pl-3 text-base font-black">아이디</div>
      <div>
        <input
          placeholder="영문 + 숫자"
          className="bg-gray-100 w-80 pr-5 pl-4 py-2.5 text-base text-black shadow-inner border-2 focus:outline-none focus:border-green-600 rounded-xl"
        ></input>
      </div>
    </div>
  );
}
