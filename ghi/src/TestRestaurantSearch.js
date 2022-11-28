// import { useNavigate, useParams } from 'react-router-dom';
// import { preventDefault } from './app/utils';
// //import { useAddSearchRestaurantsMutation} from './app/restaurantApi'


// function RestaurantSearchForm() {
//   const [ addSearchRestaurants, { data } ] = useAddSearchRestaurantsMutation();
//   const navigate = useNavigate();


// //   if (data) {
// //     navigate("/");
// //   }

//   return (
//     <div className="box">
//       <div className="content">
//         <h1>Restaurant Search Test </h1>
//         <form method="post" action="/" onSubmit={preventDefault(addSearchRestaurants, e => e.target)}>
//         <div className="field">
//             <label className="label">Location</label>
//             <div className="control">
//               <input name="location" required className="input" type="text" placeholder="Seattle" />
//             </div>
//           </div>

//           <div className="field is-grouped">
//             <div className="control">
//               <button className="button is-primary">Create</button>
//             </div>
//             <div className="control">
//               <button onClick={() => navigate("/TestItineries")} type="button" className="button">Cancel</button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default RestaurantSearchForm;
