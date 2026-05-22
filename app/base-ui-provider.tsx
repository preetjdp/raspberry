"use client";

import { CSPProvider } from "@base-ui/react/csp-provider";
import {
	DirectionProvider,
	type TextDirection,
} from "@base-ui/react/direction-provider";
import type { ReactNode } from "react";

type BaseUIProviderProps = {
	children: ReactNode;
	cspNonce?: string;
	direction?: TextDirection;
};

export function BaseUIProvider({
	children,
	cspNonce,
	direction = "ltr",
}: BaseUIProviderProps) {
	return (
		<CSPProvider disableStyleElements nonce={cspNonce}>
			<DirectionProvider direction={direction}>{children}</DirectionProvider>
		</CSPProvider>
	);
}
