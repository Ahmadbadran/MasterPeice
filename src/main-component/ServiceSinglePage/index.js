import React, { Fragment } from "react";
import Navbar from "../../components/Navbar";
import PageTitle from "../../components/pagetitle";
import Scrollbar from "../../components/scrollbar";
import { useParams } from "react-router-dom";
import Services from "../../api/service";
import RelatedService from "./related";
import Discuss from "./discuss";
import ServiceSidebar from "./sidebar";
import Logo from "../../images/logo.svg";
import Footer from "../../components/footer";

const ServiceSinglePage = (props) => {
  const { id } = useParams();

  const serviceDetails = Services.find((item) => item.Id === id);

  return (
    <Fragment>
      <Navbar Logo={Logo} />
      <PageTitle pageTitle={serviceDetails.sTitle} pagesub={"Project"} />
      <div className="wpo-service-single-area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-12">
              <div className="wpo-service-single-wrap">
                <div className="wpo-service-single-item">
                  <div className="wpo-service-single-main-img">
                    <img src={serviceDetails.sImg} alt="" />
                  </div>
                  <div className="wpo-service-single-title">
                    <h3>{serviceDetails.sTitle}</h3>
                  </div>
                  <p>
                    Perfect architecture planning involves designing a
                    well-structured and scalable system by considering factors
                    such as functional requirements, performance, reliability,
                    security, maintainability, and extensibility. It entails
                    thorough requirement analysis, system design, and careful
                    selection of components. Scalability and performance
                    considerations, security design, and efficient data
                    management are essential. The goal is to create a robust
                    system that can accommodate future growth and changes while
                    ensuring maintainability and extensibility.
                  </p>
                  <p>
                    In addition, perfect architecture planning requires
                    effective communication and collaboration among
                    stakeholders, including developers, architects, project
                    managers, and business stakeholders. It involves
                    understanding the business goals and aligning the technical
                    architecture to support those objectives. The planning
                    process should also involve evaluating available
                    technologies, frameworks, and tools to choose the most
                    suitable ones for the project. Regular reviews and
                    iterations are necessary to ensure the architecture remains
                    aligned with evolving requirements and industry best
                    practices. With meticulous planning and attention to detail,
                    a perfect architecture can provide a solid foundation for
                    the successful development and long-term success of a
                    software system.
                  </p>
                  <div className="row mt-4">
                    <div className="col-md-6 col-sm-6 col-12">
                      <div className="wpo-p-details-img">
                        <img src="assets/images/service-single/2.jpg" alt="" />
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-12">
                      <div className="wpo-p-details-img">
                        <img src="assets/images/service-single/3.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wpo-service-single-item list-widget">
                  <div className="wpo-service-single-title">
                    <h3>Our Capabilities</h3>
                  </div>
                  <p>
                    Our capabilities for perfect planning revolve around
                    thorough research, strategic thinking, effective
                    communication, adaptability, and delivering measurable
                    results. We conduct comprehensive analysis to gather
                    valuable insights and develop a solid foundation for our
                    plans. Our strategic thinking enables us to anticipate
                    challenges and identify growth opportunities. We prioritize
                    open communication and collaboration, fostering a shared
                    understanding and ownership among stakeholders. With our
                    adaptive approach, we adjust plans as needed to accommodate
                    changing circumstances. Ultimately, our goal is to deliver
                    tangible outcomes and continuously improve our planning
                    efforts.
                  </p>
                </div>
                <div className="wpo-service-single-item">
                  <div className="wpo-service-single-title">
                    <h3>Our approach</h3>
                  </div>
                  <p>
                    Our approach to perfect planning is grounded in a systematic
                    and collaborative process. We begin by gaining a deep
                    understanding of our clients' goals, objectives, and
                    challenges. Through open dialogue and active listening, we
                    work closely with our clients to identify their unique needs
                    and aspirations. Drawing upon our expertise and industry
                    knowledge, we analyze relevant data and market trends to
                    inform our strategies. We emphasize a holistic view,
                    considering all aspects of the project or initiative. Our
                    approach involves regular evaluation and refinement,
                    ensuring that our plans remain aligned with evolving
                    circumstances. We prioritize transparency, clear
                    communication, and stakeholder engagement throughout the
                    planning journey. By combining creativity with practicality,
                    we strive to develop solutions that are both visionary and
                    actionable.
                  </p>
                </div>
                <div className="wpo-service-single-item list-widget">
                  <div className="wpo-service-single-title">
                    <h3>Our Work Process</h3>
                  </div>
                  <ul>
                    <li>
                      Understanding client goals: We begin by thoroughly
                      understanding our clients' goals, objectives, and desired
                      outcomes for the planning project.
                    </li>
                    <li>
                      Conducting comprehensive research: We gather and analyze
                      relevant data, market trends, and industry insights to
                      inform our planning strategies.
                    </li>
                    <li>
                      Collaborative approach: We foster open communication and
                      collaboration with our clients, stakeholders, and team
                      members, ensuring that everyone's perspectives and
                      expertise are considered.
                    </li>
                    <li>
                      Defining scope and milestones: We establish a clear scope
                      of work, set achievable milestones, and outline a
                      realistic timeline for the planning process.
                    </li>
                    <li>
                      Assessing risks and challenges: We identify potential
                      risks and challenges that may impact the planning process
                      or project implementation, and develop mitigation
                      strategies accordingly.
                    </li>
                  </ul>
                </div>
                <RelatedService />
                <Discuss />
              </div>
            </div>
            <ServiceSidebar />
          </div>
        </div>
      </div>
      <Footer ftClass={"wpo-site-footer-s2"} />
      <Scrollbar />
    </Fragment>
  );
};
export default ServiceSinglePage;
