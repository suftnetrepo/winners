
interface TalkData {
  description : string;
  secure_url : string;
  title : string;
  first_name : string;
  last_name : string;
}

type TalkProps = {
  data : TalkData
}

export default function Talk({ data }: TalkProps) {
  return (
    <div className="container shadow-sm rounded-4 overflow-hidden bg-white px-0">
      <div className="row g-0 align-items-stretch">
        {/* Left Side: Image */}
        <div
          className="col-md-6 d-none d-md-block"
          style={{
            backgroundImage: `url(${data?.secure_url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '450px' // Ensures the image has height regardless of text length
          }}
        />

        {/* Right Side: Content */}
        <div className="col-md-6 d-flex align-items-center">
          <div className="p-8 p-md-10 p-lg-12">
            <h2 className="display-4 mb-4 fw-bold">Let’s Talk</h2>
            
            {/* Using div instead of p because data?.description likely contains <p> tags */}
            <div 
              className="lead fs-lg text-secondary"
              dangerouslySetInnerHTML={{ __html: data?.description || "" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
