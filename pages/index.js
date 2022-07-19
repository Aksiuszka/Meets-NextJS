import { getFeaturedEvents } from '../dummy-data';
import EventList from '../components/events/event-list';
import Head from 'next/head';

function HomePage() {
	const featuredEvents = getFeaturedEvents();
	return (
		<div>
			<Head>
				<title>It meets</title>
				<meta name="description" content="Find your meetings" />
			</Head>
			<EventList items={featuredEvents} />
		</div>
	);
}

export default HomePage;
