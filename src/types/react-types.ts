/* eslint-disable @typescript-eslint/no-empty-object-type */
/** biome-ignore-all lint/complexity/noBannedTypes: i dont want this */

export type FC<P = {}> = React.FunctionComponent<P>;
export type FCWithChildren<P = unknown> = FC<React.PropsWithChildren<P>>;
