import Link from 'next/link';

export function Tiles3() {
  return (
    <div className="row gx-md-5 gy-5">
      <div className="col-md-6">
        <Link title="Service Time" href="/i-am-new" className="col-md-12 order-md-2">
          <figure className="rounded mt-md-10 position-relative overflow-hidden">
            <img src="/img/photos/w8.png" srcSet="/img/photos/w8.png 2x" alt="" className="img-fluid" />
            <figcaption className="position-absolute top-50 start-50 text-nowrap translate-middle text-white fw-bold fs-20 bg-dark bg-opacity-50 px-4 py-2 rounded">
              I am New
            </figcaption>
          </figure>
        </Link>
        <div className="col-md-12 order-md-2 mt-4">
          <Link title="Give" href="/give" className="col-md-12 order-md-2">
            <figure className="rounded position-relative overflow-hidden">
              <img
                src="/img/give.png"
                srcSet="/img/give.png 2x"
                alt=""
                className="img-fluid"
              />
              <figcaption className="position-absolute top-50 start-50 text-nowrap translate-middle text-white fw-bold fs-20 bg-dark bg-opacity-50 px-3 py-2 rounded">
                Give
              </figcaption>
            </figure>
          </Link>
        </div>
      </div>

      <div className="col-md-6">
        <div className="row gx-md-5 gy-5">
          <Link title="Service Time" href="/service-time" className="col-md-12 order-md-2">
            <div className="col-md-12 order-md-1">
              <figure className="rounded position-relative overflow-hidden">
                <img src="/img/photos/sa25.png" srcSet="/img/photos/sa25.png 2x" alt="" className="img-fluid" />
                <figcaption className="position-absolute top-50 start-50 translate-middle text-white fw-bold fs-20 bg-dark bg-opacity-50 px-3 py-2 rounded text-nowrap">
                  Services Time
                </figcaption>
              </figure>
            </div>
          </Link>

          <div className="col-md-10 order-md-2">
            <Link title="Service Time" href="/free-transport" className="col-md-12 order-md-2">
              <div className="card text-center">
                <figure className="rounded position-relative overflow-hidden">
                  <img src="/img/photos/w5.png" srcSet="/img/photos/w5.png 2x" alt="" className="img-fluid" />
                  <figcaption className="position-absolute top-50 start-50 translate-middle text-white fw-bold fs-20 bg-dark bg-opacity-50 px-3 py-2 rounded text-nowrap">
                    Free Transport
                  </figcaption>
                </figure>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Tiles4() {
  return (
    <div className="row gx-md-5 gy-5">
      <div className="col-md-6">
        <Link title="Testimonies" href="/testimonies" className="col-md-12 order-md-3">
          <figure className="rounded position-relative overflow-hidden">
            <img src="/img/photos/w7.png" srcSet="/img/photos/w7.png 2x" alt="" className="img-fluid" />
            <figcaption className="position-absolute top-50 start-50 translate-middle text-white fw-bold fs-20 bg-dark bg-opacity-50 px-3 py-2 rounded">
              Testimonies
            </figcaption>
          </figure>
        </Link>

        <div className="col-md-12 order-md-2 mt-4">
          <Link title=" Donate Foodbank" href="/foodBank" className="col-md-12 order-md-2">
            <figure className="rounded position-relative overflow-hidden">
              <img
                src="/img/food-donation/fd_2.png"
                srcSet="/img/food-donation/fd_2.png 2x"
                alt=""
                className="img-fluid"
              />
              <figcaption className="position-absolute top-50 start-50 text-nowrap translate-middle text-white fw-bold fs-20 bg-dark bg-opacity-50 px-3 py-2 rounded">
                Foodbank
              </figcaption>
            </figure>
          </Link>
        </div>
      </div>

      <div className="col-md-6">
        <div className="row gx-md-5 gy-5">
          <div className="col-md-12 order-md-2">
            <Link title="Prayers" href="/prayers" className="col-md-12 order-md-2">
              <figure className="rounded position-relative overflow-hidden">
                <img src="/img/photos/w3.png" srcSet="/img/photos/w3.png 2x" alt="" className="img-fluid" />
                <figcaption className="position-absolute top-50 start-50 translate-middle text-white fw-bold fs-20 bg-dark bg-opacity-50 px-3 py-2 rounded">
                  Prayers
                </figcaption>
              </figure>
            </Link>
          </div>

          <div className="col-md-10 order-md-1">
            <div className="card text-center">
              <Link title=" Satellite Fellowship" href="/fellowship" className="col-md-12 order-md-2">
                <figure className="rounded position-relative overflow-hidden">
                  <img src="/img/photos/w2.png" srcSet="/img/photos/w2.png 2x" alt="" className="img-fluid" />
                  <figcaption className="position-absolute top-50 start-50 text-nowrap translate-middle text-white fw-bold fs-20 bg-dark bg-opacity-50 px-3 py-2 rounded">
                    Satellite Fellowship
                  </figcaption>
                </figure>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
