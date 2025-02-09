import Image from "next/image";
import monir from "../assets/images/Monirul.jpg";

const Intro = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-6 p-6 bg-gray-100 dark:bg-gray-900 rounded-2xl shadow-lg">
      {/* Profile Picture */}
      <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
        <Image
          src={monir}
          alt="Monirul Hassan"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="text-center md:text-left max-w-xl">
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
      </div>
    </section>
  );
};

export default Intro;
