/* eslint-disable react-refresh/only-export-components */
import React, { ReactNode } from 'react';

export type NumPadListener = (v: number) => void;

const NumPadContext = React.createContext({
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	focus: (_onLostFocus: () => void) => {},
	looseFocus: () => {},
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

export function useNumInputLooseFocus() {
	const context = React.useContext(NumPadContext);
	if (!context) {
		throw new Error(
			'useNumInputLooseFocus must be used within a NumInputFocusManager',
		);
	}
	return context.looseFocus;
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

	const looseFocusHandler = () => {
		looseFocus();
		setLooseFocus(() => () => {});
	};

	return (
		<NumPadContext.Provider
			value={{
				focus,
				looseFocus: looseFocusHandler,
			}}
		>
			{children}
		</NumPadContext.Provider>
	);
}
