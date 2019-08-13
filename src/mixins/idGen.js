export default {
	props: {
		id: {
			type: String,
			validator: value => /^[A-Za-z]+[\w-]*$/.test(value)
		}
	},
	computed: {
		idGen() {
			return typeof this.id != 'undefined' ? this.id : 'rbc' + this._uid;
		}
	}
};
