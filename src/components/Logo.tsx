import logoImage from "../../src/assets/LeadGenSuper (1).png";

export const Logo = () => (
  <div className="flex items-center justify-center">
    <img 
      src={logoImage} 
      alt="Lead Generator Super Logo"
      className="h-12 w-auto"
    />
  </div>
);