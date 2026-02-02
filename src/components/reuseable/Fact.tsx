
import Link from 'next/link';
import NextLink from "@/components/reuseable/links/NextLink";

interface FactData {
  description?: string;
  month?: string;
  verse?: string;
}

type FactProp = {
  data: FactData
}

export default function Fact({data} : FactProp) {
  return (
    <section className="section-frame mx-xxl-11 overflow-hidden">
        <div className="container py-16 py-md-18 text-center">
          <div className="row">
            <div className="col-lg-9 col-xxl-8 mx-auto">
              <h1 className="display-1 fs-40 mx-lg-n10 mx-xl-0 mb-5">Prophetic Focus</h1>
              <Link href="#" className="btn btn-soft-leaf rounded-pill mb-4">
                {data?.month}
              </Link>
              <p className="lead fs-24 px-md-12 px-lg-0 mx-lg-n10 mx-xl-0 mb-4">
                  {data?.description}
              </p>

              <Link href="#" className="btn btn-soft-leaf rounded-pill">
                  {data?.verse}
              </Link>
            </div>
          </div>
        </div>
    </section>
  );
}


// export default function Fact({ data }: FactProp) {
//   return (
//     <div className=" d-flex justify-content-center">
//       <div
//         className="card image-wrapper bg-full bg-image bg-overlay bg-overlay-300 mb-14"
//         style={{ backgroundImage: "url(/img/photos/bg16.png)", width: '70%' }}>
//         <div className="card-body p-10 p-xl-12">
//           <div className="row text-center">
//             <div className="col-xl-11 col-xxl-9 mx-auto">
//               <h2 className="fs-16 btn btn-soft-leaf rounded-pill mb-4"> {data?.month}</h2>
//               <h3 className="display-3 mb-8 px-lg-8 text-white">
//                 {data?.description}
//               </h3>
//             </div>
//           </div>

//           <div className="d-flex justify-content-center">
//             <Link href="#" className="btn btn-soft-leaf rounded-pill">
//               {data?.verse}
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

