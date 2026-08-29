import { GameWithView } from './core/types/GameWithView';

export default class ObjectFactory {
	static DISABLE_VIEW_CALLBACK = false;

	public static create(
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		viewCallback: () => any,
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		defCallback: () => any,
	): GameWithView {
		const v = this.DISABLE_VIEW_CALLBACK ? viewCallback() : null;
		return {
			view: v,
			definition: defCallback(),
		};
	}
}
