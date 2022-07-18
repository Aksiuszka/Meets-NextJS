import { useRouter } from 'next/router';
import EventList from '../../components/events/event-list';
import { getFilteredEvents } from '../../dummy-data';
import ResultsTitle from '../../components/events/results-title';
import ErrorAlert from '../../components/ui/error-alert';

function FilteredEvents() {
	const router = useRouter();
	const slug = router.query.slug;
	const filteredYear = slug[0];
	const filteredMonth = slug[1];
	const yearAsNumber = +filteredYear;
	const monthAsNumber = +filteredMonth;
	if (!FilteredEvents) {
		return <h1>Loading...</h1>;
	}
	const filteredEvents = getFilteredEvents({ year: yearAsNumber, month: monthAsNumber });
	if (!filteredEvents || filteredEvents.length === 0) {
		return (
			<ErrorAlert>
				<h1>Nope, no events here</h1>
			</ErrorAlert>
		);
	}
	const date = new Date(yearAsNumber, monthAsNumber - 1);
	console.log(filteredEvents);
	return (
		<div>
			<ResultsTitle date={date} />
			<EventList items={filteredEvents} />
		</div>
	);
}

export default FilteredEvents;
