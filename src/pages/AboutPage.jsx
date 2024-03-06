import { Box } from "@mui/system";
import PageHeader from "../components/PageHeader";
import { useTheme } from "../providers/ThemeProvider";

const AboutPage = () => {
  const { isDark } = useTheme();

  //Css Style Section

  const ContainerStyle = {
    padding: "20px 30px",
    color: isDark ? "white" : "",
  };

  const TitleStyle = {
    fontSize: "1.5rem",
    fontWeight: "600",
    paddingBottom: "20px",
  };

  const SubContextStyle = {
    fontSize: "1.2rem",
    fontWeight: "500",
    padding: "20px 0",
  };

  //End of Css Style Section

  return (
    <Box>
      <PageHeader title="About" description="Read a little bit about us and our services" />
      <Box sx={ContainerStyle}>
        <h2 style={TitleStyle}>What we do</h2>
        <p>
          It’s our job to help businesses of all sizes succeed online, and we understand that it’s not a one-size-fits-all type of thing. That’s why
          we offer a variety of options and solutions tailored to meet your specific needs. For those of you that want to build things on your own, we
          offer easy-to-use website builder tools. With a variety of templates and a library of images to choose from, you’ll be able to build a
          professional website for your business. If you want to have us do it for you, our team of in-house designers and copywriters are ready to
          help bring your vision to life. We also have the tools you need to start selling online with a variety of ecommerce options. Whether you
          choose a DIY option or work with our ecommerce experts, you’ll be able to create an online store that showcases your products and content
          for your customers.
        </p>
        <h3 style={SubContextStyle}>
          No matter where you’re at in your online journey, we’re here to help with the website, ecommerce, and online marketing solutions you need to
          succeed.
        </h3>
      </Box>
    </Box>
  );
};

export default AboutPage;
