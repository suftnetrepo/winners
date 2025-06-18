// import MasonryGrid from "../../MasonryGrid";
import { TestimonialCard } from '@/components/reuseable/cards/TestimonialCard';
// CUSTOM DATA
import { testimonialList } from '@/data/demo-7';
import MasonryGrid from '@/components/reuseable/MasonryGrid';
import NextLink from '@/components/reuseable/links/NextLink';

export default function Testimonial() {
  return (
    <div>
      <div className="text-center mb-10">
        <h2 className="display-4 ">Testimonies from Our Church</h2>
        <span>
          Be encouraged by the powerful stories of transformation, healing, and answered prayers shared by members of
          our church community.
        </span>
        <p><strong>Have a testimony to share?</strong> We’d love to hear it!</p>
        <NextLink title="Share Your Testimony" href="#" className="btn btn-leaf rounded-pill" />
      </div>

      <div className="grid mt-8">
        <MasonryGrid className="row isotope gy-6">
          {testimonialList.map((item) => (
            <div className="item col-md-6 col-xl-4" key={item.id}>
              <TestimonialCard {...item} shadow />
            </div>
          ))}
        </MasonryGrid>
      </div>
    </div>
  );
}
