
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

export default function Talk({data}: TalkProps) {
  return (
    <div className="container d-flex justify-content-center row gx-0">
      <div
        className="col-lg-6 image-wrapper bg-image bg-cover rounded d-none d-md-block"
        style={{ backgroundImage: `url(${data?.secure_url})` }}
      />

      <div className="col-lg-6">
        <div className="p-10 p-md-11 p-lg-13">
          <h2 className="display-4 mb-3">Let’s Talk</h2>

          <p className="lead fs-lg">
          {data?.description}
          </p>
        </div>
      </div>
    </div>
  );
}
