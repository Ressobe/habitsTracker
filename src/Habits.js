import { useState } from 'react';

const WEEK = [
  'Niedziela',
  'Poniedziałek',
  'Wtorek',
  'Środa',
  'Czwartek',
  'Piątek',
  'Sobota',
];

let number_day = new Date().getDay();

function Checkboxes(index) {
  const [checkbox, setCheckbox] = useState(true);

  const updateCheckboxClicked = () => {
    setCheckbox(!checkbox);
  };

  return (
    <td>
      <input
        type="checkbox"
        key={index}
        onClick={updateCheckboxClicked}
        checked={checkbox}
      />
    </td>
  );
}

function TableHead() {
  return (
    <thead>
      <tr>
        <th>Habit name</th>
        {WEEK.map((element, index) => {
          return (
            <th
              className={number_day === index ? 'today' : 'not-today'}
              key={index}
            >
              {element}
            </th>
          );
        })}
      </tr>
    </thead>
  );
}

function TableBody({ habits }) {
  const days = [0, 1, 2, 3, 4, 5, 6];

  return (
    <tbody>
      {habits.map((element) => {
        return (
          <tr>
            <td>{element}</td>
            {days.map((value) => {
              return Checkboxes(value);
            })}
          </tr>
        );
      })}
    </tbody>
  );
}

function Habits({ id, data }) {
  return (
    <table className="habits" id={id}>
      <TableHead />
      <TableBody habits={data} />
    </table>
  );
}

export default Habits;
