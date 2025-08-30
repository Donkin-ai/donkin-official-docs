import { docs, start } from "@/.source";
import { loader } from "fumadocs-core/source";

export const startSource = loader({
  baseUrl: "/start",
  source: start.toFumadocsSource(),
});

export const source = loader({
  baseUrl: "/docs",
  source: docs.toFumadocsSource(),
});
