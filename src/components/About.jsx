import 'remixicon/fonts/remixicon.css';

function About() {
  const stats = [
    {
      id: 1,
      num: "200+",
      desc: "Luxury Vehicles Available",
    },
    {
      id: 2,
      num: "24/7",
      desc: "Luxury Vehicle Assistance",
    },
    {
      id: 3,
      num: "8,000+",
      desc: "5-Star Reviews",
    },
    {
      id: 4,
      num: "20+",
      desc: "Luxury Car Brands Available",
    },
  ];

  const reviewStat = stats.find(stat => stat.desc === "5-Star Reviews");

  return(
    <div id="about" className="full-screen-section">
      <div className="about-section">
        <h2>We offer <span>premium services</span> found <br />nowhere else</h2>
        <div className="about-stats">
          {stats.map((stat) => {
            const lastStat = stats[stats.length - 1];

            return [
              <div className="stat" key={stat.id}>
                <p className="stat-num">{stat.num}</p>
                <p className="stat-desc">{stat.desc}</p>
                {stat === reviewStat && (
                  <div className="review-stars">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                  </div>
                )}
              </div>,
              stat != lastStat && <div className="vl" key={`vl-${stat.id}`}></div>
            ];
          })}
        </div>
        <div className="about-desc">
          <p>
            At <span>VDrive</span>, we believe driving should be
            an <span>experience</span>- <br />one that&apos;s synonymous with
            luxury, performance, and freedom.
          </p>
        </div>
        <button>Learn More</button>
      </div>
    </div>
  );
}

export default About;