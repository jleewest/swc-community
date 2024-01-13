import { useParams } from 'react-router-dom';
import TopicDetails from './TopicDetails';

export default function TopicComments(topic) {
  const topicId = useParams();
  console.log(topicId.id);
  console.log(topic);
  return (
    <div>
      <TopicDetails topic={topic} />
    </div>
  );
}
