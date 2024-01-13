import { useParams } from 'react-router-dom';
import TopicDetails from './TopicDetails';

export default function TopicComments() {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    getTopics().then((data) => {
      setTopics(sortTopics(data));
    });
  }, []);

  const topicId = useParams();
  console.log(topicId.id);

  return (
    <div>
      <TopicDetails topic={topic} />
    </div>
  );
}
