import { motion } from "framer-motion";

const CardT = () => {
  const name = "Bernard Tappie"; // Example name
  const image = "https://res.cloudinary.com/dl2adjye7/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1711968499/Goldman_Sachs.svg_wbtwh9.png"; // Example image URL
  const description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est ipsum sed blanditiis iste molestias nemo nobis repellendus nisi dolorum itaque optio impedit cum voluptatem facilis minima, quasi laborum. Nihil, quaerat."; // Example description

  return (
    <div className="bg-slate-950 px-4 py-12">
      <ShimmerBorderCard name={name} image={image} description={description} />
    </div>
  );
};

const ShimmerBorderCard = ({ name, image, description }) => {
  return (
    <div className="group relative mx-auto w-full max-w-sm overflow-hidden rounded-lg bg-slate-800 p-0.5 transition-all duration-500 hover:scale-[1.01] hover:bg-slate-800/50 cursor-pointer">
      <div className="relative z-10 flex flex-col items-center justify-center overflow-hidden rounded-[7px] bg-slate-900 p-8 transition-colors duration-500 group-hover:bg-slate-800">
        <img className="w-full h-40 rounded-lg" src={image} alt={name} />

        <h4 className="relative z-10 mb-4 w-full text-2xl font-bold text-slate-50 mt-6 text-left">
          {name}
        </h4>
        <p className="relative z-10 text-slate-400 text-left">
          {description}
        </p>
      </div>

      <motion.div
        initial={{ rotate: "0deg" }}
        animate={{ rotate: "360deg" }}
        style={{ scale: 1.75 }}
        transition={{
          repeat: Infinity,
          duration: 3.5,
          ease: "linear",
        }}
        className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-200 via-indigo-200/0 to-indigo-200 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
    </div>
  );
};

export default CardT;
