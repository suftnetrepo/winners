import Link from "next/link";

export default function Talk() {
  return (
    <div className="row gx-0">
      <div
        className="col-lg-6 image-wrapper bg-image bg-cover rounded d-none d-md-block"
        style={{ backgroundImage: "url(/img/photos/IMG_1020.png)" }}
      />

      <div className="col-lg-6">
        <div className="p-10 p-md-11 p-lg-13">
          <h2 className="display-4 mb-3">Let’s Talk</h2>

          <p className="lead fs-lg">
          Let’s build something meaningful together.
          Whether you're new to the faith, seeking growth, or ready to lead — there's a place for you here.
          </p>

          <p>
          We’ve helped hundreds discover purpose, deepen their walk with God, and become impactful leaders in their families, communities, and careers.
          </p>

        
        </div>
      </div>
    </div>
  );
}
