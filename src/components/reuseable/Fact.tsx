import NextLink from './links/NextLink';
import Link from 'next/link';

export default function Fact() {
  return (
    <section className="section-frame mx-xxl-11 overflow-hidden">
      <div
        className="wrapper image-wrapper bg-image bg-cover bg-overlay bg-overlay-light-500"
        style={{ backgroundImage: 'url(/img/photos/bg23z.png)' }}
      >
        <div className="container py-16 py-md-18 text-center">
          <div className="row">
            <div className="col-lg-9 col-xxl-8 mx-auto">
              <h1 className="display-1 fs-40 mx-lg-n10 mx-xl-0 mb-5">Prophetic Focus</h1>
              <Link href="#" className="btn btn-soft-leaf rounded-pill mb-4">
                June
              </Link>
              <p className="lead fs-24 px-md-12 px-lg-0 mx-lg-n10 mx-xl-0 mb-4">
                A wise man scaleth the city of the mighty, and casteth down the strength of the confidence thereof.
              </p>

              <Link href="#" className="btn btn-soft-leaf rounded-pill">
                Proverbs 21:22
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
