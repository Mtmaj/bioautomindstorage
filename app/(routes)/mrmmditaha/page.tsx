import { ChevronLeftIcon } from "@heroicons/react/20/solid";
const Line = () => {
  return (
    <div className="w-full bg-[url('/images/line.svg')] h-[50px] object-cover bg-no-repeat"></div>
  );
};

const people = [
  {
    name: "ایمیل",
    email: "majidimohamad1387@gmail.com",
    imageUrl: "/images/gmail.png",
    href: "https://gamil.com/majidimohamad1387@gmail.com",
  },
  {
    name: "گیت هاب",
    email: "Mtmaj",
    imageUrl: "/images/github.png",
    href: "https://github.com/Mtmaj",
  },
  {
    name: "تلگرام",
    email: "@mrmmdi0",
    imageUrl: "/images/telegram.png",
    href: "https://t.me/mrmmdi0",
  },
];
export default function UserPage() {
  return (
    <div className="w-full h-full overflow-y-scroll flex flex-col items-center bg-bg-wave bg-no-repeat bg-cover">
      <div className="w-full text-white p-[40px] bg-[#009473]">
        <div className="flex items-center">
          <div className="ml-4 flex-shrink-0">
            <img
              src="/images/mrmmdi.jpg"
              className="h-[80px] w-[80px] object-cover rounded-full"
            />
          </div>
          <div>
            <h4 className="text-md font-bold">محمد طه مجیدی</h4>
            <p className="mt-1 text-sm text-gray-50">
              برنامه نویس حوزه فرانت اند و عاشق تکنولوژی.علاقه مند به رشته هوش
              مصنوعی و توسعه دهنده هوش مصنوعی انباردار
            </p>
          </div>
        </div>
      </div>
      <Line />
      <ul
        role="list"
        className="divide-y lg:w-[800px] sm:w-[500px] w-[95%] mt-[40px] divide-gray-100 overflow-hidden bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl rounded-xl"
      >
        {people.map((person) => (
          <li
            key={person.email}
            className="relative flex justify-between gap-x-6 px-4 py-5 hover:bg-gray-50 sm:px-6"
          >
            <div className="flex min-w-0 gap-x-4">
              <div className="overflow-hidden w-12 h-12 rounded-full">
                <img
                  className={`h-12 w-12 overflow-hidden ${
                    person.name == "تلگرام" ? "scale-[2.47]" : "scale-[2.2]"
                  } flex-none rounded-full bg-gray-50`}
                  src={person.imageUrl}
                  alt=""
                />
              </div>
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  <a href={person.href}>
                    <span className="absolute inset-x-0 -top-px bottom-0" />
                    {person.name}
                  </a>
                </p>
                <p className="mt-[1px] flex text-xs leading-5 text-gray-500">
                  <a
                    href={`mailto:${person.email}`}
                    className="relative truncate hover:underline"
                  >
                    {person.email}
                  </a>
                </p>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-x-4">
              <ChevronLeftIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
