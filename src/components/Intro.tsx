import Image from "next/image";
import monir from "../assets/images/Monirul.jpg";
import Link from "next/link";
import * as motion from "motion/react-client"

const Intro = () => {
  const ball = {
    width: 320,
    height: 320,
    borderRadius: "50%",
    background: "var(--accent)",
}
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center gap-6 p-6 bg-gray-100 dark:bg-gray-700 rounded-2xl shadow-lg">
      {/* Profile Picture */}
      <motion.div style={ball}
            initial={{ opacity: 0, scale: .5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
            }} className="w-80 h-80 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg lg:mr-12">
        <Image
          src={monir}
          alt="Monirul Hassan"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Text Section */}
      <div className=" max-w-xl">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Monirul Hassan
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          I am a passionate **Fullstack Web Developer** with expertise in
          **JavaScript, React JS, Next JS, Redux, Node JS, Express, MongoDB,
          Tailwind CSS, and modern web technologies**. I enjoy crafting
          interactive, user-friendly web applications that provide seamless
          experiences. My goal is to build **efficient, scalable, and visually
          appealing web solutions** that make an impact.
        </p>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          With experience in **Firebase Authentication, React Router, Node.js,
          Express, and MongoDB**, I develop full-stack applications that blend
          functionality with aesthetics. I have worked on various projects, from
          **e-commerce platforms** to **volunteer management systems**.
        </p>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Beyond coding, I love **exploring new technologies, contributing to
          open-source projects, and continuously improving my skills**. Lets
          connect and build something amazing together!
        </p>
        <Link href="https://drive.google.com/file/d/1GgdsvvmJ1ZMSUPqjwk_HNX0FtByp1q-N/view?usp=drive_link" target="_blank">
        <button className="text-white mt-2 bg-[#e67e22]  px-4 py-2  flex items-center gap-4 rounded-lg">
          Download Resume
        </button>
        </Link>
      </div>
    </section>
  );
};

export default Intro;
