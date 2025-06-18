// src/components/WorkHistory.tsx
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface WorkExperience {
  id: number;
  name: string;
  image: string;
  position: string;
  timeline: string;
  technology: string;
  description: string;
}

const workHistory: WorkExperience[] = [
  {
    id: 100,
    name: "Freelancing",
    image: "/harmony_development.png",
    position: "Software Engineer",
    timeline: "January 2019 - Present",
    technology: "Node JS, Typescript, C#, Android, Java, React, Docker, Digital Ocean, Heroku, postgres, MySQL, Wordpress, PHP",
    description: "I have built for various clients full dance payment and registration system with CMS for the user facing site and a financial advisor lead generator and distributor system. I have fixed an improved several Wordpress sites. I have also been hired for various bug fixes and small feature requests."
  },
  {
    id: 7,
    name: "IndeVets",
    image: "/indevets.webp",
    position: "Software Engineer",
    timeline: "March 2024 - Present",
    technology: "React, React Native, Typescript, GCP, Docker, Kubernetes, Helm, postgres, Radix, Tamagui",
    description: "I spearheaded the development of a comprehensive shared component library, enabling our engineering team to leverage cross-platform components with standardized branding across both web and native applications. This initiative significantly improved development velocity and ensured consistent user experiences across all platforms.\n\nLed the complete rebuild of our Hospital platform from the ground up, successfully launching the entire platform with virtually zero bugs and seamless user transition. The platform migration was executed flawlessly with no negative impact to end users, despite representing a complete technological overhaul. The new platform has received overwhelmingly positive feedback from users, particularly praising the enhanced calendar view and thoughtfully implemented micro-animations that create an intuitive and delightful user experience.\n\nServed as a technological leader within the team, mentoring peers and establishing development best practices that elevated code quality across projects. Provided technical guidance and problem-solving expertise to help team members overcome complex technical challenges, fostering a collaborative environment focused on continuous improvement and knowledge sharing."
  },
  {
    id: 6,
    name: "Gopuff",
    image: "/gopuff.jpg",
    position: "Software Engineer",
    timeline: "January 2022 - February 2024",
    technology: "Node JS, Typescript, Go, React, Azure, Docker, Kubernetes, Helm, Argo, postgres, cosmosdb",
    description: "I worked on building out the partner integrations between Gopuff and various partner vendors who want access to the Gopuff platform. I created the base template for all new work moving forward using docker for the entire development lifecycle including local development, linting, testing, etc. I created our CI/CD pipeline that allows for rapid development iteration and deploys our code using gitops managed by Argo to our Kubernetes cluster. Instrumental in triaging various production incedents and resolving them in a timely manner."
  },
  {
    id: 5,
    name: "Rakuten",
    image: "/rakuten.png",
    position: "Senior Software Engineer",
    timeline: "August 2019 - January 2022",
    technology: "Go, React, Vue, Typescript, GCP, Docker, Kubernetes, postgres, mysql",
    description: "I worked on a project during which I was working with React for the front end and Go for the backend. I established processes and patterns for the team to follow that increased our productivity and made our code base more maintainable. I also updated the deploy process and migrated from legacy deploy processes to containerized Kubernetes deployments. \n\nI then began work on a new team where I work with Vue on the front end and Go on the backend. I have led many team initiatives, dissecting the project and creating the technical documentation required for the team to begin work. After this project had two failed attempts by previous teams I was able to get the new team ramped up on the project and deliver the product within the required timeline."
  },
  {
    id: 4,
    name: "DealerSocket",
    image: "/dealersocket.webp",
    position: "Software Engineer II",
    timeline: "April 2018 - August 2019",
    technology: "C#, React, AngularJS, Java, AWS, Kafka, Docker, SQL Server",
    description: "I worked closely with the Front End architect to implement React Redux into our main Front End repository. I also helped create the React Redux template for all future front end repositories to implement.\n\nI was picked to be moved to the search team due to my previous successes at the company where I learned Kafka, ElasticSearch, AWS, Docker, and DevOps. I have been involved in setting up the core infrastructure for DealerSocket's core messaging and searching platform."
  },
  {
    id: 3,
    name: "inContact",
    image: "/nice-incontact.png",
    position: "Software Engineer II",
    timeline: "May 2017 - April 2018",
    technology: "C#, AngularJS, SQL Server",
    description: "I am a part of the tools team for NICE InContact. I work on tools for our company as well as for our partners who are distributors of our product. I work full stack and build out tools front to back end. I am the product owner of our migration tools to be able to move the data from one of our systems to another. We also create automated testing for all of our products to be able to have a CI/CD environment"
  },
  {
    id: 2,
    name: "Tek Systems",
    image: "/tek-systems.webp",
    position: "QA Engineer II",
    timeline: "February 2017 - May 2017",
    technology: "Android, Java",
    description: "I work for the LDS church on their missionary department as a Quality Assurance Engineer. I am working on testing their Android application as well as the hosted database that it connects to. We work in an agile environment. I work closely with the developer and we discuss the ways that they implemented the code for user stories to allow for better understanding and testing.\nI have also been working on the development application. With this I am able to learn the best practices of Android development straight from our team of highly skilled developers."
  },
  {
    id: 1,
    name: "Hyland Software",
    image: "/hyland.png",
    position: "QA Automation Engineer",
    timeline: "May 2015 - February 2017",
    technology: "C#, SQL Server, Selenium",
    description: "As a QA automation tester I have been working on a automation framework for Hyland's OnBase government Modules. This framework will allow other testers with little to no experience with automation and programming to write automated tests with minimal training. This framework will allow for large automated suites that will be able to perform regression tests in a fraction of the time it would take a manual tester to complete as well as reduce the company's costs in manual testing time that the regression tests would take.\n\nI have also been working as a manual tester for Hyland, specializing in their Media testing. The manual testing includes working with developers to make sure that all requirements are met for our user stories and to reduce/eliminate any bugs in the software. This involves exploratory testing, user driven testing, and edge case testing. With this testing I have learned what the user see and looks for when they are using the software along with the back end expertise of being able to configure the product and resolve issues when they arise. This includes debugging based on error messages, constructing complex SQL queries to fix the database, and working with our team to solve any issues that we or the customer come across."
  }
];

