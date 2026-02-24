class TimeObject {
	hours: number;
	minutes: number;
	seconds: number;

	constructor(hours: number, minutes: number, seconds: number) {
		this.hours = hours;
		this.minutes = minutes;
		this.seconds = seconds;

		if (this.seconds >= 60) {
			this.minutes += Math.floor(this.seconds / 60);
			this.seconds = this.seconds % 60;
		}
		if (this.minutes >= 60) {
			this.hours += Math.floor(this.minutes / 60);
			this.minutes = this.minutes % 60;
		}
	}

	public static seconds(s: number) {
		return new TimeObject(0, 0, s);
	}
	public static minutes(m: number) {
		return new TimeObject(0, m, 0);
	}
	public static hours(h: number) {
		return new TimeObject(h, 0, 0);
	}
}

export default TimeObject;
