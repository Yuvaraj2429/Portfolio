import * as React from "react";
import '../components/style.css';
import Box from '@mui/system/Box';
import '../components/pdf.js'
import images1 from '../programmer.png';
import images2 from '../developer.jpg';
import images3 from '../work.svg'
import images4 from '../email.png'
import images5 from '../phone.png'
import images6 from '../software.png'
import images7 from '../code.png'
import images8 from '../review.png'
import images9 from '../github.png'
import images10 from '../taxi.png'
import images11 from '../dance.png'
import images12 from '../reviews.png'

const onButtonClick = () => {
  const pdfUrl = "Yuvaraj_Resume.pdf";
  const link = document.createElement("a");
  link.href = pdfUrl;
  link.download = "Yuvaraj_Resume.pdf"; // specify the filename
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
function Home(props) {
  return (
    <>
      <div className="div">
        <div className="div-2">
          <div className="div-3">
            <img src={images1} height="60" width="60" />
            <div className="div-4">
              <div className="div-5">Hi, Everyone</div>
              <div className="div-6">
              <button onClick={onButtonClick}>
                    Resume
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="div-7">
          <div className="div-8">Designer & Full Stack Developer</div>
          <div className="div-9">
            I design and code beautifully simple things, and I love what I do.
          </div>
          <div className="developer">
            <img src={images2} height="150" width="150" />
          </div>
        </div>
        <div className="div-10">
        
              <div className="div-11">
                <div className="div-12">Hi, I’m Yuvaraj. Nice to meet you.</div>
                <div className="div-13">
                  Since beginning my journey as a Web designer,
                  I've worked on few freelancing Projects.
                  <br />
                  I had a interest in a computer application Oriented field, with a strong background in web design and development. 

                  
                  I possess a wide range of technical skills and expertise, allowing me to effectively create and modify
                  engaging online experiences.
                  <br />
                
                </div>
              </div>
            
        </div>

        <div className="div-14">
          <div className="div-15">
            <div className="column">
              <div className="div-16">
                <div className="master"><img src={images6} height="60" width="60" /></div>
              
                <div className="div-17">UI Skills</div>
                <div className="div-18">
                  I value simple content structure, clean design
                  patterns, and thoughtful interactions.
                </div>
                <div className="div-25">Adobe Photoshop</div>
                <div className="div-22">Adobe Illustrator</div>
                <div className="div-23">Dev Tools:</div>
                <div className="div-24">Git Hub, VS Code, PyCharm</div>
                <div className="div-26">CodeKit, Figma</div>

              </div>
            </div>
            <div className="column-2">
              <div className="div-27">
                <div className="master">     <img src={images7} height="60" width="60" /></div>
              
                <div className="div-28">My Skills</div>
                <div className="div-29">
                  I like to code things from scratch, and enjoy
                  <br />
                  bringing ideas to life in the browser.
                </div>

                <div className="div-33">Html, Css, Bootstrap, Javascript</div>
                <div className="div-35">React Js</div>
                <div className="div-36">Python</div>
                <div className="div-37">WordPress</div>
                <div className="div-38">MYSQL</div>
                <div className="div-39">PHP</div>
                <div className="div-40">Flutter</div>
                <div className="div-34">.Net Programming</div>

              </div>
            </div>
            <div className="column-3">
              <div className="div-41">
                <div className="master">
              <img src={images8} height="60" width="60" />

                </div>
                <div className="div-42">Work Experience</div>
                <div className="div-43">
                  I genuinely care about people, and enjoy
                  helping them work on their craft.
                </div>

                <div className="div-47">1 year + 5 Months experience</div>
                <div className="div-48">Working as a Front End Developer</div>
                <div className="div-49">Building Websites Using Technology such as HTML, CSS, Bootstrap, Javascript</div>
                <div className="div-50">Also Using Platforms like WordPress, Wix to build Sites</div>
                <div className="div-51">Working in PHP and Flutter Platform too.</div>

              </div>
            </div>
          </div>
        </div>

        <div>

        </div>
        <div className="div-69">
          <div className="div-70">
            <div className="div-71">My Recent Work</div>
            <div className="div-72">
              Here are a few past design projects I've worked on.
              <br />
              <br />
              challenge to design and build my own.
            </div>
          </div>
        </div>
        <div className="div-73">
          <div className="div-74">
            <div className="column-18">
              
              <div className="div-75">
              <img src={images11} height="60" width="60" />
                <div className="div-76">
                  Dancer Portfolio
                </div>
                <div className="div-146">
                  A Portfolio for Dancer Madhuparna Kumar.
                  <br />
                  This Website has made with WordPress.
                </div>
                <div className="div-77">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/cce2297439b54f41cb9cb43008bbcb32d10589af054a77c1b679714608724ce6?apiKey=8aad33fd1f374db7bd5441d278a0d941&"
                    className="img-23"
                  />
                  <div className="div-78">https://madhuparnakumar.com/</div>
                </div>
              </div>
            </div>
            <div className="column-19">
              <div className="div-79">
              <img src={images10} height="60" width="60" />
                <div className="div-80">
                  Website for Cab
                </div>
                <div className="div-146">
                  Taxi Cab info site for Pondicherry Client
                  <br />
                  This Website has made with WordPress.
                </div>
                <div className="div-81">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ddf464a02053dacfbca9911e7d84c60a9664d12fb907b74c265cf6eb64b2ee6?apiKey=8aad33fd1f374db7bd5441d278a0d941&"
                    className="img-25"
                  />
                  <div className="div-82">https://cabsofpondy.com/</div>
                </div>
              </div>
            </div>
            <div className="column-20">
              <div className="div-83">
              <img src={images12} height="60" width="60" />
                <div className="div-84">
                  Review Hub 
                </div>
                <div className="div-146">
                  Where users can read and write reviews on 
                  <br></br>
                  various Products.
                  <br />
                  This is a React JS Project.
                </div>
                <div className="div-85">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/61b5a5a869a1b4bae8cf61f490a7a3e642e3023be0c93d4ad473a5a7f9a0d4ba?apiKey=8aad33fd1f374db7bd5441d278a0d941&"
                    className="img-27"
                  />
                  <div className="div-86">https://github.com/Yuvaraj2429</div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="div-115">Interested in collaborating with me?</div>
        <div className="div-116">
          I’m always open to discussing product design work or partnership
          opportunities.
        </div>
        <div className="div-117">
        <img src={images4} height="150" width="25" />

          <div className="div-118"><a href="https://www.linkedin.com/in/yuvaraj-b-279017227/">Start a conversation</a></div>
        </div>

        <div className="div-129">
          <div className="div-130">
            <div className="div-131">
              <div className="div-132">Start a project</div>{" "}
              <div className="div-133">
                Interested in working together for a Project? 
                <br />
              </div>{" "}
              <div className="div-134">
              <img src={images5} height="150" width="25" />

                {" "}
                <div className="div-135"><a href="tel:9360402940">Call Now</a></div>
              </div>
            </div>
          </div>
        </div>
        <div className="div-136">
          <div className="div-137">

            <div className="div-138">
              Living, learning, & leveling up
              <br />
              one day at a time.
            </div>
            <div className="div-139">

              <a href="https://www.linkedin.com/in/yuvaraj-b-279017227/">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/654298e61565f338714788de39dec311fe327cdb115ee4257cb82fffc7c943ec?apiKey=8aad33fd1f374db7bd5441d278a0d941&"
                className="img-46"
              />
              </a>
              
              <a href="https://github.com/Yuvaraj2429">
                  <img src={images9} height="50" width="50" className="img-49"/>

              </a>

              <a href="mailto:yuvarajb2324@gmail.com">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f2bbee8b28dfb7633c494b41fc8e5a3bd1c1a7144b36a2e81795c7a964b3014a?apiKey=8aad33fd1f374db7bd5441d278a0d941&"
                className="img-49"
              />
              </a>
            </div>
            <div className="div-140">
              <div className="div-141">Developed by me</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/24176aaf96efe2a60e2af7944567a5c56bd5db8f39178a582169fe3dec60085c?apiKey=8aad33fd1f374db7bd5441d278a0d941&"
                className="img-50"
              />
              <div className="div-142">2024</div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
export default Home;

