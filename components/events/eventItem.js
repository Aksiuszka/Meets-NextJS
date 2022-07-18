import Button from '../ui/button';
import classes from './event-item.module.css';

function EventItem(props) {
	const image = props.image;
	const location = props.location;
	const humanReadableDate = new Date(props.date).toLocaleDateString('en-US', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	});
	const formattedAddress = location;
	const exploreLink = `/events/${props.id}`;
	return (
		<li className={classes.item}>
			<img src={'/' + image} alt={props.title} />
			<div className={classes.content}>
				<div className={classes.summary}>
					<h2>{props.title}</h2>
					<div className={classes.date}>
						<time>{humanReadableDate}</time>
					</div>
					<div className={classes.address}>
						<address>{formattedAddress}</address>
					</div>
				</div>
				<div className={classes.actions}>
					<Button link={exploreLink}>
						<span>Explore Event</span>
						<span className={classes.icon}></span>
					</Button>
				</div>
			</div>
		</li>
	);
}
export default EventItem;
