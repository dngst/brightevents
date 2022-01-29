import { Helmet } from "react-helmet";
import Container from "components/container/Container";
import Title from "components/title/Title";
import Paragraph from "components/paragraph/Paragraph";


const About = () => {
	return (
		<Container bg>
		<Helmet>
			<title>About | Bright Events</title>
        </Helmet>
		<Title>about</Title>
			<Paragraph>
				A platform for event organizers to create and manage different
				types of events while making them easily accessible to target
				markets.
			</Paragraph>
		</Container>
		);
}

export default About;
