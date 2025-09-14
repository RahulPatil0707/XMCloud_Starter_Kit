import React from 'react';
import { JSX } from 'react';
import { Field, Text, Image as SitecoreImage, ImageField } from '@sitecore-jss/sitecore-jss-nextjs';

type HeroBannerProps = {
  fields: {
    Heading: Field<string>;
    SubHeading: Field<string>;
    BannerImage: Field<string>;
    Image1: ImageField;
  };
};

const HeroBanner = ({ fields }: HeroBannerProps): JSX.Element => {
  return (
   <section className="relative flex flex-col md:flex-row items-center justify-between p-10 bg-gray-100">
  {/* Left side content */}
  <div className="flex-1 text-left mb-6 md:mb-0 md:pr-10">
    <h1 className="text-4xl font-bold mb-2">
      <Text field={fields.Heading} />
    </h1>
    <p className="text-lg text-gray-600 mb-4">
      <Text field={fields.SubHeading} />
    </p>
    <div className="text-red-600 font-medium">
      <Text field={fields.BannerImage} />
    </div>
  </div>

  {/* Right side image */}
  <div className="flex-1 flex justify-center">
    <SitecoreImage
      field={fields.Image1}
      className="rounded-xl shadow-md"
      width={400}
      height={300}
    />
  </div>
</section>

  );
};

export default HeroBanner;