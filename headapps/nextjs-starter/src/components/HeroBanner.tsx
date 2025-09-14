import React from "react";
import { Field, Text, Image } from '@sitecore-jss/sitecore-jss-nextjs';

type HeroBannerProps = {
  fields: {
    Heading: Field<string>;
    SubHeading: Field<string>;
    BannerImage: Field<string>;
  };
};

const HeroBanner = ({ fields }: HeroBannerProps): JSX.Element => {
  return (
    <section className="relative flex flex-col items-center justify-center text-center p-10 bg-gray-100">
      <div className="mb-6">
        {/* <Image field={fields.BannerImage} className="rounded-xl shadow-md max-h-96 w-auto" />  */}
         <Text field={fields.BannerImage} />
      </div>
      <h1 className="text-4xl font-bold mb-2">
        <Text field={fields.Heading} />
      </h1>
      <p className="text-lg text-gray-600">
        <Text field={fields.SubHeading} />
      </p>
    </section>
  );
};

export default HeroBanner;