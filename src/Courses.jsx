import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client/core";
import { useLazyQuery } from "@apollo/client";

const GET_ALL_COURSE = gql`
  query GetAllCourse {
    courses {
      id
      name
      instructor
      description
    }
  }
`;

const GET_ALL_SECTION = gql`
  query GetAllSection {
    sections {
      id
      title
      description
    }
  }
`;

export function Courses() {
  const [showCourse, { loading, error, data }] = useLazyQuery(GET_ALL_COURSE);

  // const { loading, error, data } = useQuery(GET_ALL_COURSE);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h1>Courses</h1>
      <button onClick={showCourse}>Show Course</button>
      {data && 
        data.courses.map((course) => {
          return (
            <div key={course.id}>
              <h2>{course.name}</h2>
              <p>{course.instructor}</p>
              <p>{course.description}</p>
            </div>
          );
        })}
    </div>
  );
}
