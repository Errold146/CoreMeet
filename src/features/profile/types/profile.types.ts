import { InferSelectModel } from "drizzle-orm";

import { User } from "../../auth";
import { community, connect } from "@/src/db/schema";

export type ProfileConnect = InferSelectModel<typeof connect>;

export type ProfileCommunityWithConnects = InferSelectModel<typeof community> & {
    connects: ProfileConnect[];
};

export type FullProfile = User & {
    createdCommunities: ProfileCommunityWithConnects[];
};
