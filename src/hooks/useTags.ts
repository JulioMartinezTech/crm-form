//dependecies
import { useEffect } from "react";
//Api
import { createTag, associateTag } from "../api/monicaApi";
//types
import { ApiTag, ApiAssociateTag } from "../types/monicaTypes";

export const useTags = (tagName: ApiTag | null, contactId: string | null) => {
  useEffect(() => {
    if (!tagName || !contactId) return;
    const createandAssociateTag = async () => {
      try {
        const response = await createTag(tagName);
        const updateData: ApiAssociateTag = {
          id: contactId,
          tags: [response.data.name],
        };
        await associateTag(updateData);
      } catch (error) {
        console.error(error);
      }
    };
    createandAssociateTag();
  }, [tagName, contactId]);
};
