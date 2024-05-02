const incentives = [
  {
    name: "0",
    imageSrc: "/images/mind.png",
    description: "انبار های در حال همکاری",
  },
  {
    name: "0",
    imageSrc: "/images/traffic.png",
    description: "تعداد تراکنش های انجام شده تا الان",
  },
  {
    name: "0",
    imageSrc: "/images/users.png",
    description: "کاربران در حال استفاده",
  },
];

export default function Bussines() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gray-50 px-6 py-16 sm:p-16">
          <div className="mx-auto max-w-xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                انبار دار هوشمند چیست؟
              </h2>
            </div>
            <p className="text-center text-gray-600 text-[14px] mx-auto lg:w-[800px] w-full my-5">
              سیستمی هوشمند و مجهز به هوش مصنوعی جهت مدیریت انبار
            </p>
            <div className="mx-auto mt-12 grid max-w-sm grid-cols-1 gap-x-8 gap-y-10 sm:max-w-none lg:grid-cols-3">
              {incentives.map((incentive) => (
                <div
                  key={incentive.name}
                  className="text-center block lg:text-center"
                >
                  <div className="sm:flex-shrink-0">
                    <div className="flow-root">
                      <img
                        className="mx-auto h-[100px] w-[100px]"
                        src={incentive.imageSrc}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="mt-3   lg:ml-0 lg:mt-6">
                    <h3 className=" text-sm text-gray-500">{incentive.name}</h3>
                    <p className="text-sm mt-2 font-medium text-gray-900">
                      {incentive.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
