export default function ContactUS() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h1 className="font-bold text-[30px] ml-[20px]">تماس با ما {":)"}</h1>
      <div className="grid grid-cols-3 grid-rows-3 items-center justify-center">
        <div className=""></div>
        <div className="flex items-center justify-center mb-[-40px]">
          <a href="/telegram">
            <img
              src="/images/telegram.png"
              className="object-contain w-[180px] h-[180px]"
            />
          </a>
        </div>
        <div className=""></div>
        <div>
          <a href="/github">
            <img
              src="/images/github.png"
              className="object-contain w-[140px] h-[140px] "
            />
          </a>
        </div>
        <div className="flex items-center justify-center">
          <img
            src="/images/robot.png"
            className="w-[100px] scale-[2.5] object-contain h-[100px] ml-[-20px]"
          ></img>
        </div>
        <div>
          <a href="/whatsapp">
            <img
              src="/images/whatsapp.png"
              className="object-contain w-[170px] h-[170px]"
            />
          </a>
        </div>
        <div></div>
        <div>
          <a href="/gmail">
            <img
              src="/images/gmail.png"
              className="object-contain w-[170px] h-[170px]"
            />
          </a>
        </div>
        <div></div>
      </div>
    </div>
  );
}
