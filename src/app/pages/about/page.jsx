import React from "react";

const About = () => {
  const shadowStyle = "0px 4px 8px rgba(255, 255, 255, 0.8)";

  return (
    <div
      id="about"
      className="min-h-screen flex flex-col justify-center items-center bg-black text-white"
    >
      <div
        className="max-w-4xl w-full bg-black p-8 rounded-lg shadow-lg mb-6"
        style={{ boxShadow: shadowStyle }}
      >
        <h1 className="text-3xl font-bold mb-6 text-center">About Crescent</h1>
        <p className="text-lg mb-4">
          Established in 1984, B.S. Abdur Rahman Crescent Institute of Science
          and Technology, situated in Chennai near Tambaram, is a distinguished
          institution with a 38-year legacy of academic excellence. Our
          intellectual hub challenges conventional thinking, fostering a passion
          for redefining learning. With top-notch education, a green campus, and
          vibrant student life, we provide a conducive environment for holistic
          development.
        </p>
        <p className="text-lg">
          Our diverse educational programs and student development clubs create
          a community that nurtures personal and professional growth, making our
          institution a lifelong home.
        </p>
      </div>

      <div
        className="max-w-4xl w-full bg-black p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center mb-6"
        style={{ boxShadow: shadowStyle }}
      >
        <div className="md:w-1/2 mb-4 md:mb-0">
          <h1 className="text-3xl font-bold mb-4 md:mb-6">About Us</h1>
          <p className="text-lg mb-4">
            ICON, an annual National-level symposium, is meticulously organized
            by the professional society "Society of Information Technologists
            (SIT)," as a platform to elevate the technical skills of students.
            This symposium, hosted by the department, serves as a dynamic arena
            for knowledge exchange and skill enhancement, fostering a vibrant
            community of Information Technology enthusiasts.
          </p>
          <p className="text-lg">
            Join us at ICON to engage with cutting-edge insights, network with
            industry experts, and empower your journey in the ever-evolving
            field of technology.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://images.collegedunia.com/public/college_data/images/campusimage/1584955750DSC_0100.JPG"
            alt="College Image"
            className="w-full h-48 object-cover mb-4 rounded-md"
            style={{ boxShadow: shadowStyle }}
          />
          <p className="text-center text-sm text-gray-500">
            Photo by B.S. Abdur Rahman Crescent Institute of Science and
            Technology
          </p>
        </div>
      </div>

      <div
        className="max-w-4xl w-full bg-black p-8 rounded-lg shadow-lg mb-6"
        style={{ boxShadow: shadowStyle }}
      >
        <h1 className="text-2xl font-bold mb-6 text-center">Sponsors</h1>
        <div className="flex justify-around">
          <img
            src="https://media.istockphoto.com/id/881120664/photo/become-a-sponsor-written-on-business-card.jpg?s=612x612&w=0&k=20&c=2i55Tce2of6U37jJYrcb9t_3YHbzQux-q8zG-V2klt0="
            alt="Sponsor 1"
            className="w-32 h-32 object-contain mb-4"
          />

          <img
            src="https://media.istockphoto.com/id/881120664/photo/become-a-sponsor-written-on-business-card.jpg?s=612x612&w=0&k=20&c=2i55Tce2of6U37jJYrcb9t_3YHbzQux-q8zG-V2klt0="
            alt="Sponsor 2"
            className="w-32 h-32 object-contain mb-4"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
