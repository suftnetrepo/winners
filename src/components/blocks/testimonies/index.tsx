
import TestimonyForm from '@/components/elements/testimonyform';

export default function Testimonial() {
  return (
    <div>
      <div className="text-center col-lg-9 mx-auto col-lg-9 fs-lg mb-10">
        <p className='text-dark'><strong>Have a testimony to share?</strong> We’d love to hear it!</p>
      </div>
      <TestimonyForm />
    </div>
  );
}
