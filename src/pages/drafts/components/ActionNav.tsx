/* eslint-disable @typescript-eslint/no-empty-object-type */
import { ReactNode } from 'react';

type PropsWithChildren<P = unknown> = P & { children: ReactNode };

export function ActionNav({ children }: PropsWithChildren<{}>) {
	return <div className="flex justify-center items-center gap-3 py-2 px-3 w-fit mx-auto border">{children}</div>;
}
