import React from "react";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
const features = [
  {
    name: "افزایش سرعت پردازش کالا ها تا ۲ برابر!",
    description:
      "با انبار دار هوشمند ، میتونی سرعت پردازش کالاهات رو چند برابر کنی اینطوری سرعت ارسال هات هم چند برابر میشه!",
    imageSrc: "/images/speed.jpg",
    imageAlt: "انبار داری",
  },
  {
    name: "امنیت انبارت رو بیشتر کن!",
    description:
      "به دلیل هوشمند سازی فرایند ها امنیت انبار شما افزایش خواهد یافت!",
    imageSrc: "/images/security.jpg",
    imageAlt: "security",
  },
  {
    name: "نیرو های انسانیت رو کم کن",
    description:
      "با انبار دار هوشمند و استفاده از هوش مصنوعی ، بذون نیروی انسانی ، انبارت رو مدیریت کن",
    imageSrc: "/images/store.png",
    imageAlt: "person",
  },
];
export default function Feature() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            ویژگی های سروریس
          </h2>
        </div>

        <div className="mt-16 space-y-16">
          {features.map((feature, featureIdx) => (
            <div
              key={feature.name}
              className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
            >
              <div
                className={classNames(
                  featureIdx % 2 === 0
                    ? "lg:col-start-1"
                    : "lg:col-start-8 xl:col-start-9",
                  "mt-6 lg:col-span-5 lg:row-start-1 lg:mt-0 xl:col-span-4"
                )}
              >
                <h3 className="text-lg font-medium text-gray-900">
                  {feature.name}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {feature.description}
                </p>
              </div>
              <div
                className={classNames(
                  featureIdx % 2 === 0
                    ? "lg:col-start-6 xl:col-start-5"
                    : "lg:col-start-1",
                  "flex-auto lg:col-span-7 lg:row-start-1 xl:col-span-8"
                )}
              >
                <div className="aspect-h-2 aspect-w-5 overflow-hidden rounded-lg bg-gray-100">
                  <img
                    src={feature.imageSrc}
                    alt={feature.imageAlt}
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
