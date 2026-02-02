
import { Tiles3, Tiles4 } from '@/components/elements/tiles/title3';

export default function Tiles() {
  return (
    <div className=' w-lg-50 w-xl-50 mx-auto' style={{width: '60%'}}>
      <h3 className=" display-4 mb-3 text-center">Welcome to A Winning World</h3>
      <p className="lead fs-lg mb-10 text-center">
        We’re thrilled to have you here! As you explore, may the Word shared through this ministry uplift your spirit
        and transform your life. You’re not here by accident—God has something special for you.
      </p>

      <div className="row  gy-6 align-items-center">
        <div className="col-lg-6">
          <Tiles3 />
        </div>

        <div className="col-lg-6 ">
          <Tiles4 />
        </div>
      </div>
    </div>
  );
}
