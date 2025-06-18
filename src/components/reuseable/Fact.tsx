import NextLink from './links/NextLink';
import Link from "next/link";

// export default function xFact_() {
//   return (
//     <section
//       className="wrapper image-wrapper bg-image bg-overlay"
//       style={{ backgroundImage: "url(/img/photos/bg38.jpg)" }}>
//       <div className="container py-18">

//       </div>
//     </section>
//   );
// }

// export default function Fact() {
//   return (
//     <div className="card shadow-none bg-primary text-white py-8">
//       <div className="card-body">
//         <div className="row text-center">
//           <div className="col-lg-11 col-xl-10 col-xxl-8 mx-auto">
//             <h2 className="fs-16 text-uppercase text-dark mb-3">Prophetic Focus</h2>
//             <h3 className="fs-16 mb-6 text-dark px-lg-5 px-xxl-0">
//               A wise man scaleth the city of the mighty, and casteth down the strength of the confidence thereof.
//             </h3>

//             <NextLink href="#" title="Join Us" className="btn btn-white rounded-pill mb-0 text-nowrap" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



export default function Fact() {
  return (
    <section className="section-frame mx-xxl-11 overflow-hidden">
      <div
        className="wrapper image-wrapper bg-image bg-cover bg-overlay bg-overlay-light-500"
        style={{ backgroundImage: "url(/img/photos/bg23z.png)" }}>
        <div className="container py-16 py-md-18 text-center">
          <div className="row">
            <div className="col-lg-9 col-xxl-8 mx-auto">
              <h1 className="display-1 fs-40 mx-lg-n10 mx-xl-0 mb-5">
              Prophetic Focus
              </h1>

              <p className="lead fs-24 px-md-12 px-lg-0 mx-lg-n10 mx-xl-0 mb-8">
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
