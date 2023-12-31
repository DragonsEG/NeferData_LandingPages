import PropTypes from 'prop-types';
import { MdOutlineDone } from 'react-icons/md'
import Button from '../Button/PrimaryButton';

/**
 * PricingCard component renders a card displaying different pricing options.
 * It receives properties like className, title, price, renew, features, and buttonText.
 * Adheres to WCAG guideline 1.3.1 (Info and Relationships) because the information,
 * structure, and relationships can be programmatically determined or are available in text.
 *
 * @param {Object} props Component properties
 * @returns {JSX.Element} Rendered PricingCard component
 */
const PricingCard = ({ className, title, price, renew, features, buttonText }) => {
  return (
    <div className={`bg-white w-80 border-2  hover:scale-105 duration-500 cursor-pointer xl:w-96 rounded-3xl  px-5 pt-8 pb-8 relative overflow-hidden ${className}`}>
      <svg className="absolute -top-20 -right-36 rotate-[300deg]" xmlns="http://www.w3.org/2000/svg" width={299} height={317} fill="none">
        <path fill="url(#a)" d="m299 317-198.88-34.078C42.42 273.076 0 220.333 0 158.45 0 96.56 42.42 43.824 100.113 33.978L299 0v317Z" />
        <defs>
          <radialGradient id="a" cx={0} cy={0} r={1} gradientTransform="matrix(318.993 0 0 337.284 -17.549 158.468)" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E2FF66" />
            <stop offset=".494" stopColor="#5ADAFF" stopOpacity=".61" />
            <stop offset={1} stopColor="#5ADAFF" stopOpacity={0} />
          </radialGradient>
        </defs>
      </svg>
      <div className='z-20 relative'>
        <h2 className="text-lg tracking-wider z-20 text-slate-600 mb-2">{title}</h2>
        <span className="text-6xl mb-2 tracking-wider text-bold inline-block ">{price}</span>
        <br />
        <span className="inline-block mb-4">{renew}</span>
        {features.map((feature, index) => (
          <div className="flex items-center gap-2 mb-2" key={index}>
            <MdOutlineDone className="text-sky-500 text-2xl" />
            <p className=" tracking-wide text-gray-700 text-sm text-bold">{feature}</p>
          </div>
        ))}

<div className='w-full grid place-items-center p-2'>
  <Button
    onClick={"/Docs"}
classes={`w-full max-w-[280px] py-4 ${buttonText === 'See Documentation' ? '!bg-transparent border-2 !text-black border-[#121212]/60 hover:!bg-sky-200 duration-500' : ''}`}
title={buttonText} 
  />
</div>
      </div>
    </div>
  );
};

PricingCard.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  renew: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  buttonText: PropTypes.string.isRequired
};

PricingCard.defaultProps = {
  className: '',
};

export default PricingCard;