import createServerContext from "@nimpl/context/create-server-context";

export const UninitializedContext = createServerContext({ uninitialized: "default value" });
