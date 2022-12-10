import week from './Date';

function Habits(props) {
  let array_week = week();
  console.log(array_week);
  return (
    <table className="habits" id={props.id}>
      <thead>
        <tr>
          <th>{props.type} Habits</th>
          {array_week.map((element) => {
            return <th>{element.getDay()}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>2</td>
        </tr>
        <tr>
          <td>3</td>
          <td>4</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Habits;
