import React from 'react';

const AboutUs = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-8 lg:flex lg:items-center">
        <div className="lg:w-1/2">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 text-gray-800 dark:text-white">
            Welcome to A.P.J. ABDUL KALAM DEGREE COLLEGE
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Situated in the serene landscapes of Pakri Deoraj, Ramnagar, Dist.- West Champaran-845103, A.P.J. ABDUL KALAM DEGREE COLLEGE is a beacon of academic excellence and personal growth.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            As an esteemed institution affiliated with B.R.A Bihar University, Muzaffarpur, we are dedicated to providing a holistic education that empowers our students to succeed in their chosen paths.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Our wide array of undergraduate courses, including B.Sc, B.Com, and B.A, are designed to prepare students for the challenges of the modern world while fostering critical thinking and innovation.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            Join us on a journey of intellectual exploration, personal growth, and endless possibilities. Experience education in its truest form at A.P.J. ABDUL KALAM DEGREE COLLEGE.
          </p>
        </div>
        <div className="lg:w-1/2 mt-10 lg:mt-0">
          <img
            src="apj10.jpg"
            alt="College Campus"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
