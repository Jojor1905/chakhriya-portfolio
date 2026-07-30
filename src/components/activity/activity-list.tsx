"use client";

import { ActivityCard } from "@/components/activity/activity-card";
import { StaggerGroup, StaggerItem, motionTokens } from "@/components/motion/reveal";
import type { Activity } from "@/types/activity";

type ActivityListProps = {
  activities: Activity[];
};

export function ActivityList({ activities }: ActivityListProps) {
  return (
    <StaggerGroup className="activity-list" delay={0.02}>
      {activities.map((activity, index) => (
        <StaggerItem key={activity.title} axis="x" distance={index % 2 === 0 ? -motionTokens.sideDistance : motionTokens.sideDistance}>
          <ActivityCard activity={activity} index={index} />
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
}
