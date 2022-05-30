// import React from "react";
// import styles from "./CustomSelect.module.css";

// interface ISelectorProps {
//   options: [ {[value: string]: [text: string]} ];
//   defaultValue: string;
//   value: string;
//   onChange: MouseEvent;
//   props?: any[];
// }

// const Selector: React.FunctionComponent<ISelectorProps> = ({
//   options,
//   defaultValue,
//   value,
//   onChange,
//   ...props
// }) => {
//   <select
//     {...props}
//     className={styles.customSelect}
//     value={value}
//     onChange={(e) => onChange(e.target.value)}
//   >
//     <option disabled key={0} value="">
//       {defaultValue}
//     </option>
//     {options.map((option) => (
//       <option key={option.value} value={option.value}>
//         {option.text}
//       </option>
//     ))}
//   </select>;
//   return;
// };

// export default Selector;

// // function CustomSelect({ options, defaultValue, value, onChange, ...props }) {
// //   return (
// //     <select
// //       {...props}
// //       className={styles.customSelect}
// //       value={value}
// //       onChange={(e) => onChange(e.target.value)}
// //     >
// //       <option disabled key={0} value="">
// //         {defaultValue}
// //       </option>
// //       {options.map((option) => (
// //         <option key={option.value} value={option.value}>
// //           {option.text}
// //         </option>
// //       ))}
// //     </select>
// //   );
// // }

// // export default CustomSelect;



// Тип "({ options, defaultValue, value, onChange, ...props }: ISelectorProps) => void" не может быть назначен для типа "FunctionComponent<ISelectorProps>".
//   Тип "void" не может быть назначен для типа "ReactElement<any, any> | null".