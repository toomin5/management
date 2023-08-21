import "./App.css";
import Customer from "./components/Customer";

const customers = [
  {
    id: "1",
    image: "https://placeimg.com/64/64/any",
    name: "이민호",
    birthday: "990409",
    gender: "남자",
    job: "대학생",
  },
  {
    id: "2",
    image: "https://placeimg.com/64/64/any",
    name: "김민수",
    birthday: "960409",
    gender: "남자",
    job: "회사원",
  },
  {
    id: "3",
    image: "https://placeimg.com/64/64/any",
    name: "주현영",
    birthday: "980309",
    gender: "여자",
    job: "대학생",
  },
];

function App() {
  return (
    <div>
      {customers.map((c) => {
        return (
          <Customer
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
          />
        );
      })}
    </div>
  );
}

export default App;
