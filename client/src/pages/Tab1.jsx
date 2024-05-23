import { useQuery } from '@apollo/client';
import { QUERY_ALL_OPEN_VISITS } from '../utils/queries';


export default function Tab1() {

  const {data, error} = useQuery(QUERY_ALL_OPEN_VISITS)
  console.log(data.openVisits)

    return (
      <div>
        <h1>Tab1</h1>
      </div>
    );
  }
  