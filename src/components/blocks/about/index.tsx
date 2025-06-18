import { NextPage } from 'next';
import Image from 'next/image';

const AboutUs: NextPage = () => {
  return (
    <>
      <section id="about">
        <div className="wrapper bg-white">
          <div className="container py-14 py-md-16">
            <div className="row gx-md-8 gx-xl-12 gy-6 align-items-center">
              <div className="col-md-8 col-lg-5 order-lg-2 mx-auto">
                <div className="img-mask mask-2">
                  <Image width={500} height={500} src="/img/photos/bishop.png" alt="" className='' />
                </div>
              </div>

              <div className="col-lg-7">
                <h2 className="display-5 mb-3">  Welcome to Winners Chapel International, Peterborough.</h2>
                <p className="lead">
                 We are an arm of the Living Faith Church
                  Worldwide. Our vision, as delivered to the Presiding Bishop, Dr David Oyedepo, is to preach the Word
                  of Faith, liberating men everywhere from every oppression of the devil. We are dedicated to
                  accomplishing this task throughout the United Kingdom, and Europe at large.
                </p>
                <p>
                Our church in London was officially inaugurated in 2002 to spread the Word of Faith and to bring the liberation mandate to the United Kingdom and Europe. We have experienced diverse testimonies as individuals and as a church ever since. 
                </p>
                <p>
                We are glad you have come to this website because we know your life will never be the same again. Take time to browse through the site and we know it would be a blessing to you. Also, join any of our weekly & Sunday services and as you come to visit us, God will meet you at every point of your need.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
