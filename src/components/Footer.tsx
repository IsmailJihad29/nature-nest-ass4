const Footer = () => {
  return (
    <footer className="footer bg-[#2E7D32] text-[#EFE3D5]  p-10">
      <aside>
      <img src="https://i.ibb.co.com/Zmn3jG2/logo.jpg" alt=""  className="size-28"/>
        <p className="text-xl font-bold">
         Nature Nest
          
      
        </p>
        <p>    "Where Nature Thrives, and Your Garden Blossoms."</p>
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Plants</a>
        <a className="link link-hover">Plants Care</a>
        <a className="link link-hover">Plants Growing Advice</a>
        <a className="link link-hover">Plant Teaching</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
