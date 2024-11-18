import React from "react";
import { LuFiles } from "react-icons/lu";
import { FaFileDownload } from "react-icons/fa";
import { CgUnavailable } from "react-icons/cg";
import { motion } from "framer-motion"
const Card = ({ documents , reference }) => {
    return (
        <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} className="h-72 w-56 bg-zinc-700 rounded-[20px] relative overflow-hidden text-white p-5 font-semibold shadow-lg">
            {/* Icon */}
            <div className="text-2xl">
                <LuFiles />
            </div>

            {/* Title */}
            <h1 className="py-5 text-lg font-bold truncate">{documents.title}</h1>

            {/* Footer */}
            <div className="footer flex justify-between items-center py-12">
                <h4 className="text-sm">{documents.fileSize}</h4>
                {
                    documents.isAvailable ? (
                        <FaFileDownload className="text-xl cursor-pointer" />
                    ) : (
                        <CgUnavailable className="text-xl cursor-pointer" />
                    )
                }
            </div>

            {/* Availability Section */}
            <div
                className={`absolute w-full h-14 left-0 bottom-0 flex items-center justify-center ${documents.isAvailable ? "bg-green-500" : "bg-red-500"
                    }`}
            >
                <h4 className="text-white text-base">
                    {documents.isAvailable ? "Download" : "Unavailable"}
                </h4>
            </div>
        </motion.div>
    );
};

export default Card;
