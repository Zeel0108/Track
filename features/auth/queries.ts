"use server";
import { createSessionClient } from "@/lib/appwrite";

export const getCurrent = async () => {
  try {
    const { account } = await createSessionClient();

    return await account.get();
  } catch (error) {
    console.log("Failed to fetch current user", error);
    return null;
  }
};
