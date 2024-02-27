import React from "react";
import DevImg from "./DevImg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  Calendar,
  GraduationCap,
  Briefcase,
} from "lucide-react";
import Image from "next/image";

type DataItem = {
  [key: string]: string;
};

type DataCategory = {
  title: string;
  data: DataItem[];
};

type InfoItem = {
  icon: JSX.Element;
  text: string;
};
const infoData: InfoItem[] = [
  {
    icon: <User2 size={20} />,
    text: "Mike",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+6012-429-5026",
  },
  {
    icon: <MailIcon size={20} />,
    text: "mike_teow@outlook.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 15 September 1997",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Bachelor of Computer Science",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "7, Jalan Mewah 1, Taman Mewah, 12100, Butterworth, Penang, Malaysia",
  },
];
const qualificationData: DataCategory[] = [
  {
    title: "education",
    data: [
      {
        university: "Sunway University",
        qualification: "Bachelor of Computer Science",
        years: "2018-2020",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "Hitachi Ebworx Sdn Bhd",
        role: "Application Developer",
        years: "2020-2022",
      },
    ],
  },
];
const skillData: DataCategory[] = [
  {
    title: "skills",
    data: [
      {
        name: "HTML, CSS",
      },
      {
        name: "Front End Development",
      },
      {
        name: "JavaScript, Python, Java, React",
      },
      {
        name: "NextJs",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/vscode2.svg",
      },
      {
        imgPath: "/about/notion3.svg",
      },
      {
        imgPath: "/about/arc.svg",
      },
      {
        imgPath: "/about/alacritty.svg",
      },
    ],
  },
];
const About = () => {
  const getData = (arr: DataCategory[], title: string) => {
    return arr.find((item) => item.title === title);
  };

  const experienceData = getData(qualificationData, "experience");

  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About me
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* image */}
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc="/about/developer.png"
            />
          </div>
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualifications"
                >
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              <div className="text-lg mt-12 xl:mt-8">
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      Unmatched Service Quality for Over 10 Years
                    </h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      I specialize in crafting intuitive websites with
                      cutting-edge technology, delivering dynamic and engaging
                      user experience
                    </p>
                    {/* icons */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                          >
                            <div>{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    {/* language */}
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Language Skill</div>
                      <div className="border-b border-border"></div>
                      <div>English, Chinese</div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Awesome Journey
                    </h3>
                    <div className="grid md:grid-cols-2 gap-y-8">
                      {/* experience */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase size={20} />
                          <h4 className=" capitalize font-medium">
                            {getData(qualificationData, "experience")?.title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "experience")?.data.map(
                            (item, index) => {
                              const { company, role, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {company}
                                    </div>
                                    <div className=" text-lg leading-none text-muted-foreground mb-4">
                                      {role}
                                    </div>
                                    <div className=" text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      {/* education */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={20} />
                          <h4 className=" capitalize font-medium">
                            {getData(qualificationData, "education")?.title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "education")?.data.map(
                            (item, index) => {
                              const { university, qualification, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {university}
                                    </div>
                                    <div className=" text-lg leading-none text-muted-foreground mb-4">
                                      {qualification}
                                    </div>
                                    <div className=" text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="skills">
                  <div className=" text-center xl:text-left">
                    <h3 className="h3 mb-8">What I Use Everyday</h3>
                    {/* skill */}
                    <div className="mb-16">
                      <h4 className=" text-xl font-semibold mb-2">Skills</h4>
                      <div className="border-b border-border mb-4">
                        {/* skill list  */}
                        <div>
                          {getData(skillData, "skills")?.data.map(
                            (item, index) => {
                              const { name } = item;
                              return (
                                <div
                                  key={index}
                                  className=" w-2/4 text-center xl:text-left mx-auto xl:mx-0"
                                >
                                  <div className=" font-medium">{name}</div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                    {/* tools */}
                    <div>
                      <h4 className=" text-xl font-semibold mb-2 xl:text-left">
                        Tools
                      </h4>
                      <div className="border-b border-border mb-4">
                        <div className="flex gap-x-8 justify-center xl:justify-start">
                          {getData(skillData, "tools")?.data.map(
                            (item, index) => {
                              const { imgPath } = item;
                              return (
                                <div key={index}>
                                  <Image
                                    src={imgPath}
                                    alt=""
                                    width={48}
                                    height={48}
                                    priority
                                  />
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
