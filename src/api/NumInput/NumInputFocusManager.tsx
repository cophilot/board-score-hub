/* eslint-disable react-refresh/only-export-components */
import React, { ReactNode } from 'react';

export type NumPadListener = (v: number) => void;

const NumPadContext = React.createContext({
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	focus: (_onLostFocus: () => void) => {},
});

export function useNumInputFocus() {
	const context = React.useContext(NumPadContext);
	if (!context) {
		throw new Error(
			'useNumInputFocus must be used within a NumInputFocusManager',
		);
	}
	return context.focus;
}

interface Props {
	children: ReactNode;
}

export function NumInputFocusManager({ children }: Props) {
	const [looseFocus, setLooseFocus] = React.useState<() => void>(
		() => () => {},
	);

	const focus = (onLostFocus: () => void) => {
		looseFocus();
		setLooseFocus(() => onLostFocus);
	};

	return (
		<NumPadContext.Provider
			value={{
				focus,
			}}
		>
			{children}
		</NumPadContext.Provider>
	);
}
