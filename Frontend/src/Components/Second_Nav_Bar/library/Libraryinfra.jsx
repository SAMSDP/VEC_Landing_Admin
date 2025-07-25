import React from "react";
import {motion} from "framer-motion";
import {Tilt} from "react-tilt";
import {FaChevronDown, FaChevronUp} from "react-icons/fa";
import {useState, useEffect} from "react";
import styles from '../../Top_Nav_Bar/Academics/sections/Faculties.module.css';
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import LIBMemb from "./LIBMemb"; // Adjust path if needed
import LIBFacl from "./LIBFacl";
import LIBHod from "./LIBHod";
import LoadComp from "../../LoadComp";

const LibrarySections = ({faculty, membership, lib}) => {

    const BASE_URL = process.env.REACT_APP_BASE_URL;

    const UrlParser = (path) => {
        return path?.startsWith("http") ? path : `${BASE_URL}${path}`;
    };

    const sections = [
        {
            title: "The Ground Floor",
            items: [
                "Stack Room with Reading Hall",
                "Circulation Section",
                "Technical Section",
                "Reprography Section",
                "Book Bank Sections",
            ],
            image:
                "https://img.freepik.com/free-photo/young-student-learning-library_23-2149215402.jpg?t=st=1739021050~exp=1739024650~hmac=dc9d7849d845eae5961b643eeeef28f4b32e21e12bc11bd55bc07ed7ffc29258&w=900",
        },
        {
            title: "The First Floor",
            items: [
                "Periodical Section",
                "Reference Section",
                "Reading Hall",
                "Multimedia Library",
                "Internet / CD Browsing Section",
                "Audio / Video Section",
                "IEEE Students Branch",
                "Back Volumes",
                "Project Report",
            ],
            image:
                "https://img.freepik.com/premium-photo/row-bookshelves-filled-with-books_13339-21626.jpg?w=360",
        },
    ];

    const additionalSections = [
        {
            category: "SERVICES",
            items: [
                "Reference service",
                "Reservation Service",
                "Online Public Access Catalogue (OPAC)",
                "Internet Service",
                "Reprographic Service",
                "Job Opportunity Display",
                "Books exhibition",
                "SDI service",
                "Technical Film shows",
                "Current awareness Service",
            ],
        },
        {
            category: "FACILITIES",
            items: [
                "Inter Library Network",
                "OPAC (On-line Public Access Catalogue)",
                "Book Bank (SC/ST)",
                "General Book Bank",
                "Career Guidance Sections",
                "Reading Halls for Reference",
                "Web Based Library Information",
                "E-Resources Access",
            ],
        },

        {
            category: "E-RESOURCES",
            items: ["E-Journals", "E-books", "DELNET", "NPTEL", "NDL"],
        },
    ];

    const images = [
        "/static/Images/ECE.jpeg",
        "/static/Images/EEE.jpeg",
        "/static/Images/EIE.jpeg",
    ];

    const librarySections = [
        {
            title: "ACQUISITION SECTION",
            description:
                "Acquisition Section is entrusted with the acquisition of all syllabus textbooks, reference books as prescribed in the course syllabus of Anna University for all UG and PG programmes. The Faculty can identify suitable books from other suppliers and once the books are identified to take care of their academic responsibilities (if the books are not available in the library). Once the books are identified, they obtain prior approval from principal through HODs against a books recommendation format through the librarian (to certify the non-availability of the books). Books are received from the supplier with the bills/invoice. They are verified for the title, author and edition, quantity, and any damages/missing pages. The bills are certified and forwarded to the account department for payment.",
            image:
                "https://img.freepik.com/free-photo/rows-bookshelves-with-books-college-library_23-2148199865.jpg?w=900",
        }, {
            title: "TECHNICAL SECTION",
            description:
                "A spacious Technical Section with well-furnished furniture is provided to carry out the works such as books accessioning, classifying the books, preparation of data entry sheet, and other related technical works for newly purchased books and journals.",
            image:
                "https://img.freepik.com/free-photo/modern-bookshelves-library-interior_23-2149004811.jpg?w=900",
        }, {
            title: "SC/ST BOOK BANK SECTION",
            description:
                "There  are  984  books  in  the  Book  Bank  Section.  These  Books  are  loaned  to  the  Post  Matric  Scholarship holders  of  the  SC  &  ST  students.  The  Student  can  borrow  10  books  and  keep  them  for  an  entire  semester and return the book to the library in the beginning of next semester.",
            image:
                "https://img.freepik.com/free-photo/rows-bookshelves-with-books-college-library_23-2148199865.jpg?w=900",
        }, {
            title: "GENERAL BOOK BANK SECTION",
            description:
                "There are 1818 books in the General  Book Bank Section.    In order to encourage students to secure well in the  university  exams  by  continuously  referring  subject  books,  the  library  started  General  Book  Bank Scheme.Any students of VEC can place indent for the book by giving books details and pay 20% of the book cost. The  management  pays  the  rest  of  80%  and  buys  the  book.  The  student  can  retain  the  book  till  he/she completes the subject exam and return the book to the library in the beginning of next semester.",
            image:
                "https://img.freepik.com/free-photo/modern-bookshelves-library-interior_23-2149004811.jpg?w=900",
        }, {
            title: "AUDIO VIDEO SECTION",
            description:
                "Audio Visual section of this college Library consists of good collection of Audio cassettes,  Video cassettes and CDROM Diskettes to improve their communication skills, Subjects Knowledge, Projects and also to get prepared  for  the  competitive  exams.  Like  TOEFL,  GRE  etc. NPTEL  Video  lectures    programme  are  being enhanced.",
            image:
                "/img_2.png",
        },
    ];

    const ImageGallery = [
        {
            title: "REPROGRAPHY SECTION",
            description:
                "The College Library is equipped with a plain paper copier for REPROGRAPHY SERVICE, enabling users to obtain photocopies of library documents at a nominal cost while preserving the collection.",
            image:
                "https://img.freepik.com/free-photo/copy-machine-office_23-2149175927.jpg?w=900",
        },
        {
            title: "STACK ROOM WITH READING HALL",
            description:
                "A well-equipped, multi-storied stock room with modern book stacks for easy access. Books are classified using the Universal Decimal Classification, and an Open Access System is followed.",
            image:
                "https://img.freepik.com/free-photo/library-with-books_23-2149063973.jpg?w=900",
        },
        {
            title: "READING HALL",
            description:
                "Designed to provide a wonderful reading atmosphere with comfortable tables and chairs for 250 users. Students can bring books and journals from stacks for reference work.",
            image:
                "https://img.freepik.com/free-photo/students-studying-library_23-2149060958.jpg?w=900",
        },
        {
            title: "PERIODICAL SECTION",
            description:
                "Contains technical and non-technical journals of national and international origins. Latest issues are displayed outside, while back volumes are stored for reference.",
            image:
                "https://img.freepik.com/free-photo/magazines-stack-table_23-2149061123.jpg?w=900",
        },
        {
            title: "REFERENCE SECTION",
            description:
                "Holds about 5000 reference books on Engineering, Science, Humanities, English, Encyclopedias & Dictionaries, including a collection of rare books.",
            image:
                "https://img.freepik.com/free-photo/library-bookshelves_23-2149061503.jpg?w=900",
        },
        {
            title: "PROJECT REPORT & BACK VOLUMES",
            description:
                "The Library houses 2768 journal back volumes covering Engineering, Science, Humanities, and Business, along with 3192 student project reports.",
            image:
                "https://img.freepik.com/free-photo/old-books-library_23-2149060835.jpg?w=900",
        },
    ];

    const NewArrivals = [
        {
            title: "NEW ARRIVALS - BOOKS/PERIODICALS",
            description:
                "New books are displayed in the new arrival rack for at least one week. Current periodicals are arranged subject-wise in racks until new issues arrive.",
            image: "https://velammal.edu.in/wp-content/uploads/2022/04/ieee.jpg",
        },
        {
            title: "IEEE STUDENT BRANCH LIBRARY",
            description:
                "The IEEE student branch is highly active, providing access to 50+ IEEE journals and transactions. All students and staff can reference these materials.",
            image:
                "https://velammal.edu.in/wp-content/uploads/2022/04/internet-cd.jpg",
        },
        {
            title: "INTERNET / CD BROWSING",
            description:
                "Apart from internet access in the computer lab, the library offers four computers for internet and CD browsing.",
            image:
                "https://velammal.edu.in/wp-content/uploads/2022/04/audio-video.jpg",
        },
        {
            title: "AUDIO VIDEO SECTION",
            description:
                "The library contains audio cassettes, video tapes, and CDs to enhance communication skills, subject knowledge, and competitive exam preparation.",
            image:
                "https://velammal.edu.in/wp-content/uploads/2022/04/internet-cd.jpg",
        },
    ];

    const Links = [
        {
            title: "Anti-Plagiarism Scanner Software",
            content: [
                {name: "CopyCatch", link: "https://www.copycatchgold.com"},
                {name: "TurnItOut", link: "https://www.turnitout.com"},
                {name: "Eve", link: "https://www.canexus.com"},
                {name: "Plagiarism.com", link: "https://www.plagiarism.com"},
                {name: "Copyscape", link: "https://www.copyscape.com"},
                {
                    name: "CodeMatch (CodeSuite)",
                    link: "https://www.zeidmanconsulting.com/CodeSuite.htm",
                },
                {name: "ArticleChecker", link: "https://www.articlechecker.com"},
                {
                    name: "PlagiarismDetect.com",
                    link: "https://www.plagiarismdetect.com",
                },
                {name: "Duplichecker", link: "https://www.duplichecker.com"},
                {
                    name: "Small SEO Tools",
                    link: "https://smallseotools.com/plagiarism-checker/",
                },
                {
                    name: "ScanMyEssay & Viper & WCopyFind",
                    link: "https://www.scanmyessay.com/",
                },
            ],
        },
        {
            title: "Our Collections",
            content: [
                "Total Books: 77,525",
                "Total Titles: 25,156",
                "General Bank Books: 1,818",
                "SC/ST Book Bank Books: 984",
                "e-Books: 155",
                "Journals: 162 (75 International, 87 National)",
                "CDs: 3,930",
                "Video Cassettes: 127",
                "Journal Back Volumes: 2,768",
                "Student Project Reports: 3,192",
                "Online Journals Package: 9,517",
                "Magazines & Newspapers: 20",
            ],
        },
        {
            title: "Question Bank - UG Courses",
            content: [
                "B.E Computer Science & Engineering (CSE)",
                "B.E Electronics & Communication Engineering (ECE)",
                "B.E Electrical & Electronics Engineering (EEE)",
                "B.E Electronics & Instrumentation Engineering (E&I)",
                "B.Tech Information Technology (IT)",
                "B.E Mechanical Engineering (MECH)",
                "B.E Civil Engineering (CIVIL)",
                "B.E Automobile Engineering (AUTO)",
                "B.E Artificial Intelligence & Data Science (AI & DS)",
            ],
        },
        {
            title: "Question Bank - PG Courses",
            content: [
                "M.E Computer Science & Engineering (CSE)",
                "M.E Power Systems Engineering (PSE)",
                "Master of Business Administration (MBA)",
            ],
        },
    ];

    const advisors = [
        ["Dr. RAJENDRAPRASATH S", "Librarian/HOD - Secretary"],
        ["Dr. MANJU S", "Ass.Prof - Electronics and Communication Engineering - Convener"],
        ["Mrs. SELVE V", "Ass.Prof - Electrical and Electronics Engineering"],
        ["Dr. SATHYA PRIYA J", "Ass.Prof - Information Technology"],
        ["Mrs. HEMALATHA B", "Ass.Prof -Computer Science Engineering "],
        ["Mrs. NANDHINI", "Ass.Prof - Electronics and Communication Engineering"],
        ["Mr. THILLAIBACKIAM M", "Ass.Prof - Civil Engineering"],
        ["Mr. KARTHIKEYAN", "Ass.Prof - Mechanical Engineering"],
        ["Mrs. PREMA A", "Ass.Prof - Artificial Intelligence and Data Science"],
        ["Mr. SENTHAMILSELVAN", "Ass.Prof - Automobile Engineering"],
        ["Dr. ANUSANKARI S", "Ass.Prof - Electronics Instrumentation Engineering"],
        ["Ms. AKSAYA DHARANI", "Ass.Prof - Computer Science Engineering - Cyber Security"],
        ["Mrs. REVATHY PANDIAN", "Ass.Prof - Master of Business Administration"],
        ["Mrs. HAMSAVALLI", "Prof - Physics"],
        ["Mr. GOPIKRISHNAN", "Ass.Prof - Mathematics"],
        ["Mr. SIVARAJ", "Ass.Prof - Chemistry"],
        ["Mr. BALAJI", "Ass.Prof - English"]
    ]

    const tabData = [
        ["Branch", "No of Titles", "No of Volumes", "National Journals (Printed)", "International Journals (Printed)",
            "e-journals IEEE", "e-journals DELNET", "e-Books DELNET"],
        ["UG COURSES"],
        ["AI&DS", "325", "1782", "6", "6", "9", "33", "1032"],
        ["AME", "670", "3025", "6", "6", "8", "12", "19"],
        ["CIVIL", "1168", "3491", "6", "6", "6", "68", "90"],
        ["CSE", "4159", "10786", "6", "6", "13", "51", "300"],
        ["CSE CS", "200", "1000", "6", "6", "7", "19", "85"],
        ["ECE", "2759", "8289", "6", "6", "49", "22", "168"],
        ["EEE", "1540", "5865", "6", "6", "16", "20", "40"],
        ["ΕΙΕ", "964", "5576", "6", "6", "19", "52", "63"],
        ["IT", "3049", "8714", "6", "6", "12", "34", "65"],
        ["MECH", "2155", "7103", "6", "6", "7", "66", "147"],
        ["PG COURSES"],
        ["ME-CSE", "607", "1221", "6", "6", "6", "30", "90"],
        ["ME-PSE", "603", "1205", "6", "6", "6", "10", "29"],
        ["MBA", "3775", "10187", "15", "15", "-", "325", "500"],
        ["SCIENCE AND HUMANITIES"],
        ["MATHS", "896", "3085", "2", "-", "-", "104", "500"],
        ["PHYSICS", "368", "1586", "1", "-", "-", "47", "500"],
        ["CHEMISTRY", "490", "1731", "1", "-", "-", "43", "225"],
        ["ENGLISH", "603", "1508", "1", "-", "-", "41", "20"],
        ["GENERAL", "940", "1916", "1", "-", "-", "345", "500"],
        ["TOTAL", "25271", "78070", "93", "87", "158", "1322", "4373"]
    ]

    const libFacData =   {
        "name": [
          "Dr.P.RAMESH KANNAN",
          "Ms.JAYANTHI.K",
          "Mr.SRINIVASAN.S"
        ],
        "image_path": [
          "/static/images/sports_faculty/1.jpeg",
          "/static/images/sports_faculty/2.jpeg",
          "/static/images/sports_faculty/3.jpeg"
        ],
        "designation": [
          "Head & Director of Physical Education",
          "ASST.PD",
          "ASST.PD"
        ],
        "qualification": [
          "MA.MPEd,Mphil,Ph.D",
          "MPEd.Mphil",
          "MPEd.Mphil"
        ]
      }

    function LIBFloor() {
        return (<div className="max-w-7xl mx-auto lg:flex mt-4 flex-wrap gap-4 justify-center">
            {sections.map((section, index) => (
                <motion.div
                    key={index}
                    className="flex flex-col rounded-xl shadow-md overflow-hidden cursor-pointer transform dark:bg-[color-mix(in_srgb,theme(colors.drkp)_95%,white)]
              transition-all duration-500 hover:scale-[1.02] hover:shadow-xl"
                    initial={{opacity: 0, y: 40}}
                    whileInView={{opacity: 1, y:     0}}
                    transition={{duration: 0.6}}
                    viewport={{once: true}}
                    whileHover={{rotate: 1}}
                >
                    <div className="w-full">
                        <img
                            src={section.image}
                            alt={section.title}
                            className="w-full h-48 sm:h-56 object-cover transition-transform duration-500 hover:scale-105"
                        />
                    </div>
                    <div className="p-4 sm:p-5 space-y-3 sm:space-y-5">
                        <h2 className="text-xl sm:text-2xl font-semibold text-accn dark:text-drka">
                            {section.title}{" "}
                        </h2>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm sm:text-base">
                            {section.items.map((item, i) => (
                                <motion.li
                                    key={i}
                                    className="flex items-center space-x-2 hover:text-yellow-700 transition-colors duration-300"
                                    initial={{opacity: 0, x: -20}}
                                    whileInView={{opacity: 1, x: 0}}
                                    transition={{delay: (i % 5) * 0.08}}
                                    viewport={{once: true}}
                                >
                                    <span className="w-2 h-2 bg-secd dark:bg-drks rounded-full"></span>
                                    <span>{item}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            ))}
        </div>
);
    }

//     function LIBHod() {
//         return (
//             <article className="flex flex-col gap-4 bg-gray-100 shadow-xl p-6 rounded-xl items-center text-center">
//                 <div className="w-full md:w-1/5 flex justify-center">
//                     <img className="w-full h-auto" alt="Library Hod" src="/img_1.png" />
//                 </div>

//                 <div className="flex flex-col px-4">
//                     <h2 className="text-2xl font-semibold">Dr. S. Rajendraprasath, B.Sc., M.A., M.L.I.Sc., M.Phil., Ph.D.</h2>
//     <p className="text-lg text-accn mb-2">
//       Librarian and Head, Department of Library and Information Science
//     </p>
//     <p className="text-xl italic text-justify">
//       VEC’s Central Library is a one of its kind installation that facilitates teaching, learning and research
//       endeavours of our students, scholars and faculty members. It is one of the foremost such libraries in Tamil Nadu
//       higher educational systems. Significant efforts are not just building structure that stores books. It serves more
//       realistically as a space for learning and knowledge exchange with users coming from diverse study and
//       aspirational backgrounds.
//     </p>
//   </div>
// </article>
//         )
//     }

//     const LIBFacImageCard = ({ name, photo, Designation, firstTile}) => (
    
//       <>
//       <div className={`${firstTile ? styles.firstTile + ' w-[95%] lg:w-full mb-8 lg:mr-10 basis-full mx-3' : 
//             styles.imageCard + ' w-fit lg:w-[90%]'} rounded-lg bg-[color-mix(in_srgb,theme(colors.prim)_85%,black)] 
//             dark:bg-[color-mix(in_srgb,theme(colors.drkp)_95%,white)]`}>
//         <img src={UrlParser(photo)} alt={name} className={firstTile ? styles.firstTileImage : styles.image} />
//         <div className={firstTile ? styles.firstTileContent : styles.cardContent}>
//           <h3 className={styles.facultyName + " text-accn dark:text-drka"}>{name}</h3>
//           <p>{Designation}</p>
//         </div>
//       </div>
//       </>
//     );

    // function LIBFacl() {
    //     return (
    //         <>
    //         <div className=" py-16 px-6">
    //             <h2 className="text-4xl font-bold text-accn dark:text-drka mb-8 text-center">
    //             Faculty & Staff
    //             </h2>

    //             <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
    //                 {faculty?.name?.map((name, index) => (
    //                     <motion.div
    //                         key={index}
    //                         className="relative rounded-2xl shadow-lg overflow-hidden transform transition-transform
    //                         dark:bg-[color-mix(in_srgb,theme(colors.drkp)_95%,white)] hover:scale-105 border-2 border-[#800000] rounded-xl"
    //                         initial={{opacity: 0, y: 30}}
    //                         whileInView={{opacity: 1, y: 0}}
    //                         transition={{duration: 0.5, delay: index * 0.1}}
    //                         viewport={{once: true}}
    //                         >
    //                         <div className="group relative ">
    //                             <img
    //                                 src={UrlParser(faculty?.image[index])}
    //                                 alt={name}
    //                                 className="w-full h-60 object-cover filter brightness-90 group-hover:brightness-100 transition-all"
    //                                 />
    //                             <div
    //                                 className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
    //                                 <h3 className="text-xl font-bold text-white text-center px-4">
    //                                     {name}
    //                                 </h3>
    //                             </div>
    //                         </div>

    //                         <div className="p-6 text-center">
    //                             <h3 className="text-2xl font-bold">{name}</h3>
    //                             <p className="mt-2">{faculty?.educational_qualification[index]}</p>
    //                             <p className="text-accn dark:text-drka font-semibold mt-2">
    //                                 {faculty?.designation[index]}
    //                             </p>
    //                         </div>
    //                     </motion.div>
    //                 ))}
    //             </div>
    //         </div>
    //     </>
    //     )
    // }
    const getEbookSources = () => {
        return [
          {
            name: "University of Pennsylvania",
            url: "http://digital.library.upenn.edu/books"
          },
          {
            name: "Project Gothenburg",
            url: "http://www.gutenberg.org"
          },
          {
            name: "Free e books",
            url: "http://www.free-ebooks.net"
          },
          {
            name: "Free Tech books",
            url: "http://www.freetechbooks.com"
          },
          {
            name: "Campus books",
            url: "http://www.campusbooks.com"
          },
          {
            name: "University of Virginia; e-book Library",
            url: "http://etext.lib.virginia.edu/ebooks/ebooklist.html"
          },
          {
            name: "NAP Open Book",
            url: "http://www.nap.edu/index.html"
          },
          {
            name: "Internet public Library",
            url: "http://www.ipl.org/div/books"
          },
          {
            name: "Direct Text Book",
            url: "http://www.directtextbook.com"
          },
          {
            name: "e-books",
            url: "http://e-books.org"
          },
          {
            name: "e-books Palace",
            url: "http://www.ebookpalace.com"
          },
          {
            name: "Electronic Library of Mathmatics",
            url: "http://www.emis.de/journals/short_index.html"
          }
        ];
      };

    function LIBFea() {
        
        const ebookSources = getEbookSources(); // calling the function
return (
  <div className="overflow-x-auto mt-10 px-4 sm:px-8 py-10">
    <h2 className="text-2xl sm:text-3xl font-bold text-[#800000] dark:text-drkt text-center mb-8">
      Some of E-books Download Websites
    </h2>

    <table className="w-full table-auto border-collapse border border-gray-300 shadow-md text-left">
      <thead>
        <tr className="bg-[#808080] text-white text-base sm:text-lg">
          <th className="py-3 px-4 border border-gray-300">E-Book Source</th>
          <th className="py-3 px-4 border border-gray-300">Link</th>
        </tr>
      </thead>
      <tbody className="text-sm sm:text-base">
        {ebookSources.map((row, index) => (
          <tr key={index} className="">
            <td className="py-3 px-4 border border-gray-300 font-medium text-text dark:text-drkt">
              {row.name}
            </td>
            <td className="py-3 px-4 border border-gray-300">
                <a
                    href={row.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dark:text-drka hover:underline"
                >
                    {row.url}
                </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

    }

    function LIBInstr() {
        return (
        <>
        <div className="flex flex-wrap gap-4 justify-center lg:px-0 mt-8">
                    <p className="basis-full text-2xl font-poppins text-accn dark:text-drkt font-semibold">LIBRARY ADVISORY COMMITTEE
                        MEMBERS</p>
                    {advisors.map((adv, i) => (
                        <div className={`basis-2/5 grow py-2 px-4 rounded-xl hover:border-l-4 border-secd dark:border-drks
                            bg-[color-mix(in_srgb,theme(colors.prim)_95%,black)]
                            dark:bg-[color-mix(in_srgb,theme(colors.drkp)_95%,white)] 
                            transition-colors duration-300 ease-in`} key={i}>
                            {/* Fixed typo: cmt.nme to cmt.pos since data only has pos */}
                            <p className="text-xl font-poppins">{adv[0]}</p>
                            {/* Removed cmt.nme reference as it doesn't exist in data */}
                            <p className="text-sm text-accn dark:text-drka">{adv[1]}</p>
                        </div>
                    ))}
                </div>
        </>
        )
    }
    function LIBBorw() {
        return (
            <div className="max-w-6xl mx-auto p-6 flex flex-col lg:flex-row items-center gap-12">
                {/* Carousel */}
                <motion.div
                    className="w-full lg:w-1/2 overflow-hidden rounded-xl shadow-lg"
                    initial={{opacity: 0, x: -50}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 0.8}}
                    viewport={{once: true}}
                >
                    <Carousel
                        showThumbs={false}
                        autoPlay
                        infiniteLoop
                        showArrows={false}
                        showStatus={false}
                        interval={3000}
                        className="rounded-xl"
                    >
                        {images.map((src, index) => (
                            <div key={index}>
                                <img
                                    src={src}
                                    alt={`Library ${index + 1}`}
                                    className="rounded-xl"
                                />
                            </div>
                        ))}
                    </Carousel>
                </motion.div>

                {/* Text */}
                <motion.div
                    className="w-full lg:w-1/2 space-y-4 backdrop-blur-lg p-6 rounded-xl shadow-xl"
                    initial={{opacity: 0, x: 50}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 0.8}}
                    viewport={{once: true}}
                >
                    <h2 className="text-3xl font-bold text-accn dark:text-drka">
                        BORROWING AND CIRCULATION
                    </h2>
                    <p className="text-lg">
                        The Circulation Section consists of five computers with barcode
                        scanners for issue, return, and renewal of books. All the library
                        transactions are computerized. Enquiries regarding availability of
                        books, CDs, journals, and reservation of books are made in the
                        circulation section.
                    </p>
                </motion.div>
            </div>
        )
    }

    function LIBSect() {
        return (
            <div className="min-h-screen py-12 sm:py-16 px-4 sm:px-6 space-y-12 sm:space-y-16">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-accn dark:text-drka uppercase tracking-wide">
                    Library Sections
                </h2>

                <div className="max-w-6xl mx-auto space-y-12">
                    {librarySections.map((section, index) => (
                        <motion.div
                            key={index}
                            className={`flex md:flex-row items-center gap-12 ${
                                index % 2 === 0 ? "md:flex-row-reverse" : ""
                            }`}
                            initial={{opacity: 0, x: index % 2 === 0 ? 50 : -50}}
                            whileInView={{opacity: 1, x: 0}}
                            transition={{duration: 0.8}}
                            viewport={{once: true}}
                        >
                            {/* Image Section */}
                            <motion.div
                                className="hidden md:block w-full md:w-1/2 h-full overflow-hidden rounded-3xl shadow-lg"
                                whileHover={{scale: 1.05}}
                                transition={{duration: 0.5}}
                            >
                                <img
                                    src={section.image}
                                    alt={section.title}
                                    className="w-full h-80 object-cover rounded-3xl"
                                />
                            </motion.div>

                            {/* Text Content */}
                            <div
                                className="w-full md:w-1/2 h-full p-6 backdrop-blur-lg rounded-2xl shadow-lg
        dark:bg-[color-mix(in_srgb,theme(colors.drkp)_95%,white)] flex flex-col justify-center"
                            >
                                <h3 className="text-2xl sm:text-3xl font-bold text-accn dark:text-drka">
                                    {section.title}
                                </h3>
                                <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-relaxed">
                                    {section.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        )
    }

    function LIBHigh() {
        return (
            <>
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
                    {additionalSections.map((section, index) => (
                        <motion.div
                            key={index}
                            className="p-4 sm:p-6 md:p-8 rounded-2xl shadow-md sm:shadow-lg text-center dark:bg-[color-mix(in_srgb,theme(colors.drkp)_95%,white)]
        transition duration-500 hover:scale-105 hover:shadow-2xl hover:bg-[color-mix(in_srgb,theme(colors.secd),transparent_85%)]
            dark:hover:bg-[color-mix(in_srgb,theme(colors.drks),transparent_85%)]"
                            initial={{opacity: 0, y: 50}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.8}}
                            viewport={{once: true}}
                        >
                            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-accn dark:text-drkt mb-4 sm:mb-6">
                                {section.category}
                            </h2>
                            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base md:text-lg">
                                {section.items.map((item, i) => (
                                    <motion.li
                                        key={i}
                                        className="flex items-center space-x-2 sm:space-x-3 hover:text-accn dark:hover:text-drkt transition-colors duration-300"
                                        initial={{opacity: 0, x: -20}}
                                        whileInView={{opacity: 1, x: 0}}
                                        transition={{delay: i * 0.1}}
                                        viewport={{once: true}}
                                    >
                                        <span className="w-2 h-2 sm:w-3 sm:h-3 bg-secd dark:bg-drks rounded-full"></span>
                                        <span className="text-start">{item}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
                <div className="min-h-screen py-12 sm:py-16 px-4 sm:px-6">
                    <h2 className="text-3xl sm:text-5xl font-extrabold text-center text-accn dark:text-drkt uppercase tracking-wide mb-8 sm:mb-12">
                        Library Highlights
                    </h2>

                    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
                        {ImageGallery.map((section, index) => (
                            <motion.div
                                key={index}
                                className="relative group"
                                initial={{opacity: 0, y: 50}}
                                whileInView={{opacity: 1, y: 0}}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.15,
                                    ease: "easeOut",
                                }}
                                viewport={{once: true}}
                            >
                                <Tilt
                                    options={{
                                        max: 15,
                                        scale: 1.05,
                                        speed: 400,
                                        glare: true,
                                        "max-glare": 0.2,
                                    }}
                                    className="relative rounded-2xl shadow-lg overflow-hidden transition-all transform
            dark:bg-[color-mix(in_srgb,theme(colors.drkp)_95%,white)] group-hover:shadow-2xl"
                                >
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={section.image}
                                            alt={section.title}
                                            className="w-full h-56 sm:h-60 object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div
                                            className="absolute inset-0 bg-black opacity-30 group-hover:opacity-10 transition-opacity"></div>
                                    </div>

                                    <div className="p-5 sm:p-6">
                                        <h3
                                            className="text-xl sm:text-2xl font-bold text-accn dark:text-drkt
                                            group-hover:text-secd dark:group-hover:text-drks transition-colors"
                                        >
                                            {section.title}
                                        </h3>
                                        <p className="mt-2 sm:mt-3 leading-relaxed">
                                            {section.description}
                                        </p>
                                    </div>
                                </Tilt>
                            </motion.div>
                        ))}
                    </div>
                </div>          
            </>
        )
    }

    function LIBMult() {
        return (
            <div className=" pt-16 pb-16 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Images */}
                    <div className="relative group">
                        <motion.img
                            src="https://img.freepik.com/free-photo/medium-shot-side-view-young-man-looking-vinyls-store_23-2148237252.jpg?t=st=1739024616~exp=1739028216~hmac=05bbcb6007c32216caba492b016231cb8228fcbf5f7b299540dfcd369d28f235&w=900"
                            alt="Multimedia Library"
                            className="w-full rounded-xl shadow-lg transition-transform duration-500 group-hover:scale-105"
                            initial={{opacity: 0, x: -50}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.8}}
                        />
                        <motion.img
                            src="https://img.freepik.com/free-photo/beautiful-girl-picking-literature_23-2147678841.jpg?t=st=1739024663~exp=1739028263~hmac=eaad9cec0031ba51173f59ed052e30b3e6fae287eaa408b21b09867880db6778&w=900"
                            alt="Library Resources"
                            className="absolute bottom-[-30px] right-[-20px] w-2/3 rounded-xl shadow-xl border-4 border-white transition-transform duration-500 group-hover:rotate-3"
                            initial={{opacity: 0, x: 50}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.8, delay: 0.2}}
                        />
                    </div>

                    {/* Right Side - Text Content */}
                    <motion.div
                        className=""
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, delay: 0.3}}
                    >
                        <h2 className="text-4xl font-bold text-accn dark:text-drkt mb-6">
                            MULTIMEDIA LIBRARY
                        </h2>
                        <p className="text-lg leading-relaxed">
                            A separate Multimedia Library is provided to utilize CD-ROMs,
                            Online Journals, and NPTEL courses. It offers internet browsing,
                            enabling students and faculty to access multidisciplinary video
                            learning materials.
                        </p>
                        <p className="mt-4 text-lg leading-relaxed">
                            Our college is a proud member of <strong>DELNET</strong>,
                            promoting resource sharing among libraries. We provide access to
                            online journals like IEEE Transactions, ASME Proceedings, and more
                            for research activities.
                        </p>
                        <p className="mt-4 text-lg leading-relaxed">
                            The <strong>National Digital Library of India</strong> integrates
                            global digital libraries under a single portal. It supports
                            academic disciplines in multiple languages, making knowledge
                            accessible for all.
                        </p>
                    </motion.div>
                </div>
            </div>
        )
    }

    function LIBArvl() {
        return (
            <div className="py-16 px-6">
                <h2 className="text-4xl font-bold text-accn dark:text-drkt mb-12 text-center">
                    NEW ARRIVALS
                </h2>

                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
                    {NewArrivals.map((section, index) => (
                        <motion.div
                            key={index}
                            className="relative rounded-2xl shadow-lg overflow-hidden transform transition-transform
              dark:bg-[color-mix(in_srgb,theme(colors.drkp)_95%,white)] hover:scale-105"
                            initial={{opacity: 0, y: 30}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.5, delay: index * 0.1}}
                            viewport={{once: true}}
                        >
                            <div className="group relative">
                                <img
                                    src={section.image}
                                    alt={section.title}
                                    className="w-full h-60 object-cover filter brightness-90 group-hover:brightness-100 transition-all"
                                />
                                <div
                                    className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0
                group-hover:opacity-100 transition-all"
                                >
                                    <h3 className="text-2xl text-black font-bold text-center px-4">
                                        {section.title}
                                    </h3>
                                </div>
                            </div>

                            <div className="p-6">
                                <p className="leading-relaxed">{section.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        )
    }
    
    function LIBResc() {
        return (
            <div className="py-16 px-6">
                <h2 className="text-4xl font-bold text-accn dark:text-drkt mb-12 text-center">
                    Library Resources
                </h2>

                <div className="max-w-4xl mx-auto space-y-6">
                    {Links.map((section, index) => (
                        <div
                            key={index}
                            className="dark:bg-[color-mix(in_srgb,theme(colors.drkp)_95%,white)] rounded-2xl shadow-lg"
                        >
                            <button
                                onClick={() => toggleSection(index)}
                                className={`w-full flex justify-between items-center px-6 py-4 text-xl font-semibold
                transition-all rounded-2xl text-white dark:text-drkp mb-4
                ${
                                    openSection === index
                                        ? "bg-[#FDCC03] text-black dark:bg-drks"
                                        : "bg-accn dark:bg-drks"
                                }`}
                            >


                              <h2 className={`${openSection === index ? "text-black" : "text-white"}`} >    { section.title} </h2> 
                                {openSection === index ? <FaChevronUp className="color-black text-black"/> : <FaChevronDown/>}
                            </button>

                            {openSection === index && (
                                <motion.div
                                    initial={{opacity: 0, height: 0}}
                                    animate={{opacity: 1, height: "auto"}}
                                    exit={{opacity: 0, height: 0}}
                                    className="px-6 py-4"
                                >
                                    {(section.title === "Free E-Books Download Websites") ?
                                        <table
                                            className="w-full border-collapse backdrop-blur-lg shadow-xl overflow-x-auto">
                                            {tabData.map((tab, ind) => (
                                                (ind === 0) ?
                                                    <thead key={ind}>
                                                    <tr className="bg-gray-300 dark:bg-gray-700 text-black text-sm sm:text-base">
                                                        {tab.map((tada, tin) => (
                                                            <th className="py-2 px-3 sm:py-3 sm:px-6 text-center"
                                                                key={tin}>{tada}
                                                            </th>
                                                        ))}
                                                    </tr>
                                                    </thead>
                                                    : <tbody>
                                                    <motion.tr
                                                        key={ind}
                                                        className={`border-b border-gray-300 transition-all duration-300 
                                                            bg-prim dark:bg-drkp dark:even:bg-[color-mix(in_srgb,theme(colors.drks),transparent_70%)] 
                                                            ${(ind === tabData.length - 1 || tab.length === 1)? "text-xl font-bold" : ""}`}
                                                        initial={{opacity: 0, x: -20}}
                                                        whileInView={{opacity: 1, x: 0}}
                                                        transition={{delay: index * 0.1}}
                                                        viewport={{once: true}}>
                                                        {tab.map((tada, tin) => (
                                                            <td className="py-3 px-3 sm:py-4 sm:px-6 text-center
                                                                font-semibold text-black"
                                                                rowSpan={tabData[0].length + 1 - tab.length}>{tada}
                                                            </td>
                                                        ))}
                                                    </motion.tr>
                                                    </tbody>
                                            ))}
                                        </table>
                                        : Array.isArray(section.content) ? (
                                            <ul className="list-disc marker:text-accn dark:marker:text-drka pl-6 space-y-2">
                                                {section.content.map((item, idx) =>
                                                    typeof item === "string" ? (
                                                        <li key={idx}>{item}</li>
                                                    ) : (
                                                        <li key={idx}>
                                                            <a
                                                                href={item.link}
                                                                className="text-text dark:text-drka hover:underline"
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                            >
                                                                {item.name}
                                                            </a>
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        ) : (
                                            <p>{section.content}</p>
                                        )}
                                </motion.div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    const Counter = ({ value }) => {
        const [count, setCount] = useState(0);
      
        useEffect(() => {
          let start = 0;
          const duration = 2000; // 2 seconds
          const increment = Math.ceil(value / (duration / 50));
      
          const counter = setInterval(() => {
            start += increment;
            if (start >= value) {
              setCount(value);
              clearInterval(counter);
            } else {
              setCount(start);
            }
          }, 50);
      
          return () => clearInterval(counter);
        }, [value]);
      
        return <span className="text-3xl font-semibold">{count.toLocaleString()}</span>;
      };
      
    
    const LIBbookdetails = () => {
        const stats = [
            { label: "Number of Books", value: 111494, icon: "📘" },
            { label: "Text Books", value: 98896, icon: "📖" },
            { label: "Reference Books", value: 12598, icon: "🔍" },
            { label: "World Bank Repository Book", value: 253, icon: "🌍" },
            { label: "Current Periodicals", value: 124, icon: "👥" },
            { label: "Book Bank", value: 1571, icon: "🏛" }
          ];
        
          return (

            <>
                {stats ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-6 bg-prim dark:bg-drkp rounded-lg shadow-lg">
                    {stats?.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center bg-prim dark:bg-text p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
                        <span className="text-5xl">{stat.icon}</span>
                        <Counter value={stat.value} />
                        <p className="text-text dark:text-drkt text-lg mt-2">{stat.label}</p>
                        </div>
                    ))}
                    </div>
                ) : (
                    <div className={"h-screen flex items-center justify-center md:mt-[15%] md:block"}>
                        <LoadComp />
                    </div>
                )}
            </>
          );
    }

    const LIBjournalsdetails = () => {
        const stats = [
          { label: "Total Journals", value: 5423, icon: "📚" },
          { label: "National Journals", value: 2145, icon: "🇮🇳" },
          { label: "International Journals", value: 3278, icon: "🌎" },
          { label: "E-Journals", value: 456, icon: "💻" },
          { label: "Subscribed Journals", value: 789, icon: "📜" },
          { label: "Archived Journals", value: 1123, icon: "📂" }
        ];
      
        return (

            <>
                {stats ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-6 bg-prim dark:bg-drkp rounded-lg shadow-lg">
                        {stats?.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center bg-prim dark:bg-text p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
                            <span className="text-5xl">{stat.icon}</span>
                            <Counter value={stat.value} />
                            <p className="text-text dark:text-prim text-lg mt-2">{stat.label}</p>
                        </div>
                        ))}
                    </div>
                ) : (
                    <div className={"h-screen flex items-center justify-center md:mt-[15%] md:block"}>
                        <LoadComp />
                    </div>
                )}
            </>
        );
      };

      const LIBnewspaperdetails = () => {
        const stats = [
          { label: "Total Newspapers", value: 325, icon: "📰" },
          { label: "Daily Newspapers", value: 120, icon: "📆" },
          { label: "Weekly Newspapers", value: 85, icon: "📅" },
          { label: "Monthly Newspapers", value: 60, icon: "🗞" },
          { label: "Archived Newspapers", value: 45, icon: "📂" },
          { label: "Digital Newspapers", value: 15, icon: "💻" }
        ];
      
        return (
            <>
                {stats ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-6 bg-prim dark:bg-drkp rounded-lg shadow-lg">
                        {stats?.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center bg-prim dark:bg-text p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
                            <span className="text-5xl">{stat.icon}</span>
                            <Counter value={stat.value} />
                            <p className="text-text dark:text-prim text-lg mt-2">{stat.label}</p>
                        </div>
                        ))}
                    </div>
                ) : (
                    <div className={"h-screen flex items-center justify-center md:mt-[15%] md:block"}>
                        <LoadComp />
                    </div>
                )}
            </>
        );
      };

    const [openSection, setOpenSection] = useState(null);
    const navData = {
        "Collection": {
            "Books": <LIBbookdetails />,
            "Journals": <LIBjournalsdetails />,
            "Newspapers": <LIBnewspaperdetails />
        },
        "HOD's message": <LIBHod/>,
        "Staff": <LIBFacl/>,
        "Services": <LIBHigh/>,
        "Advisory committee members": <LIBInstr/>,
        "Membership Details": <LIBMemb/>,
        "Downloads": <LIBFea/>,
        "Library Resources": <LIBResc/>,
        "OPAC": <LIBMult/>,
        "Digital Library & E-Resources": <LIBArvl/>
    }

    const toggleSection = (index) => {
        setOpenSection(openSection === index ? null : index);
    };

    return (
        <>
            <div className="min-h-screen p-3 md:p-6 lg:p-10 space-y-8 md:space-y-12 lg:space-y-16">
                {(Array.isArray(lib)) ? navData[lib[0]][lib[1]] : navData[lib]}
            </div>
        </>
    );
};

export default LibrarySections;
