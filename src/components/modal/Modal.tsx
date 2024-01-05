import React from 'react';

export default function Modal() {
  return (
    <>
      <div className="flex flex-col justify-center w-[31.25rem] h-[31.35rem] bg-slate-400">
        <p className="font-cafe text-center">
          오늘 하루 어떤 기분이었는지 말해줘
        </p>
        <div className="flex justify-center">
          <img className="w-32" src="https://ifh.cc/g/a8JKwo.png" alt="" />
          <img className="w-32" src="https://ifh.cc/g/13Ktbk.png" alt="" />
          <img className="w-32" src="https://ifh.cc/g/pscoAZ.png" alt="" />
        </div>
        <button className='bg-rose-400'>확인</button>
      </div>
    </>
  );
}
