import bannerImg from '../../assets/banner-img.png';

const Banner = () => {
  return (
    <div className='my-5 rounded-xl'>
      <div className="hero min-h-[80vh] bg-base-200 rounded-sm">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={bannerImg}
            className="max-w-sm"
          />
          <div>
            <h1 className="text-5xl font-bold">Want Something Shop Now</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
