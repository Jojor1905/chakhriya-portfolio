import { ActivityCard } from "@/components/activity/activity-card";
import type { Activity } from "@/types/activity";

type ActivityListProps = {
  activities: Activity[];
};

export function ActivityList({ activities }: ActivityListProps) {
  return (
    <div className="activity-list">
      {activities.map((activity, index) => (
        <ActivityCard
          key={activity.title}
          activity={activity}
          index={index}
        />
      ))}
    </div>
  );
}