const WorkExperienceCard = ({ job, index }: { job: WorkExperience; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      className={`relative flex items-center mb-12 ${isEven ? 'md:flex-row-reverse' : ''}`}
      initial={{ 
        opacity: 0, 
        x: isEven ? 100 : -100,
        scale: 0.8
      }}
      animate={{ 
        opacity: isInView ? 1 : 0, 
        x: isInView ? 0 : (isEven ? 100 : -100),
        scale: isInView ? 1 : 0.8
      }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Timeline dot with pulse animation */}
      <motion.div 
        className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10"
        initial={{ scale: 0 }}
        animate={{ scale: isInView ? 1 : 0 }}
        transition={{ delay: index * 0.1 + 0.3, duration: 0.3 }}
        whileHover={{ scale: 1.2 }}
      />
      
      {/* Content card */}
      <div className={`ml-12 md:ml-0 md:w-5/12 ${isEven ? 'md:mr-8' : 'md:ml-8'}`}>
        <motion.div 
          className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          whileHover={{ 
            y: -5,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
          }}
          transition={{ duration: 0.2 }}
        >
          {/* Company info */}
          <motion.div 
            className="flex items-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ delay: index * 0.1 + 0.4, duration: 0.4 }}
          >
            <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mr-4">
              {/* Company-specific icons */}
              <div className="text-2xl">
                {job.image ? <img src={job.image} alt={job.name} className="w-full h-full object-cover rounded-lg" /> : job.name === "Freelancing" ? "💼" :
                 job.name === "Gopuff" ? "📦" :
                 job.name === "Rakuten" ? "🛒" :
                 job.name === "DealerSocket" ? "🚗" :
                 job.name === "inContact" ? "📞" :
                 job.name === "Tek Systems" ? "⚙️" :
                 "🏢"}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {job.name}
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-semibold">
                {job.position}
              </p>
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div 
            className="mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -20 }}
            transition={{ delay: index * 0.1 + 0.5, duration: 0.4 }}
          >
            <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm px-3 py-1 rounded-full">
              {job.timeline}
            </span>
          </motion.div>

          {/* Technologies */}
          <motion.div 
            className="mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ delay: index * 0.1 + 0.6, duration: 0.4 }}
          >
            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Technologies Used:
            </h4>
            <div className="flex flex-wrap gap-2">
              {job.technology.split(', ').map((tech, techIndex) => (
                <motion.span
                  key={tech}
                  className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0 }}
                  transition={{ 
                    delay: index * 0.1 + 0.7 + techIndex * 0.05, 
                    duration: 0.2 
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Description */}
          <motion.div 
            className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ delay: index * 0.1 + 0.8, duration: 0.4 }}
          >
            {job.description.split('\n\n').map((paragraph, pIndex) => (
              <p key={pIndex} className="mb-3 last:mb-0">{paragraph}</p>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const WorkHistory = () => {
  const headerRef = useRef(null);
  const timelineRef = useRef(null);
  const statsRef = useRef(null);
  
  const headerInView = useInView(headerRef, { once: true });
  const timelineInView = useInView(timelineRef, { once: true });
  const statsInView = useInView(statsRef, { once: true });

  return (
    <section id="experience" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          ref={headerRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: headerInView ? 1 : 0, y: headerInView ? 0 : 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Work Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A journey through my professional career, building scalable solutions and leading technical initiatives.
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Timeline line with animated draw-in */}
          <motion.div 
            className="absolute left-4 md:left-1/2 transform md:-translate-x-px w-0.5 bg-blue-200 dark:bg-blue-800"
            initial={{ height: 0 }}
            animate={{ height: timelineInView ? "100%" : 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          {workHistory.map((job, index) => (
            <WorkExperienceCard key={job.id} job={job} index={index} />
          ))}
        </div>

        {/* Summary stats */}
        <motion.div 
          ref={statsRef}
          className="grid md:grid-cols-3 gap-8 mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: statsInView ? 1 : 0, y: statsInView ? 0 : 50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {[
            { number: "10+", label: "Years of Experience", color: "text-blue-600 dark:text-blue-400" },
            { number: "7", label: "Companies", color: "text-green-600 dark:text-green-400" },
            { number: "15+", label: "Technologies Mastered", color: "text-purple-600 dark:text-purple-400" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: statsInView ? 1 : 0, scale: statsInView ? 1 : 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.div 
                className={`text-3xl font-bold ${stat.color} mb-2`}
                initial={{ scale: 0 }}
                animate={{ scale: statsInView ? 1 : 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WorkHistory;