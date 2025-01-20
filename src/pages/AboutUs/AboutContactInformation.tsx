import { HomeOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";

const AboutContactInformation = () => {
  return (
    <div className="dark:bg-slate-700 bg-gray-100">
      <div className="py-16 container mx-auto">
        <div className="mb-12 text-center">
          <h3 className="heading-title text-3xl font-bold text-darkViolet dark:text-cyanLight font-hero text-hero">
            Get in Touch
          </h3>
          <p className="heading-p text-lg text-gray-600 dark:text-gray-300 px-4 md:px-20 font-primary">
            Have questions or need help? We’re here for you. Reach out through
            the following contact methods, and we’ll respond promptly!
          </p>
        </div>

        {/* Contact us */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-8 text-gray-800 dark:text-cyanLight">
          {/* <!-- Phone --> */}
          <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg transition hover:shadow-xl hover:bg-blue-50 dark:hover:bg-slate-600">
            <div className="flex items-center space-x-6">
              <PhoneOutlined className="text-3xl p-2 bg-blue-100 text-blue-600 rounded-full dark:bg-cyan-700 dark:text-cyan-300" />
              <div>
                <p className="text-xl font-semibold font-title text-hero">Phone</p>
                <p className="text-md text-gray-700 dark:text-gray-300 font-primary">
                  +987 654 3210
                </p>
              </div>
            </div>
          </div>

          {/* <!-- Email --> */}
          <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg transition hover:shadow-xl hover:bg-blue-50 dark:hover:bg-slate-600">
            <div className="flex items-center space-x-6">
              <MailOutlined className="text-3xl p-2 bg-blue-100 text-blue-600 rounded-full dark:bg-cyan-700 dark:text-cyan-300" />
              <div>
                <p className="text-xl font-semibold font-title text-hero">Email</p>
                <p className="text-md text-gray-700 dark:text-gray-300 font-primary">
                  support@sportsbooking.com
                </p>
              </div>
            </div>
          </div>

          {/* <!-- Physical Address --> */}
          <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg transition hover:shadow-xl hover:bg-blue-50 dark:hover:bg-slate-600">
            <div className="flex items-center space-x-6">
              <HomeOutlined className="text-3xl p-2 bg-blue-100 text-blue-600 rounded-full dark:bg-cyan-700 dark:text-cyan-300" />
              <div>
                <p className="text-xl font-semibold font-title text-hero">Address</p>
                <p className="text-md text-gray-700 dark:text-gray-300 font-primary">
                  456 Sports Ave
                  <br />
                  New City, USA 65432
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContactInformation;
