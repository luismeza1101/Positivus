import { motion } from "framer-motion";

interface Props {
  from: number | string;
  to: number | string;
  companies: string[];
}

const MarqueItems: React.FC<Props> = ({companies, from, to}) => {
  return (
    <div className="flex">
      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {companies.map((image, index) => {
          return <img className="h-20 w-56 pr-20" src={`/icons/companies/${image}.svg`} key={index} />;
        })}
      </motion.div>

      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {companies.map((image, index) => {
          return <img className="h-20 w-56 pr-20" src={`/icons/companies/${image}.svg`} key={index} />;
        })}
      </motion.div>
    </div>
  );
};

export default MarqueItems;
