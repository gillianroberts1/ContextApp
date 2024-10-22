// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

// class BookList extends Component {
//   static contextType = ThemeContext;

//   render() {
//     console.log(this.context);
//     const { isLightTheme, light, dark } = this.context;
//     const theme = isLightTheme ? light : dark;

//     return (
//       <div
//         className="book-list"
//         style={{ color: theme.syntax, background: theme.bg }}
//       >
//         <ul>
//           <li style={{ background: theme.ui }}>The Way of Kings</li>
//           <li style={{ background: theme.ui }}>The Name of the Wind</li>
//           <li style={{ background: theme.ui }}>The Final Empire</li>
//         </ul>
//       </div>
//     );
//   }
// }

// changed go functional component so that useContext can be used

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <div
      className="book-list"
      style={{ color: theme.syntax, background: theme.bg }}
    >
      <ul>
        <li style={{ background: theme.ui }}>The Way of Kings</li>
        <li style={{ background: theme.ui }}>The Name of the Wind</li>
        <li style={{ background: theme.ui }}>The Final Empire</li>
      </ul>
    </div>
  );
};

export default BookList;
