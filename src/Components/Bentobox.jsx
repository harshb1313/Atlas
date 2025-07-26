import img1 from "../assets/ig1.png"
import img2 from "../assets/ig2.png"
import img3 from "../assets/ig3.png"
import img4 from "../assets/ig4.png"


const BentoBox = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4 max-w-6xl mx-auto">
            {/* Large Image - spans 2 rows */}
            <div className="relative group row-span-2 col-span-2 md:col-span-1 overflow-hidden rounded-2xl">
                {/* Image with zoom on hover */}
                <img
                    src={img1}
                    alt="Language Explorer"
                    className="w-full h-full object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-300"
                />

                {/* Overlay disappears on hover */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-300 rounded-2xl flex items-center justify-center">
                    {/* Text hides on hover */}
                    <span className="text-white text-2xl font-semibold group-hover:hidden">
                        Language Explorer
                    </span>
                </div>
            </div>

            {/* Top Right */}
            <div className="relative group overflow-hidden rounded-2xl">
                {/* Image with zoom effect */}
                <img
                    src={img2}
                    alt="People & Cities"
                    className="w-full h-full object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-300"
                />

                {/* Overlay fades out on hover */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-300 rounded-2xl flex items-center justify-center">
                    {/* Text hides on hover */}
                    <span className="text-white text-lg font-medium group-hover:hidden">
                        People & Cities
                    </span>
                </div>
            </div>
            {/* Bottom Right */}
            <div className="relative group overflow-hidden rounded-2xl">
                <img
                    src={img3}
                    alt="Languages"
                    className="w-full h-full object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-300 rounded-2xl flex items-center justify-center ">
                <span className="text-white text-lg font-medium ">
                    Flag facts
                </span>
                </div>
            </div>

            {/* Full-Width Box Below */}
            <div className="relative col-span-2 group overflow-hidden rounded-2xl">
                <img
                    src={img4}
                    alt="People & Cities"
                    className="w-full h-64 object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-300 rounded-2xl flex items-center justify-center">
                <span className=" text-white text-xl font-semibold group-hover:hidden">Global Info</span>
                    
                </div>
            </div>
        </div>
    );
};

export default BentoBox;
