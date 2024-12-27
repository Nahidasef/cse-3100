import './AboutUs.css';

export const AboutUs = () => {
  const teamMembers = [
    { name: 'Bob doe', designation: 'Director', image: 'https://randomuser.me/api/portraits/men/1.jpg' },
    { name: 'Ajmayeen kamal', designation: 'Adoption Specialist', image: 'https://randomuser.me/api/portraits/men/65.jpg' },
    { name: 'Steve Smith', designation: 'Doctor', image: 'https://randomuser.me/api/portraits/men/8.jpg' },
  ];

  return (
    <div className="about-container">
      <h1 className="about-heading">Purrfect Adoption</h1>
      <p className="about-text">
        Welcome to Purrfect Adoption! We are dedicated to finding loving homes for adorable cats. 
        Our mission is to connect cat lovers with their furry friends while ensuring each cat 
        finds a safe, warm, and caring forever home.
      </p>

      <h2 className="about-subheading">Our Mission</h2>
      <p className="about-text">
        Our mission is simple: to rescue, rehabilitate, and rehome cats in need. We believe every cat deserves 
        a loving family and a chance at a happy life. We are committed to providing proper care, medical attention, 
        and the attention each cat deserves until they find their forever home. Together, we can make every paw count!
      </p>

      <h2 className="about-subheading">Our History</h2>
      <p className="about-text">
        Purrfect Adoption was founded with a single goal in mind: to give cats a better life through adoption. 
        Over the years, we've grown from a small rescue team to a thriving organization that has helped hundreds of 
        cats find their forever families. What started as a passion project has now become a community-driven effort 
        dedicated to saving lives and spreading love, one adoption at a time.
      </p>

      <h2 className="about-subheading">Our Team</h2>
      <div className="team-section">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.image} alt={member.name} className="team-image" />
            <h3 className="team-name">{member.name}</h3>
            <p className="team-designation">{member.designation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
