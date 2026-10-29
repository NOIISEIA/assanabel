"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

/** Année courante, lue seulement dans le navigateur (Next interdit `new Date()` au prérendu). */
export function CurrentYear() {
  const year = useSyncExternalStore(
    subscribe,
    () => String(new Date().getFullYear()),
    () => "",
  );
  return <span>{year}</span>;
}
