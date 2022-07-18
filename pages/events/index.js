import EventList from '../../components/events/event-list';
import { getAllEvents } from '../../dummy-data';
import EventSearch from '../../components/events/events-search';
import { useRouter } from 'next/router';
import { Router } from 'react-router-dom';
function AllEvents() {
	const router = useRouter();
	const events = getAllEvents();

	const findEventHandler = (year, month) => {
		const path = `/events/${year}/${month}`;
		router.push(path);
	};
	return (
		<div>
			<EventSearch onSearch={findEventHandler} />
			<EventList items={events} />
		</div>
	);
}

export default AllEvents;
