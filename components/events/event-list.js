import EventItem from './eventItem';
import classes from './event-list.module.css';
function EventList(props) {
	return (
		<ul className={classes.list}>
			{props.items.map(meetup => (
				<EventItem
					key={meetup.id}
					id={meetup.id}
					title={meetup.title}
					image={meetup.image}
					date={meetup.date}
					location={meetup.location}
					description={meetup.description}
				/>
			))}
		</ul>
	);
}

export default EventList;
