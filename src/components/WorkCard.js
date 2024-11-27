import { SquareArrowOutUpRight } from 'lucide-react';
import WorkCardImg from '../assets/WorkCardImg.png';
import { buttons } from '../constants';
import { Button } from './Button';

const WorkCard = () => {
  return (
    <div className="flex flex-col items-center md:flex md:flex-row md:justify-center md:mb-12 mb-6 md:[&:nth-child(even)]:flex-row-reverse ">
      <div className="dark:bg-[#374151] bg-gray-100 p-8 rounded-t-lg w-[343px] h-[256px] md:min-h-[480px] md:min-w-[576px] md:rounded-none md:rounded-l-lg shadow-lg ">
        <img
          className="size-full rounded-lg"
          src={WorkCardImg}
          alt="WorkCardImg"
        ></img>
      </div>
      <div className="dark:bg-[#1F2937] p-8 md:p-8 w-[343px] md:h-[480px] md:w-[576px] shadow-lg rounded-b-lg md:rounded-none md:rounded-r-lg">
        <h1 className="pt-8 dark:text-[#F9FAFB] text-gray-900 text-lg font-bold mb-6">
          Fiskil
        </h1>
        <p className="text-base dark:text-[#D1D5DB] text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec
          urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae.
        </p>
        <div className="flex flex-wrap mb-6 gap-2">
          {buttons.map((el) => {
            return <Button name={el} />;
          })}
        </div>
        <SquareArrowOutUpRight className="text-gray-600" />
      </div>
    </div>
  );
};
export default WorkCard;
